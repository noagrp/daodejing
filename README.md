# 道德经

A reusable chapter-by-chapter reading and explanation app for 《道德经》.

## Architecture
- `data/daodejing.json` — 81 chapters, explanations, vocabulary and thought notes
- `src/daodejing-engine.js` — reusable navigation/search engine
- `index.html` — responsive reader
- PWA manifest and service worker

## Editorial approach
The app follows the standard 81-chapter structure associated with the Wang Bi received-text tradition. Ancient versions of the Laozi contain important variants, so the app keeps a clear version note and does not silently mix transmitted, Mawangdui, or Guodian readings.

The original text is classical/public-domain material. Modern explanations and notes are newly written for this project.
