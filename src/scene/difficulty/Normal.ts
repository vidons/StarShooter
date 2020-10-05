import { BackgroundGraphic } from "../../BackgroundGraphic";
import { WinGame } from "../../UI/WinGame";
import { GameOver } from "../../UI/GameOver"
import { Station } from "../../shipsAndStation/Station";
import { Score } from "../../UI/Score";

class Normal extends Phaser.Scene {
    private background: BackgroundGraphic;

    private station: Station;
    private shipGroup: Phaser.Physics.Arcade.Group;
    private generateShips: Phaser.Time.TimerEvent;

    private torpedo: Phaser.GameObjects.Sprite;

    private mouse: Phaser.Input.Pointer;
    public input: Phaser.Input.InputPlugin;

    private worldBounds: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

    control: boolean = false;

    private scoreTableau: Score;
    private scoreGame: number = 0;
    private timeGame: number = 30;
    private timeTableau: Phaser.GameObjects.Text;

    private gameOver: GameOver;

    constructor() {
        super("normal");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.station = new Station(this);
        this.add.existing(this.station);

        this.shipGroup = this.physics.add.group();
        this.shipGroup.create(this.cameras.main.width * 0.15, this.cameras.main.height / 4, "ships", "GalaxyClass");
        this.shipGroup.create(this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, "ships", "IntrepidClass");
        this.shipGroup.create(this.cameras.main.width * 0.85, this.cameras.main.height / 4, "ships", "CubeClass");
        this.shipGroup.create(this.cameras.main.width * 0.85, (this.cameras.main.height / 4) * 3, "ships", "ProbeClass");
 
        this.generateShips = this.time.addEvent({
            delay: 4000,
            callback: () => {
                this.shipGroup.create(this.cameras.main.width * 0.15, this.cameras.main.height / 4, "ships", "GalaxyClass");
                this.shipGroup.create(this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, "ships", "IntrepidClass");
                this.shipGroup.create(this.cameras.main.width * 0.85, this.cameras.main.height / 4, "ships", "CubeClass");
                this.shipGroup.create(this.cameras.main.width * 0.85, (this.cameras.main.height / 4) * 3, "ships", "ProbeClass");
            },
            loop: true
        })

        this.mouse = this.input.mousePointer;
        this.worldBounds = this.physics.world.bounds;

        this.torpedo = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "torpedo");
        
        this.scoreTableau = new Score(this, `Score: ${this.scoreGame}`);
        this.add.existing(this.scoreTableau);

        this.timeTableau = new Phaser.GameObjects.Text(this, 10, 10, "Remaining time: 30", null);

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                if (this.timeGame > 0) {
                    this.timeGame--;
                } else if (this.timeGame == 0) { 
                    this.gameOver = new GameOver(this);
                    this.add.existing(this.gameOver);
                    this.torpedo.destroy();
                    let timer: Phaser.Time.TimerEvent = this.scene.scene.time.delayedCall(1000, () => {
                        this.scoreGame = 0;
                        this.timeGame = 30;
                        this.scene.start("menu");
                    }, null, this);
                }
                this.timeTableau.text = `Remaining time: ${this.timeGame}`;
            },
            
            callbackScope: this,
            loop: true
        });
        this.add.existing(this.timeTableau);

    }

    update() {
        this.physics.add.overlap(this.torpedo, this.shipGroup, destroy, null, this);

        if (this.mouse.isDown && this.control == false) {
            this.torpedo = this.physics.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, "torpedo");
            this.physics.moveTo(this.torpedo, this.input.x, this.input.y, 750);
            this.control = true;
        }
        this.add.existing(this.scoreTableau);

        if (this.torpedo.x > this.worldBounds.width || this.torpedo.y > this.worldBounds.height || this.torpedo.x < 0 || this.torpedo.y < 0) {
            this.control = false;
        }
    }
}

function destroy(torpedo, shipGroup): void {

    shipGroup.destroy(true, true);
    torpedo.disableBody(true, true);

    this.scoreGame += 100;
    this.scoreTableau.destroy();
    this.scoreTableau = new Score(this, "Score: " + this.scoreGame);

    this.control = false;

    if (this.shipGroup.getChildren().length == 0) {
            this.winGame = new WinGame(this);
            this.add.existing(this.winGame);

            let timer: Phaser.Time.TimerEvent = this.scene.scene.time.delayedCall(1000, () => {
                this.scoreGame = 0;
                this.timeGame = 30;
                this.scene.start("menu");
            }, null, this);
    }
}

export { Normal }
