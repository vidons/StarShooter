abstract class CreateShip extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame: string) {
        super(scene, x, y, texture, frame)
    }
}

export { CreateShip }
