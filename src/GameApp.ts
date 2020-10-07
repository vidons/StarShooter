import 'phaser';
import { Boot } from './scene/Boot';
import { Preload } from './scene/Preload';
import { SplashScene } from './scene/SplashScene';
import { Menu } from './scene/Menu';
import { Easy } from './scene/difficulty/Easy';
import { Normal } from './scene/difficulty/Normal';
import { Advance } from './scene/difficulty/Advance';


class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#385e78',               
                width: 1024,
                height: 512,
                physics: {
                    default: "arcade",
                    arcade: {
                        //debug: true,
                    }
                }, 
                scene: [Boot, SplashScene, Preload, Menu, Easy, Normal, Advance]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
