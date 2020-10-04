import { BackgroundGraphic } from "../BackgroundGraphic";

class Normal extends Phaser.Scene {
    private background: BackgroundGraphic;

    private gameName: Phaser.GameObjects.Text;
    private easyLvl: Phaser.GameObjects.Text;

    constructor() {
        super("menu");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);
        
    }

    update() {

    }
}

export { Normal }
