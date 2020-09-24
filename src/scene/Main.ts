class Main extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;
    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);
        
        let text: Phaser.GameObjects.Text = this.add.text(100, 100, "Game should be here!");
        text.setFontSize(36);
    }
}

export { Main }