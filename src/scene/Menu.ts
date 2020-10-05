import { BackgroundGraphic } from "../BackgroundGraphic";

class Menu extends Phaser.Scene {
    private background: BackgroundGraphic;

    private gameName: Phaser.GameObjects.Text;
    private easyLvl: Phaser.GameObjects.Text;
    private normalLvl: Phaser.GameObjects.Text;

    constructor() {
        super("menu");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);
        
        this.gameName = new Phaser.GameObjects.Text(this, this.cameras.main.centerX, this.cameras.main.centerY, "Star Shooter", null);
        this.gameName.setPosition(this.cameras.main.centerX - this.gameName.width, this.cameras.main.centerY - this.gameName.height);
        this.gameName.setFontSize(30);
        this.add.existing(this.gameName);

        this.easyLvl = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, (this.cameras.main.height / 2) + this.gameName.height, "Easy", null).setInteractive();
        this.easyLvl.on("pointerup", () => {
            this.scene.start("easy")
        });
        this.add.existing(this.easyLvl);

        this.normalLvl = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, (this.cameras.main.height / 2) + (this.gameName.height * 2), "Normal", null).setInteractive();
        this.normalLvl.on("pointerup", () => {
            this.scene.start("normal")
        });
        this.add.existing(this.normalLvl);
    }


    update() {

    }
}

export { Menu }
