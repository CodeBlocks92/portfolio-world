// Player.js - Handles player sprite, movement, and facing direction.
// Designed to be replaced with proper animated sprites later.
// TODO: Replace placeholder rectangle with 128x128 animated sprite sheet.

class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.speed = 180;
    this.facing = 'down';
    this.isLocked = false; // true when a UI panel is open

    // TODO: Replace this placeholder with real sprite sheet:
    // this.sprite = scene.physics.add.sprite(x, y, 'player');
    // this.sprite.setFrame(0);
    // For now: draw a simple coloured rectangle as placeholder
    this.sprite = scene.add.rectangle(x, y, 22, 28, 0xa89cf7);
    scene.physics.add.existing(this.sprite);
    this.sprite.body.setCollideWorldBounds(true);

    // Character detail dots (placeholder hat and face)
    this.hat = scene.add.rectangle(x, y - 16, 16, 6, 0xcc3333);
    this.beard = scene.add.rectangle(x, y + 4, 14, 5, 0x6b3a2a);

    // Set physics body size
    this.sprite.body.setSize(22, 20);
    this.sprite.body.setOffset(0, 4);

    // Set camera follow
    scene.cameras.main.startFollow(this.sprite, true, 0.1, 0.1);

    // Depth so player appears above floor tiles
    this.sprite.setDepth(10);
    this.hat.setDepth(11);
    this.beard.setDepth(11);
  }

  update(cursors, wasd) {
    if (this.isLocked) {
      this.sprite.body.setVelocity(0, 0);
      this._syncDetails();
      return;
    }

    const body = this.sprite.body;
    let vx = 0;
    let vy = 0;

    const left = cursors.left.isDown || wasd.left.isDown;
    const right = cursors.right.isDown || wasd.right.isDown;
    const up = cursors.up.isDown || wasd.up.isDown;
    const down = cursors.down.isDown || wasd.down.isDown;

    if (left) { vx = -this.speed; this.facing = 'left'; }
    else if (right) { vx = this.speed; this.facing = 'right'; }

    if (up) { vy = -this.speed; this.facing = 'up'; }
    else if (down) { vy = this.speed; this.facing = 'down'; }

    // Normalise diagonal speed
    if (vx !== 0 && vy !== 0) {
      vx *= 0.707;
      vy *= 0.707;
    }

    body.setVelocity(vx, vy);
    this._syncDetails();

    // TODO: When sprite sheet is added, play directional walk animations here:
    // if (vx !== 0 || vy !== 0) {
    //   this.sprite.anims.play('walk_' + this.facing, true);
    // } else {
    //   this.sprite.anims.play('idle_' + this.facing, true);
    // }
  }

  _syncDetails() {
    // Keep hat and beard attached to player rectangle
    this.hat.setPosition(this.sprite.x, this.sprite.y - 16);
    this.beard.setPosition(this.sprite.x, this.sprite.y + 4);
  }

  lock() { this.isLocked = true; }
  unlock() { this.isLocked = false; }

  getPosition() {
    return { x: this.sprite.x, y: this.sprite.y };
  }

  getPhysicsBody() {
    return this.sprite;
  }
}
