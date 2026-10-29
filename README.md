# Blip

Blip is a browser-based, retro-inspired puzzle game built with React by studio Mizi. In this, the players need to investigate clues, combine ingredients, and discover the right recipes to rescue wardens (creatures essential to restore balance of the world) before the countdown reaches zero.

The game combines custom pixel-art assets, animated screens, clue-solving, open-sourced sound effects, and a downloadable rescue ID

## Play it
the live link: https://blip-studiomizi.pages.dev/


## Overview

The player enters a mysterious retro-styled world and is guided through an introductory sequence. During gameplay, the player reads clues and chooses five ingredients from three categories:
- Geo: places and natural features such.
- Weather: weather conditions.
- Time: times or states of the day and sky.

A correct combination reveals a creature and adds it to the rescued
collection. An incorrect combination reveals an Onion and costs 30
seconds. The player has ten minutes to rescue all five creatures.

## Features

- Retro pixel-art presentation, custom artwork, pixel-style windows, and a retro font.
- Introductory story sequence with video screens and dialogue.
- Clue-based puzzle gameplay with five creature recipes.
- Three ingredient categories: Geo, Weather, and Time.
- Animated cauldron with multiple visual frames and ingredient artwork.
- Ten-minute countdown timer.
- Thirty-second penalty for an incorrect combination.
- Collection interface for discovered creatures and recipe information.
- How-to-play and About panels.
- Audio feedback for interface clicks, starting the game, adding ingredients, dialogue/device interaction, typing, successful discoveries, incorrect guesses, game over, and victory.
- Separate result screens for correct and incorrect combinations.
- Victory and game-over video/animation sequences.
- Player nickname in the victory flow.
- Random six-digit rescue ID for each new game.
- Downloadable rescue ID card as a PNG image.
- Contextual hover tooltips on supported controls.
- Mizi information and an Instagram link.
- Responsive scaling of the designed game scene to fit the viewport.

## How to Play

1. Start the game using 'Let's Play'.
2. Read the clues appearing in the right-bottom window and try to guess the ingredients. 
3. Choose Geo, Weather, or Time to view its available ingredients and choose the combination. 
4. Use the mix/forward button to check if you got the right combination.
5. Review the result.
    - A correct combination reveals a creature and adds it to the
  rescued collection.
    - An incorrect combination reveals an Onion and subtracts 30
  seconds.  
6. Continue solving. Return to the game and solve the next creature's clues.
7. Create your Rescue ID. If you discover all the creatures, in the victory flow, enter a nickname and follow the prompts to create and download the Rescue ID card.
8. Read every clue carefully.
    - Some some clues are word puzzles or depend on a previous recipe.
    - Recipe matching uses ingredient names, so the names must correspond to the recipe.
    - Avoid guessing randomly because incorrect combinations cost time.
    - Use the collection interface to review creatures already discovered.

## Rules and Recipe Logic

### Timer

- A new game begins with 10 minutes (10:00).
- The timer counts down while the game is active.
- If it reaches zero before the game is won, the game-over flow begins.
- An incorrect combination subtracts 30 seconds. The timer cannot go below zero.

### Recipe Matching 

Each recipe object in App.jsx defines an internal ID, display name, creature image, category requirement, clue lines, and the exact five ingredient names needed for a match. The order of selection does not matter, the game sorts the selected names and compares them with a recipe ingredient names.

The active creature is the first recipe that has not yet been rescued. Its clues and category requirement are displayed in the game interface. 

### Starting Again

Starting a new game resets the timer, rescued creatures, revealed recipes, selected ingreients, current result, cauldron frame, victory state, nickname, rescue ID selections, and open category/helper windows.

## Screens and Player Journey

The app manages screen transitions with React state. Screen states
represented in the source include:

### Screen/State Purpose

intro: Plays the opening video.

desktop2: Shows the device/desktop scene and the "Anyone there?" interaction.

desktop3: Shows dialogue and the game-start interface.

blank: Main gameplay scene: cauldron timer, clues, and ingredient categories.

result: Displays a discovered creature or the Onion penalty result.

congrats-video: Plays the victory animation/video.

gameover-video: Plays the game-over animation/video.

gameover: Displays the game-over screen and replay option.

Rescue ID flow: Presents the completed player card and download control.

Additional panels and overlays include How to Play, Collection/recipes, About, ingredient category windows, and contextual tooltips.

### Audio and Video 

The source imports open-source audio files from src/assets and plays them in response to specific interactions.

### Asset Use

click.mp3: Interface clicks and button interactions. 

start.mp3: Starting the game from the "Let's play" control. 

pop.mp3: Adding an ingredient to the cauldron.

device.mp3: Device/dialogue interaction; typing waits for this sound to finish. 

type.mp3: Dialogue/nickname typing effect. 

win.mp3: Successful creature result. 

lose.mp3: Incorrect recipe / Onion result. 

over.mp3: Game-over video/animation. 

victory.mp3: Victory/congratulations video/animation.

### Browser Audio Notes

- Browsers may block audio until the user interacts with the page.
  Several sounds are triggered by clicks to reduce this issue.
- Audio playback errors are handled without crashing the game.
- Some effects are allowed to overlap, such as rapid click/pop
  effects.
- When replacing a sound, keep the import path and filename consistent
  or update the import in App.jsx.

## Tech Stack

- React
- Vite
- JavaScript / JSX
- CSS

## Run locally

### Prerequisites 

Before you begin, make sure you have installed:
- Node.js (which includes npm)
- Git to clone the repository

Next:
1. Clone the repo
   git clone https://github.com/hareebat/blip-webapp.git
2. Navigate to the project directory
   cd blip-webapp
3. Install dependencies
   npm install
4. Start the dev server
   npm run dev

## Troubleshooting

### The app does not start

- Confirm you are in the project root.
- Confirm package.json exists.
- Run npm install.
- Use a development command listed in package.json.
- Check the first terminal error; missing imports or dependencies often cause later errors.

### An image, sound, or video does not load

- Confirm the file exists in the expected assets folder.
- Check spelling, extension, and capitalization.
- Check the browser developer console and network panel.
- Ensure the asset is included in the deployed build.

### Sound does not play

- Click or tap the page first; browsers may block automatic playback.
- Confirm the import resolves to a real file.
- Test the file independently.
- Check whether another effect is intentionally playing at the same time.

### Rescue ID PNG looks different from the screen

- Confirm the retro font is loaded before drawing.
- Compare canvas coordinates and font sizes with the CSS.
- Verify images have loaded before exporting.
- Recheck card layout values after CSS changes.

## Credits

### Created by Mizi Studio

Blip is an original game created by Mizi Studio. The game's concept visual identity, pixel-art environments, creature designs, user interface, and original media assets were designed and created in-house.

All original artwork, character designs, animations, sound effects and other creative assets in Blip are original works of Mizi Studio unless otherwise stated.
