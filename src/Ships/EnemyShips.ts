import { CreateShip } from "./Ship";

class EnemyShips extends CreateShip {

    moveRight: number = 200;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string, frame: string) {
        super (scene, x, y, texture, frame)

        scene.physics.add.existing(this);
    }

    public enemyShipUpdate(): void {
        this.setTint(0xff0000);
        this.setPosition(this.x - this.moveRight, this.y);
    }
}

export { EnemyShips }
