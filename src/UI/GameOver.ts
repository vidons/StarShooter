class GameOver extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, (scene.cameras.main.height / 10 ) * 9, "Game Over", null);

        this.setInteractive();
        this.setColor("red");
        this.setFontSize(28);
        this.setFontFamily("Arial");
    }
}

export { GameOver } 
