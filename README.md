# The Margin — Website Files

## Files included
- `index.html` — Homepage
- `about.html` — About page
- `articles/gst-hike.html` — Sample article (replace with your own)
- `css/style.css` — All styles
- `js/main.js` — Category filtering + mobile menu

## How to publish on GitHub Pages (free)

### Step 1 — Create a GitHub account
Go to github.com and sign up (free).

### Step 2 — Create a new repository
- Click the "+" icon → "New repository"
- Name it exactly: `the-margin` (or any name you want)
- Set it to Public
- Click "Create repository"

### Step 3 — Upload your files
- Click "uploading an existing file" on the repository page
- Drag ALL these files and folders into the upload area:
  - index.html
  - about.html
  - css/ (the whole folder)
  - js/ (the whole folder)
  - articles/ (the whole folder)
- Click "Commit changes"

### Step 4 — Enable GitHub Pages
- Go to your repository → Settings → Pages (left sidebar)
- Under "Source", select "Deploy from a branch"
- Branch: main, folder: / (root)
- Click Save

### Step 5 — Your site is live
After ~60 seconds your site will be live at:
`https://YOUR-USERNAME.github.io/the-margin/`

## Adding a new article

1. Duplicate `articles/gst-hike.html`
2. Rename it (e.g. `articles/cpf-students.html`)
3. Edit the title, dek, byline, key figure, and body text
4. In `index.html`, add a new `<article class="card">` block in the grid
5. Upload both files to GitHub — the site updates automatically

## To add your logo
Place your `the-margin-icon.svg` file in the root folder.
Then add this inside the `<head>` of each HTML file:
`<link rel="icon" type="image/svg+xml" href="the-margin-icon.svg">`
(For articles: `href="../the-margin-icon.svg"`)

## Custom domain (optional, free with GitHub Pages)
1. Buy `themargin.sg` from SGNIC (~$20/year)
2. In your domain registrar, add a CNAME record pointing to:
   `YOUR-USERNAME.github.io`
3. In GitHub → Settings → Pages → Custom domain, enter `themargin.sg`
4. Done — your site now loads at themargin.sg
