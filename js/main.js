// main.js - Phaser game configuration and entry point.
// This file initialises Phaser and registers all scenes.
// Keep this file minimal - configuration only, no game logic.

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#0d0d1a',
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },  // top-down: no gravity
      debug: false          // set true to see collision boxes while developing
    }
  },
  scene: [
    BootScene,
    HubScene
    // TODO: Add more scenes here as you expand (e.g. OutdoorScene, LabScene)
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

const game = new Phaser.Game(config);

// Prevent arrow keys from scrolling the browser page
window.addEventListener('keydown', (e) => {
  if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) {
    e.preventDefault();
  }
}, { passive: false });
