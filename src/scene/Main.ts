import { Physics } from "phaser";
import { BackgroundGraphic } from "../BackgroundGraphic";
import { FriendlyShips } from "../ships/FriendlyShips";
import { EnemyShips } from "../ships/EnemyShips";
import { BtnBattle } from "../BtnBattle";
import { Torpedo } from "../Torpedo";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    private ship1: FriendlyShips;
    private ship2: FriendlyShips;
    private ship3: EnemyShips;
    private ship4: EnemyShips;

    torpedo: Torpedo;
    mouse: Phaser.Input.Pointer;
    input: Phaser.Input.InputPlugin;
    private worldBounds: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

    control: boolean = false;

    private btnBattle: BtnBattle;


    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.ship1 = new FriendlyShips(this, this.cameras.main.width * 0.15, this.cameras.main.height / 4, "ships", "GalaxyClass");
        this.add.existing(this.ship1);

        this.ship2 = new FriendlyShips(this, this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, "ships", "IntrepidClass");
        this.add.existing(this.ship2);

        this.ship3 = new EnemyShips(this, this.cameras.main.width * 0.85, this.cameras.main.height / 4, "ships", "CubeClass");
        this.add.existing(this.ship3);

        this.ship4 = new EnemyShips(this, this.cameras.main.width * 0.85, (this.cameras.main.height / 4) * 3, "ships", "ProbeClass");
        this.add.existing(this.ship4);

        this.ship1.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })

        this.ship2.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })

        this.ship3.setInteractive().once('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })

        this.ship4.setInteractive().once('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })

        this.btnBattle = new BtnBattle(this);
        this.add.existing(this.btnBattle);

        this.mouse = this.input.mousePointer;
        this.worldBounds = this.physics.world.bounds;

        this.torpedo = new Torpedo(this);
    }

    update() {
        if (this.mouse.isDown && this.control == false) {
            this.torpedo = this.physics.add.sprite(384, 256, 'torpedo');

            this.physics.moveTo(this.torpedo, this.input.x, this.input.y, 500);
            this.control = true;
            this.physics.add.overlap(this.torpedo, this.ship1, destroy, null, this);
        }
        //this.ship1.destroy(); //np
        function destroy() { //wrong place for function
                this.ship1.destroy(); //Or not... :)
        }

        if (this.torpedo.x > this.worldBounds.width || this.torpedo.y > this.worldBounds.height || this.torpedo.x < 0 || this.torpedo.y < 0) {
            this.control = false;
        }
    }
}

export { Main }
