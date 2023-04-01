import * as Phaser from 'phaser';
import { Types } from 'phaser';
import config from './config';

export default class MainScene extends Phaser.Scene {
  player: Types.Physics.Arcade.SpriteWithDynamicBody | null = null;

  preload() {
    this.load.tilemapTiledJSON('map', 'untitled.json');
    console.log('this is preload stage');
  }

  create() {
    //
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('untitled', 'tiles');
    const backgroundKey = map.addTilesetImage('background', tileset, 0, 0);
    // const layer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
  }
}
