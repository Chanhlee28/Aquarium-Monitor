# Aquarium Monitor PWA

Starter dashboard for ThingSpeak channel 3499531, Field 1 = Glass Aquarium Temperature.

## Features
- Current temperature and in-app warning above 25°C
- History chart for 24h, 48h, 72h or 7 days
- Minimum/maximum with timestamps for selected period
- Refresh every 60 seconds while open
- Connection status
- Installable from iPhone Safari

## Important limitations
The temperature alert is an in-app alert evaluated while the app is open. This starter does not send push notifications when the app is closed; reliable push alerts need a push service/backend or a separate monitoring service.

For a public ThingSpeak channel, leave the Read API key blank. For a private channel, the read key can be entered in the app's settings and is stored in that browser on the device. Never use the Write API key. A key included in public source files is visible to anyone.

## Publish using GitHub Pages
1. Create a GitHub repository named `aquarium-monitor`.
2. Upload `index.html`, `manifest.json`, `sw.js`, `icon.svg`, and `README.md` to the repository root.
3. Open repository Settings → Pages. Choose deployment from the `main` branch and `/ (root)`, then save.
4. Wait for the URL to appear in Settings → Pages and open it.
5. On iPhone, open the URL in Safari → Share → Add to Home Screen.
6. Launch it from the Home Screen icon.

GitHub Pages hosts static files without a server you need to maintain and provides HTTPS. First load needs internet. Cached app files may open offline, but ThingSpeak readings require internet.
