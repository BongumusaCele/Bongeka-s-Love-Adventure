# Bongeka’s Journey — Our Little Love Adventure

A complete romantic side-scrolling platform game. Bongeka runs, jumps and crosses three worlds to reunite with Bongumusa. HTML, CSS, SVG and vanilla JavaScript; no build, backend, keys or installation required.

## Play locally

Open `index.html`, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`. A local server enables optional media detection. Desktop: arrows or A/D to move, Space/Up/W to jump, E to read letters, Escape to pause. Phone: hold the arrow buttons and tap JUMP. Tap jump again in midair for a double jump. Landscape works too.

## The adventure

1. **The Distance Meadows:** learn the jumps, collect hearts, find a letter and activate a love bridge.
2. **The Moonlight Rooftops:** cross the night, ride a moving platform and pop grumpy clouds.
3. **The Garden of Us:** one final journey to the house where Bongumusa is waiting.

Each world has its own colours and scenery. Jump on clouds to defeat them. Every eight hearts grants a six-second shield. Pink checkpoint flowers save progress. Falls and cloud collisions return Bongeka to her latest checkpoint; there are unlimited retries and no minimum score. Letters are optional discoveries on high platforms. The finale celebrates their reunion and reveals a personal message and optional media.

The original quiz/puzzle/letters experience is preserved at **classic.html** and linked from the landing screen. It has a separate save.

## Personalise

Edit **js/config.js**. Names, letters, final message, image paths, audio, video and playlist remain configurable. The `platform` section controls world names, colours, opening copy, signs and reactions. The world layouts and physics are in **js/platform-engine.js**; drawing and touch controls are in **js/app.js**. Platform styling is in **css/platform.css**.

Original quiz questions are examples: replace `quizQuestions`, including the zero-based `answer` indexes, before sharing the classic game. Replace `loveLetters` with your actual letters; those letters also appear in the platform adventure.

## Characters and photos

Original SVG characters inspired by your supplied photographs appear throughout the game. Bongeka has dark skin, voluminous curly hair, a white top, denim shorts and red shoes. Bongumusa wears a cap, a red/black casual shirt and dark shorts; phone, cup and branding are omitted.

Replace files in **assets/characters/bongeka/** and **assets/characters/bongumusa/** to update expressions. Keep their viewBox proportions and transparent backgrounds. The platformer loads `smiling.svg`, `celebrating.svg`, `holding-heart.svg` and `thinking.svg`. Replace **assets/characters/couple/together.svg** for the reunion. SVG wrappers can embed PNG/WebP artwork, or change the image filenames in app.js. Directory paths are in config. `python -X utf8 generate-art.py` reproduces the supplied illustrations.

Add your couple photo as **assets/images/our-photo.jpg**, or change `couplePhoto` in config. The classic puzzle uses `puzzlePhoto` and falls back to the illustrated placeholder if the photo is absent.

## Audio and final media

- Background soundtrack: **assets/audio/background-music.mp3**.
- Voice note: **assets/audio/voice-note.mp3**.
- Final video: **assets/video/our-video.mp4**.
- Playlist: set `playlistURL` to an HTTPS URL.

Music begins off and requires a tap. Missing files do not block play. The finale shows “coming soon” cards instead of broken media. Use small files for phone connections.

## Progress and accessibility

localStorage saves world, checkpoint, hearts, collected items, letters, bridge state, completion and secret discoveries. Refresh restores the latest checkpoint with collected hearts intact. Leaving the tab pauses the game and releases held controls. “Save & exit” returns home; “Play again” asks before clearing the platform save. If storage is unavailable, the current session still works.

Keyboard controls, labelled buttons, visible focus outlines, a modal letter reader and reduced decorative motion are included. Tap the tiny heart beneath the final note for a secret achievement. The classic game retains its original Easter eggs.

## GitHub Pages

Upload index.html, classic.html, css/, js/ and assets/ to a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, your branch and **/ (root)**. The published game works at repository URLs like `username.github.io/bongeka-love-game/` because assets use relative paths. To update, commit changed files to the selected branch; Pages republishes them. Saved progress stays on each device.

Reference photographs are not loaded by either game. Omit **assets/references/** from the upload if you only want the illustrated characters shared.

## Verification

Run `node verify-platform.cjs` for collision, jump, moving-platform, bridge and course-reachability checks. Run `node verify-platform-ui.cjs` for a simulated DOM check of save restoration, touch input, pause, finale and reset. These checks do not replace real-device visual testing. JavaScript syntax can be checked with `node --check js/app.js`.

## Eswatini → Johannesburg edition

The platform story now starts in Eswatini, crosses a fictional moonlit road and symbolic border arch, and reaches Bongumusa in Johannesburg. Mountain scenery, a Love Express bus, a city skyline, purple-flowered trees and three love-passport stamps personalise the trip. This is a playful imagined journey rather than a real route or travel guide.

Gcinile appears in the first world as **The Sister Showdown**. Her updated mini-boss locks the route until Bongeka offers **three peace hearts during three separate calm windows**. Dodge her moving beef bubbles, land close to her, and tap **Offer peace** (keyboard **P**) when the pink calm signal appears. Jumping over her no longer bypasses the gate. Peace hearts are free; each accepted heart persists through retries and refreshes. Her two SVG poses are fictional cartoon artwork without a photographic reference.

## More challenging adventure

- **Gcinile:** a 3-second attack phase followed by a 1.8-second calm window. An offer only counts on the ground near her, and repeated offers in the same window cannot add extra points. Beef bubbles send Bongeka to the last checkpoint. A checkpoint just before the showdown keeps retries short.
- **Officer Cupid:** in the road world, collect the pink love passport before the police barrier. Wait behind the line while the signal is red. Walk across during its 2.4-second green window. A missing passport or red light keeps the gate closed; jumping cannot skip the check. This is a playful fictional checkpoint.
- **Extra obstacles:** thorns in Eswatini, traffic cones along the road, slippery puddles and cones in Johannesburg, and four moving grumpy clouds in every world. Jump over hazards or use the temporary love shield.
- **Fair retries:** checkpoints, accepted peace hearts, passport collection and police clearance save independently. Falling or touching a hazard returns Bongeka to her latest checkpoint with a short grace period. Unlimited retries remain.
- **Fresh run:** the landing screen now has **Start a new adventure**, with confirmation, so you can try all the new challenges without finishing an existing save first.

Customise locations in `platform.journey`, world scenery in `platform.worlds`, Gcinile's dialogue and assets in `platform.sister`, and the checkpoint text in `platform.police` inside **js/config.js**. Challenge timings and obstacles are in **js/platform-engine.js**. Existing saves remain compatible: already passed areas stay passed.

Run `node verify-sister.cjs` for the timed three-heart boss, `node verify-obstacles.cjs` for police timing and hazards, `node verify-platform.cjs` for course geometry, and `node verify-platform-ui.cjs` for touch, persistence, pause, reset and the finale. These are logic and simulated DOM checks; real-device visual testing remains separate.

## Benoni After Dark

The start of the third world now includes a fictional horror detour before the Johannesburg reunion. The Midnight Stalker is an invented masked villain; the chapter makes no claim about an actual person or real crime.

Collect **three gold keys on the high platforms**. Sweeping searchlights detect Bongeka on the ground, activating a short chase. Double-jump to a rooftop or hide inside a warm streetlamp's light to stay safe. Once all three keys are found, approach the escape gate and tap **Unlock escape gate** (keyboard **E**). The full-height gate cannot be jumped over. Captures return Bongeka to a safe checkpoint; collected keys remain saved, with no lives limit or graphic violence.

The chapter has an additional checkpoint by the final key. Pausing, switching tabs and reading letters freeze the chase along with the rest of the game. Existing saves already beyond the detour stay beyond it. Choose **Start a new adventure** to experience it from the beginning.

Customise the story and instructions in `platform.benoni` in **js/config.js**. Keys, searchlight sweeps, safe zones, patrol/chase speed and the escape gate are in **js/platform-engine.js**. The villain and nighttime scenery are drawn directly on canvas. Run `node verify-benoni.cjs` for key reachability, gate logic, searchlights, safe zones, collision and grace-period checks; the UI verification also checks mobile unlocking and restoration of collected keys.

## Love Quest game presentation

The platform game now opens as **Bongeka's Love Quest**, with an original SVG landscape, chunky outlined title, animated character idle poses, a save-slot menu and an illustrated route map. Select map stops for mission previews; **HOW TO PLAY** opens the controls guide. All preview actions preserve progress. Stage intros, pause screens, secret letters and stage-clear screens use character dialogue and quest panels. The reunion is a game victory screen, with the romantic final message intact.

Messages now sound like characters talking to Bongeka. Clues explain the actual action needed (including where peace hearts come from), and gameplay tips appear in Bongumusa's quest radio. Configurable presentation text is in `platform.gameUI` and `platform.missions` in **js/config.js**, followed by character dialogue overrides.

**SFX** enables locally synthesized jump, pickup, secret and victory sounds using the browser's Web Audio API. Effects start off, require a tap, and do not need any sound files. Background music remains a separate optional control. Motion preferences disable title animations. Fonts use local system fallbacks, so presentation no longer relies on Google Fonts loading. The original classic game keeps its original styling.

New assets: **assets/images/quest-landscape.svg**, **assets/images/quest-map.svg**, and **assets/characters/officer/normal.svg**. Styles are in **css/platform.css**. The UI checks now also cover mission previews, the help panel, readable multiline messages, new-save confirmation and the generated sound toggle. A connected browser or real phone is still needed for visual QA.
