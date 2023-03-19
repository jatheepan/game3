import * as Phaser from 'phaser';
import MainScene from './main-scene';

import './style.css';

const WIDTH = 576 * 2;
const HEIGHT = 324;

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: '#cdcdcd',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: [MainScene],
};

const game = new Phaser.Game(config);
