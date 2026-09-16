# Hosting Guide

Bio Web is a **static website** — no server, no database, no build step. You can host it anywhere that serves HTML files.

---

## Option 1: GitHub Pages (Recommended — Free)

### Steps:

1. **Create a GitHub account** at [github.com](https://github.com)

2. **Create a new repository**
   - Name it: `your-username.github.io` (for main site)
   - Or any name like `bio` (for `your-username.github.io/bio`)

3. **Upload your files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repo → Settings → Pages
   - Source: `main` branch
   - Click Save

5. **Your site is live at:**
   - `https://YOUR_USERNAME.github.io` (if repo is `your-username.github.io`)
   - `https://YOUR_USERNAME.github.io/REPO_NAME` (otherwise)

### Custom Domain (Optional):

1. Buy a domain (e.g., from Namecheap, Cloudflare)
2. Edit the `CNAME` file in your repo, add your domain:
   ```
   yourdomain.com
   ```
3. In your domain DNS settings, add:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`
4. Wait 5-30 minutes for propagation

---

## Option 2: Netlify (Free)

### Steps:

1. Go to [netlify.com](https://netlify.com) and sign up

2. **Drag and drop** your project folder onto the deploy area

3. Or connect GitHub:
   - Click "Add new site" → Import from Git
   - Select your repo
   - Build command: (leave empty)
   - Publish directory: `.` (dot)
   - Click "Deploy site"

4. **Your site gets a URL like:** `https://random-name.netlify.app`

5. **Custom domain:**
   - Site settings → Domain management → Add custom domain
   - Follow the DNS instructions

### Auto-deploy from GitHub:

Netlify automatically redeploys when you push to GitHub.

---

## Option 3: Vercel (Free)

### Steps:

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub

2. Click **"Add New Project"**

3. Import your GitHub repository

4. **Configure:**
   - Framework: `Other`
   - Build command: (leave empty)
   - Output directory: `.` (dot)

5. Click **Deploy**

6. **Your site gets a URL like:** `https://your-project.vercel.app`

7. **Custom domain:**
   - Project Settings → Domains → Add
   - Follow DNS instructions

---

## Option 4: Cloudflare Pages (Free)

### Steps:

1. Log in to [Cloudflare](https://dash.cloudflare.com)

2. Go to **Workers & Pages** → Create → Pages

3. **Upload assets** directly or connect GitHub

4. If uploading directly:
   - Drag your project folder
   - Click Deploy

5. **Your site gets a URL like:** `https://your-project.pages.dev`

6. **Custom domain:**
   - Custom domains → Set up a custom domain
   - Add your domain and configure DNS

---

## Option 5: Traditional Web Hosting (Paid)

Any web hosting that supports HTML works:

### Providers:
- **Hostinger** (~$2/mo)
- **Bluehost** (~$3/mo)
- **SiteGround** (~$3/mo)
- **A2 Hosting** (~$3/mo)

### Steps:

1. Sign up for a hosting plan

2. Access your hosting control panel (cPanel)

3. Open **File Manager** → navigate to `public_html/`

4. **Upload all project files** maintaining the folder structure:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── assets/
   │   ├── back/
   │   ├── badge/
   │   ├── css/
   │   ├── cursor/
   │   ├── favico/
   │   ├── js/
   │   ├── logo/
   │   ├── music/
   │   └── pfp/
   └── ...
   ```

5. Your site is live at your domain

### Via FTP:

1. Get FTP credentials from your hosting provider
2. Use an FTP client (FileZilla, WinSCP)
3. Connect and upload to `public_html/`

---

## Option 6: Local Development

### Quick local preview:

**Windows:**
```bash
# Using Python
cd path/to/bio-web
python -m http.server 8000
# Open http://localhost:8000

# Using Node.js (if installed)
npx serve .
```

**Mac/Linux:**
```bash
cd path/to/bio-web
python3 -m http.server 8000
# Open http://localhost:8000
```

**VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

---

## Comparison Table

| Platform | Price | Custom Domain | Auto Deploy | Speed |
|----------|-------|---------------|-------------|-------|
| GitHub Pages | Free | Yes | Yes (Git) | Good |
| Netlify | Free | Yes | Yes (Git) | Fast |
| Vercel | Free | Yes | Yes (Git) | Fast |
| Cloudflare Pages | Free | Yes | Yes (Git) | Fastest |
| Traditional Hosting | $2-5/mo | Yes | No (FTP) | Varies |

---

## Recommendations

- **For beginners:** GitHub Pages or Netlify (easiest setup)
- **For best performance:** Cloudflare Pages
- **For custom domain + email:** Traditional hosting
- **For quick testing:** Local with Live Server

---

## Troubleshooting

### "Page not found" after deploy
- Check that `index.html` is in the root of the publish directory
- For GitHub Pages, ensure the correct branch/folder is selected

### Music/video not playing
- Some browsers block autoplay. The site handles this with user interaction (pressing Enter)
- Ensure file paths are correct (case-sensitive on Linux servers)

### Discord status not showing
- Verify your Discord User ID is correct in both `lanyard.js` and `discord.js`
- Your Discord must be open and visible for Lanyard to work
- Check browser console (F12) for errors

### Images not loading
- Check file paths are relative (start with `./`)
- Ensure files are uploaded to the correct directory structure
- File names are case-sensitive on Linux servers
