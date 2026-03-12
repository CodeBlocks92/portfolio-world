// HubScene.js - The main game scene. Builds the hub room, places all interactables,
// manages the game loop, and connects player interaction to the UI system.
// TODO: Replace all placeholder graphics with proper tilemap and sprite art.

class HubScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HubScene' });
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // ─── WORLD BOUNDS ───────────────────────────────────────────────────────
    const WORLD_W = 800;
    const WORLD_H = 640;
    this.physics.world.setBounds(0, 0, WORLD_W, WORLD_H);
    this.cameras.main.setBounds(0, 0, WORLD_W, WORLD_H);

    // ─── FLOOR ──────────────────────────────────────────────────────────────
    // TODO: Replace with tilemap. Load a .tmj file exported from Tiled.
    // For now: a warm dark floor rectangle
    this.add.rectangle(WORLD_W / 2, WORLD_H / 2, WORLD_W, WORLD_H, 0x16213e);

    // Floor tile grid (subtle, placeholder)
    this._drawFloorGrid(WORLD_W, WORLD_H);

    // ─── WALLS ──────────────────────────────────────────────────────────────
    // TODO: Replace with tilemap collision layer
    this._buildWalls(WORLD_W, WORLD_H);

    // ─── ROOM DECORATIONS ───────────────────────────────────────────────────
    // Cosy corner details (placeholder coloured shapes)
    // TODO: Replace with proper sprite art
    this._drawRoomDecor(WORLD_W, WORLD_H);

    // ─── INTERACTABLES ──────────────────────────────────────────────────────
    this.interactables = [
      new Interactable(this, {
        x: 160, y: 120,
        width: 56, height: 36,
        color: 0x4a6fa5,
        label: 'Desk Terminal',
        icon: '💼',
        contentKey: 'resume'
      }),
      new Interactable(this, {
        x: 320, y: 100,
        width: 52, height: 32,
        color: 0x2d6a4f,
        label: 'Monitor',
        icon: '🖥️',
        contentKey: 'projects'
      }),
      new Interactable(this, {
        x: 560, y: 110,
        width: 44, height: 60,
        color: 0x8b4513,
        label: 'Bookshelf',
        icon: '📚',
        contentKey: 'blog'
      }),
      new Interactable(this, {
        x: 680, y: 300,
        width: 64, height: 40,
        color: 0x2c2c54,
        label: 'TV Screen',
        icon: '📺',
        contentKey: 'videos'
      }),
      new Interactable(this, {
        x: 640, y: 480,
        width: 70, height: 50,
        color: 0x5d4037,
        label: 'Photo Wall',
        icon: '🖼️',
        contentKey: 'photos'
      }),
      new Interactable(this, {
        x: 200, y: 500,
        width: 50, height: 36,
        color: 0x4e342e,
        label: 'Dog Corner',
        icon: '🐶',
        contentKey: 'dog'
      }),
      new Interactable(this, {
        x: 400, y: 540,
        width: 60, height: 44,
        color: 0x37474f,
        label: 'Memory Board',
        icon: '📅',
        contentKey: 'life'
      })
    ];

    // Add colliders between player and interactables
    // (set up after player is created below)

    // ─── PLAYER ─────────────────────────────────────────────────────────────
    this.player = new Player(this, WORLD_W / 2, WORLD_H / 2);

    // Collide player with wall group
    this.physics.add.collider(this.player.getPhysicsBody(), this.wallGroup);

    // Collide player with interactable bodies
    for (const item of this.interactables) {
      this.physics.add.collider(
        this.player.getPhysicsBody(),
        item.getPhysicsBody()
      );
    }

    // ─── INPUT ──────────────────────────────────────────────────────────────
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    };
    this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // ─── MINIMAP LABEL ──────────────────────────────────────────────────────
    // Fixed UI text (stays on screen as camera moves)
    this.roomLabel = this.add.text(16, 16, 'The Hub', {
      fontSize: '11px',
      color: '#a89cf7',
      stroke: '#000000',
      strokeThickness: 2
    }).setScrollFactor(0).setDepth(20);

    this.controlsHint = this.add.text(W - 16, H - 16,
      'WASD / Arrows = Move    E / Space = Interact', {
      fontSize: '9px',
      color: '#5a5a7a',
      stroke: '#000000',
      strokeThickness: 2
    }).setOrigin(1, 1).setScrollFactor(0).setDepth(20);
  }

  _drawFloorGrid(W, H) {
    // Subtle grid lines to give the floor texture before real art is added
    const g = this.add.graphics();
    g.lineStyle(1, 0x1e2d50, 0.6);
    const TILE = 40;
    for (let x = 0; x <= W; x += TILE) {
      g.lineBetween(x, 0, x, H);
    }
    for (let y = 0; y <= H; y += TILE) {
      g.lineBetween(0, y, W, y);
    }
    g.setDepth(1);
  }

  _buildWalls(W, H) {
    // Static physics walls around the room perimeter
    // TODO: Replace with tilemap collision layer for room-shaped walls
    this.wallGroup = this.physics.add.staticGroup();
    const THICKNESS = 20;
    const walls = [
      { x: W / 2,        y: THICKNESS / 2,  w: W,         h: THICKNESS  }, // top
      { x: W / 2,        y: H - THICKNESS/2, w: W,         h: THICKNESS  }, // bottom
      { x: THICKNESS/2,  y: H / 2,           w: THICKNESS, h: H          }, // left
      { x: W - THICKNESS/2, y: H / 2,        w: THICKNESS, h: H          }, // right
    ];
    for (const w of walls) {
      const rect = this.add.rectangle(w.x, w.y, w.w, w.h, 0x0d0d1a);
      this.physics.add.existing(rect, true);
      this.wallGroup.add(rect);
    }

    // Wall border accent
    const g = this.add.graphics();
    g.lineStyle(2, 0x2a2a4a, 1);
    g.strokeRect(THICKNESS, THICKNESS, W - THICKNESS * 2, H - THICKNESS * 2);
    g.setDepth(2);
  }

  _drawRoomDecor(W, H) {
    // Placeholder cosy room details - coloured areas suggesting furniture/zones
    // TODO: Replace with sprite atlas objects and tilemap decor layer
    const g = this.add.graphics();
    g.setDepth(3);

    // Top wall shelf/counter area
    g.fillStyle(0x1a2744, 1);
    g.fillRect(30, 30, W - 60, 60);

    // Left alcove
    g.fillStyle(0x1a2030, 1);
    g.fillRect(30, 100, 80, 200);

    // Right alcove
    g.fillStyle(0x1a2030, 1);
    g.fillRect(W - 110, 100, 80, 280);

    // Bottom cosy zone
    g.fillStyle(0x1a1a2a, 1);
    g.fillRect(100, H - 130, W - 200, 100);

    // Rug in the centre
    g.fillStyle(0x2e1a3a, 0.6);
    g.fillEllipse(W / 2, H / 2, 260, 180);
    g.lineStyle(2, 0x4a2a5a, 0.8);
    g.strokeEllipse(W / 2, H / 2, 260, 180);
  }

  update() {
    if (uiManager.isOpen) return;

    // Update player movement
    this.player.update(this.cursors, this.wasd);

    // Update interactables (proximity detection)
    const pos = this.player.getPosition();
    for (const item of this.interactables) {
      item.update(pos.x, pos.y);
    }

    // Check for interact key press
    if (
      Phaser.Input.Keyboard.JustDown(this.interactKey) ||
      Phaser.Input.Keyboard.JustDown(this.spaceKey)
    ) {
      this._tryInteract();
    }
  }

  _tryInteract() {
    const pos = this.player.getPosition();
    for (const item of this.interactables) {
      if (item.isNearby) {
        this.player.lock();
        uiManager.open(item.contentKey, () => {
          this.player.unlock();
        });
        break;
      }
    }
  }
}
