import { ShipModel } from "./ShipModel";

class ShipCharacteristics {
    private _ShipModel: ShipModel;
    private _hullPoints: number;
    private _damage: number;

    constructor(
        ShipModel: ShipModel,
        hullPoints: number,
        damage: number,
        ) {
        this._ShipModel = ShipModel;
        this._hullPoints = hullPoints;
        this._damage = damage;
    }

    public get type(): ShipModel {
        return this._ShipModel;
    }

    public get hullPoints(): number {
        return this._hullPoints;
    }

    public get damage(): number {
        return this._damage;
    }
}

export { ShipCharacteristics }
