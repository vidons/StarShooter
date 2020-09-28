class BtnBattle extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, "Engage", null);
    }
    
    public btnBattleFormat(): void {
        this.setFontSize(28);
        this.setFontFamily("Arial");

        this.on('pointerdown', function (pointer) {
           this.setTint(0xff0000);
        });
        
        this.on('pointerout', function (pointer) {
            this.clearTint();
        });
        
        this.on('pointerup', function (pointer) {
            this.clearTint();
        });
    }
}

export { BtnBattle } 
