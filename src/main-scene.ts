import * as Phaser from 'phaser';
import objectMap from './images/objectmap.png';
import map from './map.json';

export default class MainScene extends Phaser.Scene {
  preload() {
    this.load.image('tiles', objectMap);
    this.load.tilemapTiledJSON('map', map);
  }

  create() {
    const map = this.make.tilemap({
      key: 'map',
      tileWidth: 48,
      tileHeight: 48,
    });
    const tileset = map.addTilesetImage('objects', 'tiles');

    const layer1 = map.createLayer('background', tileset, 0, 0);
    const layer2 = map.createLayer('floor', tileset, 0, 0);
  }
}
