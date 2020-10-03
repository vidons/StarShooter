import { Physics } from "phaser";
import { BackgroundGraphic } from "../BackgroundGraphic";
import { BtnBattle } from "../BtnBattle";
import { Torpedo } from "../Torpedo";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    private shipGroup: Phaser.Physics.Arcade.Group;
    private torpedo: Torpedo;

    private mouse: Phaser.Input.Pointer;
    public input: Phaser.Input.InputPlugin;

    private worldBounds: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

    control: boolean = false;

    private btnBattle: BtnBattle;

    private scoreTableau: Phaser.GameObjects.Text;
    private scoreGame: number = 0;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.shipGroup = this.physics.add.group();
        this.shipGroup.create(this.cameras.main.width * 0.15, this.cameras.main.height / 4, "ships", "GalaxyClass");
        this.shipGroup.create(this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, "ships", "IntrepidClass");
        this.shipGroup.create(this.cameras.main.width * 0.85, this.cameras.main.height / 4, "ships", "CubeClass");
        this.shipGroup.create(this.cameras.main.width * 0.85, (this.cameras.main.height / 4) * 3, "ships", "ProbeClass");

        this.mouse = this.input.mousePointer;
        this.worldBounds = this.physics.world.bounds;

        this.torpedo = new Torpedo(this);

        this.scoreTableau = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, 10, "Score: " + this.scoreGame, null);
        this.add.existing(this.scoreTableau);
    }

    update() {
        this.physics.add.overlap(this.torpedo, this.shipGroup, destroy, null, this);
        
        if (this.mouse.isDown && this.control == false) {
            this.torpedo = this.physics.add.sprite(512, 256, 'torpedo');
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
    console.log();
    torpedo.disableBody(true, true);

    this.scoreGame += 100;
    this.scoreTableau.destroy();
    this.scoreTableau = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, 10, "Score: " + this.scoreGame, null);
    
    this.control = false;

    if (this.shipGroup.getChildren().length == 0) {
        let timer: Phaser.Time.TimerEvent = this.scene.scene.time.delayedCall(2000, () => {
            console.log("Win!");
            this.btnBattle = new BtnBattle(this);
            this.add.existing(this.btnBattle);
        }, null, this);
    }
}

export { Main }
