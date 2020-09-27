import { CreateShip } from "./CreateShip";

class EnemyShips extends CreateShip {

    moveRight: number = 200;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string) {
        super (scene, x, y, texture)
    }

    public enemyShipUpdate(): void {
        this.setTint(0xff0000);
        this.setPosition(this.x - this.moveRight, this.y);
    }
}

export { EnemyShips }