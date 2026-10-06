# Browser verification

Install local tooling: `npm install --prefix .qa playwright`.
Run `node qa/mobile.cjs` and `node qa/layout.cjs` from the project root with a local server on port 8000 (`python -m http.server 8000`). Tests use installed Microsoft Edge in headless mode. Screenshots go to ignored `qa/artifacts/`.

Mobile suite covers seven portrait/landscape sizes, control bounds, horizontal overflow, simultaneous touch movement/jump and release, rotation, clue dialogs, Gcinile peace and Benoni escape controls. Layout suite verifies pixel portrait loading, stable canvas height when status/clue copy changes, title rendering, and viewport height changes. These are browser simulations, not physical-device tests.
