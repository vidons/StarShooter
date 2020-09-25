import { CreateShip } from "../CreateShip";

class Main extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;

    private ship1: CreateShip;

    //private galaxyClass: Phaser.GameObjects.Image;
    private text: Phaser.GameObjects.Text;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.ship1 = new CreateShip(this, this.cameras.main.width / 6 , this.cameras.main.height / 2, "galaxyClass");
        this.add.existing(this.ship1);
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
        
        this.text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "Reset").setInteractive();
        this.text.setFontSize(28);
        
        this.text.on('pointerdown', function (pointer) {
            this.setTint(0xff0000);
            
        })

    }
}

export { Main }