import * as Phaser from 'phaser';
import { Types } from 'phaser';
import marioBigRunning from './images/mario-big-running.png';
import skyBackground from './images/asset/background/Day/1.png';
import buildingBackground from './images/asset/background/Day/2.png';

console.log(marioBigRunning);

import './style.css';

const WIDTH = 576;
const HEIGHT = 324;

class MainScene extends Phaser.Scene {
  player: Types.Physics.Arcade.SpriteWithDynamicBody | null = null;

  preload() {
    this.load.image('sky', skyBackground);
    this.load.image('building', buildingBackground);
    this.load.spritesheet('mario-big-running', marioBigRunning, {
      frameWidth: 16,
      frameHeight: 30,
    });
    console.log('this is preload stage');
  }

  create() {
    this.add.image(WIDTH / 2, HEIGHT / 2, 'sky').setScale(2);
    this.add.image(WIDTH / 2, HEIGHT / 2, 'building');
    this.anims.create({
      key: 'mario-left',
      frames: this.anims.generateFrameNumbers('mario-big-running', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // this.player = this.physics.add.sprite(16, 30, 'mario-big-running');
    // this.player.setCollideWorldBounds(true);
    // this.player.anims.play('mario-left', true);
  }
}

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
