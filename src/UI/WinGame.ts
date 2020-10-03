class WinGame extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, "WIN", null);

        this.setInteractive();
        this.setFontSize(28);
        this.setFontFamily("Arial");
    }
}

export { WinGame } 
