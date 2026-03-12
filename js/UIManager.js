// UIManager.js - Controls all HTML overlay panels.
// Sits outside Phaser so content can be rich HTML with links, images, embeds.
// The game notifies UIManager to open/close panels; UIManager notifies the game when closed.

class UIManager {
  constructor() {
    this.overlay = document.getElementById('ui-overlay');
    this.panelTitle = document.getElementById('panel-title');
    this.panelSubtitle = document.getElementById('panel-subtitle');
    this.panelBody = document.getElementById('panel-body');
    this.closeBtn = document.getElementById('close-btn');
    this.isOpen = false;
    this.onCloseCallback = null;

    // Close on button click
    this.closeBtn.addEventListener('click', () => this.close());

    // Close on overlay background click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Escape') && this.isOpen) this.close();
    });
  }

  open(contentKey, onClose) {
    const data = CONTENT[contentKey];
    if (!data) return;

    this.panelTitle.textContent = data.title;
    this.panelSubtitle.textContent = data.subtitle;
    this.panelBody.innerHTML = data.body;

    this.overlay.classList.add('active');
    this.isOpen = true;
    this.onCloseCallback = onClose || null;

    // Animate panel in
    const panel = document.getElementById('panel');
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(24px) scale(0.97)';
    panel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  close() {
    const panel = document.getElementById('panel');
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(24px) scale(0.97)';
    setTimeout(() => {
      this.overlay.classList.remove('active');
      this.isOpen = false;
      if (this.onCloseCallback) {
        this.onCloseCallback();
        this.onCloseCallback = null;
      }
    }, 220);
  }
}

// Global singleton
const uiManager = new UIManager();
