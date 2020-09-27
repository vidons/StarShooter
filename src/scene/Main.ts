import { BackgroundGraphic } from "../BackgroundGraphic";
import { FriendlyShips } from "../Ships/FriendlyShips";
import { EnemyShips } from "../Ships/EnemyShips";
import { ShipModel } from "../Ships/ShipModel";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    private ship1: FriendlyShips;
    private ship2: FriendlyShips;
    private ship3: EnemyShips;

    private btnBattle: Phaser.GameObjects.Text;

    private selectedShip: number;

    private friendlyShipScale: number = 0.75;
    private enemyyShipScale: number = 0.70;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.ship1 = new FriendlyShips(this, this.cameras.main.width * 0.15, this.cameras.main.height / 4, ShipModel.GALAXY.toString());
        this.ship1.setScale(this.friendlyShipScale, this.friendlyShipScale);
        this.add.existing(this.ship1);

        this.ship2 = new FriendlyShips(this, this.cameras.main.width / 7, (this.cameras.main.height / 4) * 3, ShipModel.INTREPID.toString());
        this.ship2.setScale(this.friendlyShipScale, this.friendlyShipScale);
        this.add.existing(this.ship2);

        this.ship3 = new EnemyShips(this, this.cameras.main.width * 0.85, this.cameras.main.height / 4, ShipModel.CUBE.toString());
        this.ship3.setScale(this.enemyyShipScale, this.enemyyShipScale);
        this.add.existing(this.ship3);

        this.ship1.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })
        this.ship2.setInteractive().once('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })

        this.ship3.setInteractive().once('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })

        this.btnBattle = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "Engage").setInteractive();
        this.btnBattle.setFontSize(28);
        this.btnBattle.setFontFamily("Arial")

        this.btnBattle.on('pointerdown', function (pointer) {
            this.setTint(0xff0000);
        })

        this.btnBattle.on('pointerout', function (pointer) {
            this.clearTint();
        });

        this.btnBattle.on('pointerup', function (pointer) {
            this.clearTint();
        });
    }

    update() {

    }
}

export { Main }