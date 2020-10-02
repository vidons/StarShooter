import { Physics } from "phaser";
import { BackgroundGraphic } from "../BackgroundGraphic";
import { FriendlyShips } from "../ships/FriendlyShips";
import { EnemyShips } from "../ships/EnemyShips";
import { BtnBattle } from "../BtnBattle";
import { Torpedo } from "../Torpedo";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    shipGroup: Phaser.Physics.Arcade.Group;
    private torpedo: Torpedo;

    private mouse: Phaser.Input.Pointer;
    public input: Phaser.Input.InputPlugin;

    private worldBounds: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

    control: boolean = false;

    private btnBattle: BtnBattle;


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

        this.btnBattle = new BtnBattle(this);
        this.add.existing(this.btnBattle);

        this.mouse = this.input.mousePointer;
        this.worldBounds = this.physics.world.bounds;

        this.torpedo = new Torpedo(this);
    }

    update() {
        this.physics.add.overlap(this.torpedo, this.shipGroup, destroy, null, this);

        if (this.mouse.isDown && this.control == false) {
            this.torpedo = this.physics.add.sprite(512, 256, 'torpedo');

            this.physics.moveTo(this.torpedo, this.input.x, this.input.y, 750);
            this.control = true;
        }


        if (this.torpedo.x > this.worldBounds.width || this.torpedo.y > this.worldBounds.height || this.torpedo.x < 0 || this.torpedo.y < 0) {
            this.control = false;
        }
    }
}

function destroy(torpedo, shipGroup): void {
    shipGroup.disableBody(true, true);
    torpedo.disableBody(true, true);
    this.control = false;
}

export { Main }
