class Station extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, "empokNor")
    }
}

export { Station }
