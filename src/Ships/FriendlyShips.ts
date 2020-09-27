import { CreateShip } from "./CreateShip";

class FriendlyShips extends CreateShip {

    moveLeft: number = 200;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string) {
        super (scene, x, y, texture)
    }

    public friendlyShipUpdate(): void {
        this.setTint(0xff0000);
        this.setPosition(this.x + this.moveLeft, this.y);
    }
}

export { FriendlyShips }