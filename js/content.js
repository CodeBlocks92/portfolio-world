// content.js - All portfolio content lives here. Edit this file to update your portfolio.
// Separated from game logic so you never need to touch Phaser code to update content.

const CONTENT = {
  resume: {
    title: "Resume / CV",
    subtitle: "Experience & Skills",
    body: `
      <p><strong>Your Name</strong> &mdash; Full-Stack Developer & Creative Technologist</p>
      <p>Based in Dromiskin, County Louth, Ireland.</p>
      <br/>
      <p><strong>Experience</strong></p>
      <ul>
        <li>Senior Developer &mdash; Company Name (2022&ndash;Present)</li>
        <li>Developer &mdash; Another Company (2019&ndash;2022)</li>
        <li>Junior Developer &mdash; First Role (2017&ndash;2019)</li>
      </ul>
      <br/>
      <p><strong>Skills</strong></p>
      <ul>
        <li>JavaScript, TypeScript, Node.js</li>
        <li>React, Vue, HTML/CSS</li>
        <li>Phaser 3, Godot 4</li>
        <li>PostgreSQL, MongoDB</li>
        <li>AWS, Netlify, GitHub Actions</li>
      </ul>
      <br/>
      <p><strong>Education</strong></p>
      <ul>
        <li>BSc Computer Science &mdash; Your University (2013&ndash;2017)</li>
      </ul>
      <br/>
      <p><a href="#" target="_blank">Download full CV (PDF)</a></p>
    `
  },

  projects: {
    title: "Projects",
    subtitle: "Things I've built",
    body: `
      <p><strong>Portfolio World</strong> &mdash; This very site. A Phaser 3 game-like portfolio experience.</p>
      <br/>
      <p><strong>Project Two</strong> &mdash; A short description of what this project does and why it matters.</p>
      <br/>
      <p><strong>Project Three</strong> &mdash; Another project description. Link to GitHub or live demo.</p>
      <br/>
      <p><strong>Project Four</strong> &mdash; Open source contribution or side project.</p>
      <br/>
      <p><em>More on <a href="https://github.com/CodeBlocks92" target="_blank">GitHub</a></em></p>
    `
  },

  blog: {
    title: "Blog",
    subtitle: "Writing & thoughts",
    body: `
      <p><strong>How I built this portfolio</strong> &mdash; The story of building a game-like website from scratch using Phaser 3.</p>
      <br/>
      <p><strong>On creativity and side projects</strong> &mdash; Why I think everyone in tech should build something just for fun.</p>
      <br/>
      <p><strong>Lessons from a year of solo development</strong> &mdash; What I learned shipping things alone.</p>
      <br/>
      <p><em>Blog coming soon &mdash; entries will appear here.</em></p>
    `
  },

  videos: {
    title: "Videos",
    subtitle: "Watch & explore",
    body: `
      <p>Video content and recordings will appear here.</p>
      <br/>
      <p>This could include:</p>
      <ul>
        <li>Devlogs and build process videos</li>
        <li>Talks or presentations</li>
        <li>Creative projects and short films</li>
        <li>YouTube embeds</li>
      </ul>
      <br/>
      <p><em>Coming soon &mdash; check back shortly.</em></p>
    `
  },

  photos: {
    title: "Photos",
    subtitle: "Moments & places",
    body: `
      <p>Photo gallery coming soon.</p>
      <br/>
      <p>This wall will show images from adventures, events, and daily life.</p>
      <br/>
      <ul>
        <li>Travel photography</li>
        <li>Events and milestones</li>
        <li>Everyday moments worth keeping</li>
      </ul>
      <br/>
      <p><em>Upload photos to the /assets/photos/ folder to populate this gallery.</em></p>
    `
  },

  dog: {
    title: "Dog Corner",
    subtitle: "The important section",
    body: `
      <p>Welcome to the most important part of this portfolio.</p>
      <br/>
      <p>This section is dedicated to my dog. Photos, videos, and updates will live here.</p>
      <br/>
      <ul>
        <li>Dog photos (many)</li>
        <li>Dog videos (also many)</li>
        <li>General dog-related content</li>
        <li>Important dog updates</li>
      </ul>
      <br/>
      <p><em>Dog content loading... please wait... it is worth it.</em></p>
    `
  },

  life: {
    title: "Life Updates",
    subtitle: "Events & milestones",
    body: `
      <p>A living record of things that matter.</p>
      <br/>
      <ul>
        <li><strong>2026</strong> &mdash; Built this portfolio world. Started something new.</li>
        <li><strong>2025</strong> &mdash; Add your milestone here.</li>
        <li><strong>2024</strong> &mdash; Another year, another chapter.</li>
        <li><strong>2023</strong> &mdash; Something worth remembering.</li>
      </ul>
      <br/>
      <p><em>This board updates as life does.</em></p>
    `
  }
};
