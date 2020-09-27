class BattleBtn extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, "Engage", null);
    }
}

export { BattleBtn } 
