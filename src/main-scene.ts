import * as Phaser from 'phaser';
import { Types } from 'phaser';
import marioBigRunning from './images/mario-big-running.png';
import skyBackground from './images/asset/background/Day/1.png';
import buildingBackground from './images/asset/background/Day/2.png';
import treeBackground from './images/asset/background/Day/5.png';

const WIDTH = 576;
const HEIGHT = 324;

export default class MainScene extends Phaser.Scene {
  player: Types.Physics.Arcade.SpriteWithDynamicBody | null = null;

  preload() {
    this.load.image('sky', skyBackground);
    this.load.image('building', buildingBackground);
    this.load.image('tree', treeBackground);
    this.load.spritesheet('mario-big-running', marioBigRunning, {
      frameWidth: 16,
      frameHeight: 30,
    });

    console.log('this is preload stage');
  }

  create() {
    this.add
      .tileSprite(0, 0, 576 * 2, 324, 'building')
      .setScale(1)
      .setOrigin(0, 0);
    this.add.tileSprite(0, 0, 576 * 2, 400, 'tree').setOrigin(0, 0);

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
