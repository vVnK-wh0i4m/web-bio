# Customization Guide

This guide covers everything you need to personalize your bio page.

---

## 1. Profile Picture

**File:** `assets/pfp/default.jpg`

Replace this file with your own photo. Recommended specs:
- Format: JPG or PNG
- Size: 300x300px or larger (square aspect ratio)
- Max file size: 500KB for fast loading

---

## 2. Username

The username appears with a typing animation effect.

### Where to change it:

**`index.html`** (line ~52):
```html
<span id="username">Your Name</span>
```

**`assets/js/script.js`** (line ~11) — Terminal boot screen:
```javascript
"User: Your Name",
```

**`assets/js/username-animation.js`** (line ~5) — Typing animation variants:
```javascript
const usernameVariants = ["Your Name", "Your Alias"];
```
You can add more variants to cycle through.

---

## 3. Browser Tab Title

**File:** `assets/js/title.js`

Replace the titles array with your own text. Each entry appears for 1 second:
```javascript
var titles = [
  "Hi",
  "Welcome",
  "to my",
  "profile",
  "Enjoy!"
];
```

---

## 4. Bio Description

**File:** `index.html` (line ~72-75)

```html
<p id="user-description" style="color: white;">
  Hi everyone, I'm Your Name
  <br>Edit this to describe yourself<br>Add your interests and what you do
</p>
```

---

## 5. Social Media Links

**File:** `index.html` (lines ~103-119)

Replace each URL with your own:

```html
<a href="https://facebook.com/YOUR_ID" target="_blank">
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://tiktok.com/@YOUR_USERNAME" target="_blank">
<a href="https://x.com/YOUR_USERNAME" target="_blank">
<a href="mailto:your@email.com" target="_blank">
```

To add/remove social icons, copy or delete an `<a>` block. Available Font Awesome icons:
- `fa-brands fa-discord`
- `fa-brands fa-instagram`
- `fa-brands fa-youtube`
- `fa-brands fa-linkedin`
- `fa-brands fa-reddit`
- See [Font Awesome icons](https://fontawesome.com/icons)

---

## 6. Discord Integration

### Discord User ID

To show your Discord status, you need your **User ID**:

1. Open Discord → Settings → Advanced → Enable **Developer Mode**
2. Right-click your username → **Copy User ID**
3. Paste it in two files:

**`assets/js/lanyard.js`** (line ~2):
```javascript
const userId = "YOUR_DISCORD_USER_ID";
```

**`assets/js/discord.js`** (line ~2):
```javascript
const userId = "YOUR_DISCORD_USER_ID";
```

### How it works:
- Uses [Lanyard API](https://docs.lanyard.rest/) to fetch your Discord status
- Updates every 10 seconds automatically
- Shows avatar, status (online/idle/dnd/offline), and current activity
- Also fetches your Discord avatar decoration frame

---

## 7. Background Video

**File:** `assets/back/default.mp4`

Replace with your own video. Recommended:
- Format: MP4 (H.264)
- Resolution: 1920x1080 or 1280x720
- Duration: 10-30 seconds (it loops)
- File size: Keep under 10MB for fast loading
- Content: Abstract/ambient works best

---

## 8. Background Music

**File:** `assets/music/`

Replace the MP3 files in this directory. The player supports:
- Multiple tracks with shuffle
- Volume control slider
- Progress bar

Supported format: MP3

---

## 9. Favicon

**File:** `assets/favico/default.jpg`

Replace with your own favicon. Recommended:
- Format: JPG, PNG, or ICO
- Size: 32x32px or 64x64px

---

## 10. Badges

**File:** `assets/badge/`

Badge images displayed under your username:
- `developer.png`
- `love.png`
- `music.png`
- `verified.png`

Replace these PNG files or remove the `<img>` tags in `index.html` (lines ~57-60) to hide badges.

---

## 11. Programming Language Logos

**File:** `assets/logo/`

Language logo images shown on your profile:
- `c.png`, `cplusplus.png`, `csharp.png`
- `java.png`, `matlab.png`, `python.png`

Replace with your own skill logos or remove the `<img>` tags in `index.html` (lines ~63-68).

---

## 12. Custom CSS

**File:** `styles.css`

Key CSS variables and sections you can modify:

```css
/* Background overlay darkness */
#video-overlay { background: rgba(0, 0, 0, 0.5); }

/* Profile card blur */
#blurred-box { backdrop-filter: blur(10px); }

/* Username font size */
#username { font-size: 32px; }
```

---

## 13. ASCII Art

**File:** `assets/js/script.js` (line ~235-250)

The `getAsciiArt()` function returns the boot screen art. Replace with your own ASCII art.

---

## 14. Music Player Behavior

**File:** `assets/js/music.js`

The music player auto-starts when the user presses Enter or clicks the terminal. It shuffles through tracks. Edit this file to change behavior.

---

## File Checklist

After customization, verify these files are updated:

| File | What to check |
|------|---------------|
| `index.html` | Username, bio, social links |
| `assets/js/script.js` | Terminal username |
| `assets/js/username-animation.js` | Username variants |
| `assets/js/title.js` | Browser tab titles |
| `assets/js/lanyard.js` | Discord User ID |
| `assets/js/discord.js` | Discord User ID |
| `assets/pfp/default.jpg` | Your profile picture |
| `assets/back/default.mp4` | Your background video |
| `assets/music/*.mp3` | Your music files |
| `assets/favico/default.jpg` | Your favicon |
