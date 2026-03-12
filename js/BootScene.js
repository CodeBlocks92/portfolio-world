// BootScene.js - Handles preloading assets before the game starts.
// Currently minimal because we use placeholder shapes instead of image files.
// When real art is ready, add all preload() calls here.

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // TODO: Preload real assets here when ready. Examples:
    // this.load.image('floor_tile', 'assets/tiles/floor.png');
    // this.load.spritesheet('player', 'assets/sprites/player.png', { frameWidth: 128, frameHeight: 128 });
    // this.load.tilemapTiledJSON('hub_map', 'assets/maps/hub.tmj');
    // this.load.atlas('objects', 'assets/sprites/objects.png', 'assets/sprites/objects.json');

    // Loading screen text
    const W = this.scale.width;
    const H = this.scale.height;
    this.add.rectangle(W / 2, H / 2, W, H, 0x0d0d1a);
    this.add.text(W / 2, H / 2 - 20, 'Portfolio World', {
      fontSize: '22px',
      color: '#a89cf7',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5);
    this.add.text(W / 2, H / 2 + 14, 'Loading...', {
      fontSize: '11px',
      color: '#5a5a7a'
    }).setOrigin(0.5);
  }

  create() {
    // All assets loaded - start the main scene
    this.scene.start('HubScene');
  }
}
