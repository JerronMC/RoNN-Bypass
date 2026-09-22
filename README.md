# RoNN Bypass

A mobile-first redesign for RoNN Bypass with a focused, high-contrast interface inspired by fast link utilities.

## Included

- Responsive landing page and link-processing UI
- CSS-only visual system with lightweight animations
- Mobile navigation and touch-friendly controls
- Reduced-motion support
- No runtime dependencies or UI framework
- Lazy reveal animations using `IntersectionObserver`

## Run locally

Serve the directory with any static server, for example:

```bash
python3 -m http.server 8080
```

The link form currently shows a UI demo message. Connect the submit handler in `script.js` to the production RoNN API when the endpoint is available.
