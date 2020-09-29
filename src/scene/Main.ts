import { BackgroundGraphic } from "../BackgroundGraphic";
import { FriendlyShips } from "../ships/FriendlyShips";
import { EnemyShips } from "../ships/EnemyShips";
import { ShipModel } from "../ships/ShipModel";
import { BtnBattle } from "../BtnBattle";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    private ship1: FriendlyShips;
    private ship2: FriendlyShips;
    private ship3: EnemyShips;
    private ship4: EnemyShips;

    private btnBattle: BtnBattle;

    private readonly friendlyShipScale: number = 0.75;
    private readonly enemyyShipScale: number = 0.70;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.ship1 = new FriendlyShips(this, this.cameras.main.width * 0.15, this.cameras.main.height / 4, ShipModel.GALAXY.toString());
        this.ship1.setScale(this.friendlyShipScale);
        this.add.existing(this.ship1);

        this.ship2 = new FriendlyShips(this, this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, ShipModel.INTREPID.toString());
        this.ship2.setScale(this.friendlyShipScale);
        this.add.existing(this.ship2);

        this.ship3 = new EnemyShips(this, this.cameras.main.width * 0.85, this.cameras.main.height / 4, ShipModel.CUBE.toString());
        this.ship3.setScale(this.enemyyShipScale);
        this.add.existing(this.ship3);

        this.ship4 = new EnemyShips(this, this.cameras.main.width * 0.85, (this.cameras.main.height / 4) * 3, "probeClass");
        this.ship4.setScale(this.enemyyShipScale);
        this.add.existing(this.ship4);

        this.ship1.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })
        
        this.ship2.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })
        
        this.ship3.setInteractive().once('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })

        this.ship4.setInteractive().once('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })
        
        this.btnBattle = new BtnBattle(this);
        this.add.existing(this.btnBattle);
    }

    update() {

    }
}

export { Main }
