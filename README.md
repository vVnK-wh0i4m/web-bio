# Bio Web - Personal Link-in-Bio Page

A self-hosted, fully customizable personal bio/link-in-bio webpage template. Share your profile, social links, Discord status, and more — all in one beautiful page.

## Preview

![Preview](https://i.postimg.cc/524RpJKb/1.png)

## Features

- **Terminal boot animation** with ASCII art and system info
- **Background music & video** with audio visualizer
- **Discord live status** via Lanyard API (avatar, status, activity)
- **Neko cat** desktop pet that follows your cursor
- **3D tilt effect** on profile card
- **Typing animation** for username
- **Animated browser tab title**
- **Social media links** (Facebook, GitHub, TikTok, X, Email)
- **Badge system** (Developer, Verified, Music, Love)
- **Programming language logos** showcase
- **Fully responsive** — works on mobile & desktop
- **Zero dependencies** — pure HTML/CSS/JS, no build tools needed

## Quick Start

1. **Download** or clone this repository
2. **Edit** `index.html` — replace `Your Name`, social links, description
3. **Edit** `assets/js/lanyard.js` and `assets/js/discord.js` — replace `YOUR_DISCORD_USER_ID`
4. **Replace** your profile picture at `assets/pfp/default.jpg`
5. **Host** on any static hosting service (see [Hosting Guide](docs/HOSTING.md))

## Project Structure

```
bio-web/
├── index.html                 # Main page
├── styles.css                 # Main stylesheet
├── LICENSE                    # MIT License
├── assets/
│   ├── back/default.mp4       # Background video
│   ├── badge/                 # Profile badges (PNG)
│   ├── css/tilt-effect.css    # 3D tilt styles
│   ├── cursor/neko.png        # Neko cat sprite
│   ├── favico/default.jpg     # Favicon
│   ├── js/
│   │   ├── audio-visualizer.js
│   │   ├── discord.js         # Discord avatar frame
│   │   ├── lanyard.js         # Discord status (Lanyard API)
│   │   ├── music.js           # Music player
│   │   ├── neko.js            # Neko cat class
│   │   ├── neko-init.js       # Neko initialization
│   │   ├── script.js          # Terminal boot animation
│   │   ├── tilt-effect.js     # 3D tilt logic
│   │   ├── title.js           # Browser tab animation
│   │   └── username-animation.js
│   ├── logo/                  # Programming language logos
│   ├── music/                 # Background music (MP3)
│   └── pfp/default.jpg        # Profile picture
└── docs/
    ├── CUSTOMIZATION.md       # How to customize
    ├── HOSTING.md             # Hosting guides
    └── LICENSE-AND-TERMS.md   # License & terms
```

## Documentation

| Document | Description |
|----------|-------------|
| [Customization Guide](docs/CUSTOMIZATION.md) | How to personalize your bio page |
| [Hosting Guide](docs/HOSTING.md) | Deploy to GitHub Pages, Netlify, Vercel, etc. |
| [License & Terms](docs/LICENSE-AND-TERMS.md) | MIT License and usage terms |

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** (no frameworks)
- **Font Awesome 6.5.0** (icons)
- **Google Fonts** (Inter, Comic Neue)
- **vanilla-tilt.js** (3D effects)
- **Lanyard API** (Discord integration)
- **Web Audio API** (audio visualizer)

## License

This project is licensed under the [MIT License](LICENSE).

Originally created by [c0mplex](https://github.com/c0mplex07). See [License & Terms](docs/LICENSE-AND-TERMS.md) for details.
