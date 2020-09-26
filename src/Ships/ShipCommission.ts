import { ShipCharacteristics } from "./ShipCharacteristics";
import { ShipModel } from "./ShipModel";

class ShipCommission {
    commissions: ShipCharacteristics[];

    constructor() {
        this.initCommission();

    }

    initCommission(): void {
        this.commissions = [];

        this.commissions.push(new ShipCharacteristics(ShipModel.GALAXY, 50000, 30000));
        this.commissions.push(new ShipCharacteristics(ShipModel.INTREPID, 30000, 20000));
        this.commissions.push(new ShipCharacteristics(ShipModel.CUBE, 100000, 50000));
        this.commissions.push(new ShipCharacteristics(ShipModel.PROBE, 10000, 3500));
    }


}

export { ShipCommission }
