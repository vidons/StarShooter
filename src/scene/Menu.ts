import { Physics } from "phaser";
import { BackgroundGraphic } from "../BackgroundGraphic";
import { BtnBattle } from "../BtnBattle";
import { Torpedo } from "../Torpedo";

class Menu extends Phaser.Scene {
    private background: BackgroundGraphic;

    private easyLvl: Phaser.GameObjects.Text;

    constructor() {
        super("menu");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);
        
        this.easyLvl = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "Easy", null).setInteractive();
        this.easyLvl.on("pointerdown", () => {
            this.scene.start("main")
        });
        this.add.existing(this.easyLvl);

    }

    update() {

    }


}

export { Menu }
