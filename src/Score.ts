class Score extends Phaser.GameObjects.Text {
    private scoreGame: number = 0;

    constructor(scene: Phaser.Scene,  x: number, y: number, text: string) {
        super(scene, scene.cameras.main.width / 2, 10, text, null);
    }
}

export { Score }
