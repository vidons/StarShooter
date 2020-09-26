import { CreateShip } from "./CreateShip";

class EnemyShips extends CreateShip {

    moveRight: number = 100;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string) {
        super (scene, x, y, texture)
    }

    public get movementRight(): number {
        return this.moveRight;
    }

    public enemyShipUpdate(): void {
        // console.log(time, delta);
        //this.setTint(0xff0000);
        this.setTint(0xff0000);
        this.setPosition(750, 256);
        //this.handleKeyboardInput(deltaTime);
    }

    /*
    let friendlyMovement: number = this.ship1.movementLeft;
    this.ship1.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
        this.x += friendlyMovement;
    })
    */
}

export { EnemyShips }