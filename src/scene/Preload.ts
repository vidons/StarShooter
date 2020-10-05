class Preload extends Phaser.Scene {
    private readonly BOX_WIDTH: number = 320;
    private readonly BOX_HEIGHT: number = 50;
    private readonly OFFSET: number = 10;

    private progressBox: Phaser.GameObjects.Graphics;
    private progressBar: Phaser.GameObjects.Graphics;
    private loadingText: Phaser.GameObjects.Text;
    private percentText: Phaser.GameObjects.Text;
    private assetText: Phaser.GameObjects.Text;

    constructor() {
        super("preload");
    }

    create() {
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.height;

        this.progressBox = new Phaser.GameObjects.Graphics(this);
        this.progressBox.fillStyle(0x0000ff, 0.8);
        this.progressBox.fillRect(width / 2 - this.BOX_WIDTH / 2, height * 0.65, this.BOX_WIDTH, this.BOX_HEIGHT);
        this.add.existing(this.progressBox);

        this.progressBar = new Phaser.GameObjects.Graphics(this);
        this.progressBar.fillStyle(0x00ff00, 1);
        this.add.existing(this.progressBar);

        this.loadingText = this.add.text(width / 2, height * 0.6, "Loading...", { font: "30px Monotype", fill: "#ffffff" });
        this.loadingText.setOrigin(0.5, 1);
        this.add.existing(this.loadingText);

        this.percentText = this.add.text(width / 2, height * 0.65 + this.BOX_HEIGHT / 2, "0%", { font: "24px Monotype", fill: "#ffffff" });
        this.percentText.setOrigin(0.5);
        this.add.existing(this.percentText);

        this.assetText = this.add.text(width / 2, height * 0.8, "", { font: "24px Monotype", fill: "#ffffff" });
        this.assetText.setOrigin(0.5);
        this.add.existing(this.assetText);

        //images
        this.load.image("logo", "assets/images/ufp.png")
        this.load.image("background", "assets/images/background.png");
        this.load.atlas("ships", "assets/images/ships.png", "assets/images/ships.json");
        this.load.image("empokNor", "assets/images/empokNor.png");
        this.load.image('torpedo','./assets/images/torpedo.png');

        //preloader code
        this.load.on("progress", this.onProgressUpdated, this);
        this.load.on("load", this.onFileLoaded, this);
        this.load.on("complete", this.onComplete, this);

        this.load.start();
    }

    private onProgressUpdated(value: number): void {
        this.progressBar.fillRect(this.cameras.main.width / 2 - this.BOX_WIDTH / 2 + this.OFFSET, this.cameras.main.height * 0.65 + this.OFFSET, (this.BOX_WIDTH - 2 * this.OFFSET) * value, this.BOX_HEIGHT - 2 * this.OFFSET);

        this.percentText.setText(Math.trunc(value * 100) + "%");
    }

    private onFileLoaded(file: Phaser.Loader.File): void {
        this.assetText.setText("Loading asset: " + file.key);
    }

    private onComplete(): void {
        this.scene.start("splash");
        this.scene.remove("preload");
    }
}

export { Preload }
