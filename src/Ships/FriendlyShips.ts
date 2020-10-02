import { CreateShip } from "./Ship";

class FriendlyShips extends CreateShip {

    moveLeft: number = 200;

    constructor (scene: Phaser.Scene, x: number, y: number, texture: string, frame: string) {
        super (scene, x, y, texture, frame)
        //scene.physics.add.group();
        scene.physics.add.existing(this);
        //scene.add.existing(this);
    }

    public friendlyShipUpdate(): void {
        this.setTint(0xff0000);
        //this.setPosition(this.x + this.moveLeft, this.y);
    }
}

export { FriendlyShips }
