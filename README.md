# FTamas77.github.io

Static GitHub Pages site for the personal homepage of Dr. Tamas Fekete.

## Files

- `index.html` - page structure and small rendering script
- `styles.css` - visual system and responsive layout
- `site-data.js` - main content source for hero text, projects, publications, and current focus

## Typical edits

1. Open `site-data.js`
2. Add or update entries in `selectedWork`
3. Edit the `now` section for short public updates
4. Add links or publication entries as needed

## Project images

Each selected work card can optionally render an image. Add an `image` object to a project entry in `site-data.js`:

```js
image: {
  src: "./assets/example.png",
  alt: "Short description of the project visual"
}
```

## Publish on GitHub Pages

1. Push these files to the `main` branch of `FTamas77.github.io`
2. GitHub Pages will serve the site automatically at `https://ftamas77.github.io/`

## Local preview

Open `index.html` directly in the browser, or run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

You can also use the helper script:

```powershell
.\preview.ps1
```

This starts a local server on port `8080` if needed and opens the site in the browser.
