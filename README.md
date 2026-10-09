# Aquarium Monitor PWA

ThingSpeak dashboard for glass aquarium temperature.

## Features
- Current temperature and in-app warning above 25°C
- History chart for 24h, 48h, 72h or 7 days
- Minimum/maximum with timestamps for selected period
- Refresh every 60 seconds while open
- Connection status
- Installable from iPhone Safari

## Publish using GitHub Pages
Upload these files to the repository root and replace the matching old files:
- `index.html`
- `manifest.json`
- `sw.js`
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`
- `README.md`

The app icon is a left-facing Boa shrimp on an opaque black background. The dashboard's 🌊 emoji remains unchanged. This version uses PNG icons only; `icon.svg` is not needed and can be deleted from the repository.

## ThingSpeak privacy
For a private channel, enter the Read API key in the app's connection settings. It is stored in that browser on the device. Never use the Write API key. Do not embed a key in public source files.

## iPhone icon refresh
After GitHub Pages deploys, remove the old Home Screen shortcut and add the website again in Safari using Share → Add to Home Screen.
