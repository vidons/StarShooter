class Score extends Phaser.GameObjects.Text {
    public scoreGame: number = 0;

    constructor(scene: Phaser.Scene, text: string) {
        super(scene, scene.cameras.main.width / 2, 10, text, null);
    }
}

export { Score }
