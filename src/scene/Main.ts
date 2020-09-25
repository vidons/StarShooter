class Main extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;
    private GalaxyClass: Phaser.GameObjects.Image;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.GalaxyClass = new Phaser.GameObjects.Image(this, 100, 100, "GalaxyClass");
        this.GalaxyClass.setPosition(this.cameras.main.width / 4, this.cameras.main.height / 4);
        this.add.existing(this.GalaxyClass);

        
        /*
        let text: Phaser.GameObjects.Text = this.add.text(100, 100, "Game should be here!");
        text.setFontSize(36);
        */
    }
}

export { Main }