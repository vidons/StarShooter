class Main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    create() {
        let text: Phaser.GameObjects.Text = this.add.text(100, 100, "GAME should be here!");
        text.setFontSize(36);
    }
}

export { Main }