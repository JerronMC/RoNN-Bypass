# RoNN Bypass

RoNN Bypass is a fresh, mobile-first link-processing interface with a neon violet/cyan visual system, custom RoNN mark, responsive navigation, accessible controls, and reduced-motion support.

## API integration

The form sends a `POST` request to `/api/bypass` with:

```json
{"url":"https://example.com"}
```

The API should return JSON containing one of `url`, `result`, `destination`, or `link`. To use a different endpoint, define `window.RONN_API_URL` before `script.js`, for example:

```html
<script>window.RONN_API_URL = 'https://api.example.com/bypass';</script>
<script src="script.js"></script>
```

The repository contains only the frontend integration; the server-side bypass implementation must be supplied by the API owner.

## Local preview

```bash
python3 -m http.server 8080
```
