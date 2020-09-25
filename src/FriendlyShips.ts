import { CreateShip } from "./CreateShip";

class FriendlyShips extends CreateShip {

    moveLeft: number = 100;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string) {
        super (scene, x, y, texture)
    }

    public get movementLeft(): number {
        return this.moveLeft;
    }
}

export { FriendlyShips }