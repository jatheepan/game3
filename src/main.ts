import * as Phaser from 'phaser';
import MainScene from './main-scene';
import config from './config';

import './style.css';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: config.width,
  height: config.height,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: [MainScene],
};

const game = new Phaser.Game(gameConfig);
