// Interactable.js - Represents a single interactive object in the world.
// Each object has a position, a coloured placeholder, a label, an icon, and a content key.
// TODO: Replace placeholder rectangles with proper isometric sprite objects.

class Interactable {
  constructor(scene, config) {
    // config: { x, y, width, height, color, label, icon, contentKey }
    this.scene = scene;
    this.contentKey = config.contentKey;
    this.label = config.label;
    this.isNearby = false;
    this.INTERACT_DISTANCE = 64;

    // Draw the object body
    // TODO: Replace with tilemap objects or sprite atlas frames
    this.body = scene.add.rectangle(
      config.x, config.y,
      config.width || 48, config.height || 40,
      config.color || 0x7c6af7
    );
    this.body.setDepth(5);

    // Add physics body for collision (static)
    scene.physics.add.existing(this.body, true);

    // Icon label above the object
    this.iconText = scene.add.text(config.x, config.y - 28, config.icon || '?', {
      fontSize: '18px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(6);

    // Interact prompt (E) - only visible when player is nearby
    this.prompt = scene.add.text(config.x, config.y - 46, '[E]', {
      fontSize: '11px',
      color: '#a89cf7',
      stroke: '#000000',
      strokeThickness: 2,
      backgroundColor: '#1e1e2e',
      padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(7).setVisible(false);

    // Name label below the object
    this.nameText = scene.add.text(config.x, config.y + 28, config.label, {
      fontSize: '9px',
      color: '#c0c0d8',
      stroke: '#000000',
      strokeThickness: 2
    }).setOrigin(0.5).setDepth(6);

    // Glow / highlight tween (runs when nearby)
    this.glowTween = null;
  }

  update(playerX, playerY) {
    const dx = playerX - this.body.x;
    const dy = playerY - this.body.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const wasNearby = this.isNearby;
    this.isNearby = dist < this.INTERACT_DISTANCE;

    if (this.isNearby && !wasNearby) {
      this._onEnterRange();
    } else if (!this.isNearby && wasNearby) {
      this._onExitRange();
    }
  }

  _onEnterRange() {
    this.prompt.setVisible(true);
    // Pulse the object colour
    if (this.glowTween) this.glowTween.stop();
    this.glowTween = this.scene.tweens.add({
      targets: this.body,
      scaleX: 1.08,
      scaleY: 1.08,
      duration: 300,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  _onExitRange() {
    this.prompt.setVisible(false);
    if (this.glowTween) {
      this.glowTween.stop();
      this.glowTween = null;
    }
    this.body.setScale(1, 1);
  }

  getPhysicsBody() {
    return this.body;
  }
}
