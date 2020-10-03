import { BackgroundGraphic } from "../BackgroundGraphic";

class Menu extends Phaser.Scene {
    private background: BackgroundGraphic;

    private gameName: Phaser.GameObjects.Text;
    private easyLvl: Phaser.GameObjects.Text;

    constructor() {
        super("menu");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);
        
        this.gameName = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "Star Shooter", null)
        this.gameName.setFont("tng");
        this.gameName.setFontSize(30);
        this.add.existing(this.gameName);

        this.easyLvl = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, (this.cameras.main.height / 2) + this.gameName.height, "Easy", null).setInteractive();
        this.easyLvl.on("pointerup", () => {
            this.scene.start("main")
        });
        this.add.existing(this.easyLvl);
    }


    update() {

    }
}

export { Menu }
