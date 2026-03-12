# Portfolio World

An interactive game-like personal portfolio built with **Phaser 3**. Instead of a traditional website, visitors explore a cosy top-down world and interact with objects to discover content.

**Live demo:** *(deploy link goes here)*

---

## What it is

You move around a small hub room using WASD or arrow keys. Walk up to objects and press **E** or **Space** to interact. Each object opens a content panel:

| Object | Content |
|---|---|
| Desk Terminal | Resume / CV |
| Monitor | Projects |
| Bookshelf | Blog posts |
| TV Screen | Videos |
| Photo Wall | Photo gallery |
| Dog Corner | Dog content |
| Memory Board | Life updates & milestones |

---

## Project structure

```
portfolio-world/
  index.html          # Entry point, HTML shell, CSS, script tags
  js/
    main.js           # Phaser config and game initialisation
    BootScene.js      # Asset preloader - add load() calls here for real art
    HubScene.js       # Main room: layout, objects, game loop
    Player.js         # Player movement and physics
    Interactable.js   # Interactive object class (proximity, highlight, prompt)
    UIManager.js      # HTML overlay panel system
    content.js        # ALL portfolio content - edit this to update the site
```

---

## How to update your content

Open `js/content.js`. Every section is clearly labelled. Edit the `body` HTML for each section. No Phaser knowledge needed.

---

## How to run locally

Because it loads scripts via `<script src="js/...">`, you need a simple local server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Or use the **Live Server** extension in VS Code.

---

## How to deploy

1. Download the repo as a ZIP (Code > Download ZIP)
2. Unzip it
3. Drag the folder to **Netlify Drop** at app.netlify.com/drop
4. Done - you get a live URL immediately

---

## Roadmap / TODO

- [ ] Replace placeholder rectangles with real pixel art sprites
- [ ] Add proper tilemap (Tiled .tmj format)
- [ ] Animate player with directional walk cycle (128x128 sprite sheet)
- [ ] Add touch/mobile virtual joystick
- [ ] Add ambient music and interaction sound effects
- [ ] Add photo gallery with real images
- [ ] Add video embeds to TV screen
- [ ] Expand world with additional rooms or outdoor areas
- [ ] Add click-to-move as alternative to keyboard

---

## Stack

- [Phaser 3](https://phaser.io) (via CDN)
- Vanilla JS, no build tools
- Plain HTML/CSS for UI overlays
- GitHub for version control
- Netlify for hosting

---

*Built by CodeBlocks92*
