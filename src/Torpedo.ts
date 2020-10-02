class Torpedo extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, "torpedo")
        
        scene.physics.add.existing(this);
    }
}

export { Torpedo }
