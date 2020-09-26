import { FriendlyShips } from "../FriendlyShips";
import { EnemyShips } from "../EnemyShips";

class Main extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;

    private ship1: FriendlyShips;
    private ship2: FriendlyShips;
    private ship3: EnemyShips;

    //private galaxyClass: Phaser.GameObjects.Image;
    private btnBattle: Phaser.GameObjects.Text;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.ship1 = new FriendlyShips(this, this.cameras.main.width * 0.15 , this.cameras.main.height / 4, "galaxyClass");
        this.ship1.setScale(0.75, 0.75);
        this.add.existing(this.ship1);
        console.log(this.ship1.width);

        //this.ship2 = new FriendlyShips(this, this.cameras.main.width / 6 , this.ship1.height + (this.cameras.main.height / 3), "intrepidClass").setInteractive( () => { move() });
        this.ship2 = new FriendlyShips(this, this.cameras.main.width / 7 , this.ship1.height + (this.cameras.main.height / 3), "intrepidClass").setInteractive();
        this.ship2.setScale(0.75, 0.75);
        this.add.existing(this.ship2);

        this.ship3 = new EnemyShips(this, this.cameras.main.width * 0.85, this.cameras.main.height / 4, "CubeClass").setInteractive();
        this.ship3.setScale(0.7, 0.7);
        this.add.existing(this.ship3);

        /*
        let friendlyMovement: number = this.ship1.movementLeft;
        this.ship1.on('pointerdown', function (pointer) {
            this.setTint(0xff0000);
            this.x += friendlyMovement;
        })
        */

        /*
        this.galaxyClass = new Phaser.GameObjects.Image(this, this.cameras.main.width / 6 , this.cameras.main.height / 2, "galaxyClass").setInteractive();
        this.add.existing(this.galaxyClass);

        this.galaxyClass.on('pointerdown', function (pointer) {
            this.setTint(0xff0000);
            this.x += 100;
        })

        this.galaxyClass.on('pointerout', function (pointer) {

            this.clearTint();
    
        });

        this.galaxyClass.on('pointerup', function (pointer) {

            this.clearTint();
    
        });
        */
        
        this.btnBattle = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "Engage").setInteractive();
        this.btnBattle.setFontSize(28);
        
        this.btnBattle.on('pointerdown', function (pointer) {
            this.setTint(0xff0000);
            
        })

    }
    update() {
        //this.ship2.update();
        
        this.ship1.setInteractive().on('pointerdown', function (pointer) {
            console.log();
            this.friendlyShipUpdate();
        })
        
        this.ship2.on('pointerdown', function (pointer) {
            this.friendlyShipUpdate();
        })

        this.ship3.on('pointerdown', function (pointer) {
            this.enemyShipUpdate();
        })
    }
}

export { Main }