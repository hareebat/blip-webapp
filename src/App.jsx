import { useEffect, useRef, useState } from 'react'
import './App.css'

import introVideo from './assets/intro.MP4'
import gameOverVideo from './assets/game_over.MP4'
import congratsVideo from './assets/congrats.MP4'
import bgImage from './assets/bg.PNG'
import windowImage from './assets/win1.PNG'
import win2 from './assets/win2.PNG'
import deviceVideo from './assets/device.MP4'
import devMessage from './assets/dev_message.PNG'
import miziImage from './assets/mizi.PNG'
import visitImage from './assets/visit.PNG'
import aboutImage from './assets/about.PNG'
import aboutWindowImage from './assets/about_win.PNG'
import onionImage from './assets/onion.PNG'

import collectImage from './assets/collect.PNG'
import htpImage from './assets/htp.PNG'
import window3Image from './assets/win3.PNG'
import window4Image from './assets/win4.PNG'
import couldron1 from './assets/couldron1.PNG'
import couldron2 from './assets/couldron2.PNG'
import couldron3 from './assets/couldron3.PNG'
import couldron4 from './assets/couldron4.PNG'
import rulesImage from './assets/rules.PNG'
import collectionImage from './assets/win_char.PNG'
import forwardImage from './assets/forward.PNG'
import backImage from './assets/back.PNG'
import rescueIdImage from './assets/rescueID.PNG'

import crea1Image from './assets/creat1.PNG'
import crea2Image from './assets/creat2.PNG'
import crea3Image from './assets/creat3.PNG'
import crea4Image from './assets/creat4.PNG'
import crea5Image from './assets/creat5.PNG'

import geoImage from './assets/geo.PNG'
import weatherImage from './assets/wea.PNG'
import timeImage from './assets/time.PNG'
import geoWindowImage from './assets/win_opt.PNG'

import caveImage from './assets/cave.PNG'
import volcanoImage from './assets/volcano.PNG'
import forestImage from './assets/forest.PNG'
import mountainImage from './assets/mountain.PNG'
import oceanImage from './assets/ocean.PNG'

import caveBall from './assets/cave_ball.PNG'
import volcanoBall from './assets/volcano_ball.PNG'
import forestBall from './assets/forest_ball.PNG'
import mountainBall from './assets/mountain_ball.PNG'
import oceanBall from './assets/ocean_ball.PNG'
import eclBall from './assets/ecl_ball.PNG'

import rainyImage from './assets/rainy.PNG'
import snowyImage from './assets/snowy.PNG'
import stormyImage from './assets/stormy.PNG'
import cloudyImage from './assets/cloudy.PNG'
import sunnyImage from './assets/sunny.PNG'

import rainyBall from './assets/rainy_ball.PNG'
import snowyBall from './assets/snowy_ball.PNG'
import stormyBall from './assets/stormy_ball.PNG'
import cloudyBall from './assets/cloudy_ball.PNG'
import sunnyBall from './assets/sunny_ball.PNG'

import dawnImage from './assets/dawn.PNG'
import duskImage from './assets/dusk.PNG'
import eclImage from './assets/ecl.PNG'
import midnightImage from './assets/midnight.PNG'
import twilightImage from './assets/twilight.PNG'

import dawnBall from './assets/dawn_ball.PNG'
import duskBall from './assets/dusk_ball.PNG'
import midnightBall from './assets/midnight_ball.PNG'
import twilightBall from './assets/twilight_ball.PNG'

import ingWinImage from './assets/ing_win.PNG'

import front1 from './assets/front1.PNG'
import front2 from './assets/front2.PNG'
import front3 from './assets/front3.PNG'
import front4 from './assets/front4.PNG'

// SOUNDS
import popSound from './assets/pop.mp3'
import deviceSound from './assets/device.mp3'
import typeSound from './assets/type.mp3'
import clickSound from './assets/click.mp3'
import startSound from './assets/start.mp3'
import overSound from './assets/over.mp3'
import winSound from './assets/win.mp3'
import loseSound from './assets/lose.mp3'
import victorySound from './assets/victory.mp3'

const recipes = [
  {
    id: 'crea1',
    name: 'Lynx',
    image: crea1Image,
    requirement: '1 Geo • 2 Wea • 2 Time',
    clueLines: [
      '• peak (8)',
      '• YDUOLC',
      '• sled, blanket, hot cocoa',
      '• rosy sky',
      '• M _ _ _ _ _ _ T',
    ],
    ingredients: ['mountain', 'midnight', 'cloudy', 'snowy', 'twilight'],
  },
  {
    id: 'crea2',
    name: 'Petalume',
    image: crea2Image,
    requirement: '1 Geo • 2 Wea • 2 Time',
    clueLines: [
      '• on the ground, but not a cave',
      '• S _ _ _ _',
      '• Soak',
      '• D _ _ _',
      '• Prawn',
    ],
    ingredients: ['forest', 'sunny', 'rainy', 'dawn', 'dusk'],
  },
  {
    id: 'crea3',
    name: 'Magvol',
    image: crea3Image,
    requirement: '1 Geo • 1 Wea • 3 Time',
    clueLines: [
      '• explosive',
      '• one same weather ingredient as previous recipe',
      '• the clock shows two zeros',
      '• rusk',
      '• GLIITWHT',
    ],
    ingredients: ['volcano', 'sunny', 'midnight', 'dusk', 'twilight'],
  },
  {
    id: 'crea4',
    name: 'Wisper',
    image: crea4Image,
    requirement: '1 Geo • 2 Wea • 2 Time',
    clueLines: [
      '• has a V in it somewhere',
      '• starts with S, ends with Y',
      '• not dawn, dusk, or twilight',
      '• NAYIR',
      '• one time ingredient from previous recipe',
    ],
    ingredients: ['cave', 'eclipse', 'stormy', 'rainy', 'midnight'],
  },
  {
    id: 'crea5',
    name: 'Crystallea',
    image: crea5Image,
    requirement: '1 Geo • 2 Wea • 2 Time',
    clueLines: [
      'the Wardens watched over the vast ENAOC, where the waves carried whispers from distant lands. the snow, yet never stopped falling as the Wardens gathered beneath the pale sky. EBXO appeared over the horizon, while the rain, yesterday had left the earth glistening. by dusk, the Wardens disappeared into the mist.',
    ],
    ingredients: ['ocean', 'snowy', 'dawn', 'rainy', 'dusk'],
  },
]

// Create a six-digit Rescue ID.
const generateRescueId = () =>
  String(Math.floor(100000 + Math.random() * 900000))

// Load an image before drawing it to the downloadable PNG.
const loadCanvasImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })

// Plays click.mp3. A new Audio object is made each time so fast clicks can overlap.
// If the browser blocks audio, the error is ignored.
const playClick = () => {
  const audio = new Audio(clickSound)
  audio.play().catch(() => {})
}

// Plays start.mp3 (used by the "let's play" button).
const playStart = () => {
  const audio = new Audio(startSound)
  audio.play().catch(() => {})
}

// Plays pop.mp3 (used when an ingredient is added to the cauldron).
// A new Audio object is made each time so quick repeated pops can overlap.
const playPop = () => {
  const audio = new Audio(popSound)
  audio.play().catch(() => {})
}

// Mizi's Instagram page: replace YOUR_USERNAME with the real profile name.
const MIZI_INSTAGRAM_URL = 'https://www.instagram.com/studio.mizi?vrfl=d2M2d3V0eXZkN3Nx'

// How long a tooltip stays visible (in milliseconds).
const TOOLTIP_DURATION = 650

// How long after the last keystroke the nickname typing sound keeps playing
// before it stops (milliseconds).
const NICKNAME_TYPING_SOUND_HOLD = 250

// INTRO SOUND TIMELINE (times are in seconds from the start of the intro video).
// Edit these numbers to match your animation exactly.
//   pop    = plays pop.mp3 over and over between "start" and "end"
const INTRO_SOUND_PLAN = [
  { type: 'pop', start: 2, end: 2 },      // then 1 second of pops
  // 3s to 4.5s: silence
  { type: 'pop', start: 4, end: 5.5 },    // then pop pop pop for about 4.5 seconds

  { type: 'pop', start: 7, end: 8 },
]

// Gap between each pop while the character is walking (milliseconds).
const POP_INTERVAL = 350

// Pause between clicking "Anyone there?" and the first message starting to type
// (milliseconds). Make this bigger for a longer pause, smaller for a shorter one.
const FIRST_MESSAGE_DELAY = 500

// Mizi logo with a "visit us" bubble and an "about" button that appear on hover.
// "visit us" opens Instagram in a new tab when clicked.
// "about" calls onAbout, which opens or closes the About window.
// "className" decides the logo's position (mizi or finish-mizi).
function MiziLink({ className, onAbout }) {
  return (
    <div className={`${className} mizi-link`} onClick={playClick}>
      <img src={miziImage} className="mizi-logo-img" alt="Mizi" />
      <a
        href={MIZI_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-bubble"
        aria-label="Visit Mizi on Instagram"
        onClick={(e) => { e.stopPropagation(); playClick() }}
      >
        <img src={visitImage} alt="Visit us" />
      </a>
      <button
        type="button"
        className="about-bubble"
        aria-label="About Mizi and the game"
        onClick={(e) => { e.stopPropagation(); playClick(); onAbout() }}
      >
        <img src={aboutImage} alt="About us" />
      </button>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('intro')

  const [messageIndex, setMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showLetsPlay, setShowLetsPlay] = useState(false)
  const [showSkip, setShowSkip] = useState(false)
  const [couldronFrame, setCouldronFrame] = useState(0)
  const [sceneScale, setSceneScale] = useState(1)
  const [showRules, setShowRules] = useState(false)
  const [showCollection, setShowCollection] = useState(false)

  // ABOUT WINDOW: opened from the Mizi logo's "about" button.
  const [showAbout, setShowAbout] = useState(false)

  const [revealedRecipes, setRevealedRecipes] = useState([])

  const [secondsRemaining, setSecondsRemaining] = useState(10 * 60)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const [gameWon, setGameWon] = useState(false)
  const [winText, setWinText] = useState('')
  const [nickname, setNickname] = useState('')
  const [topThree, setTopThree] = useState([])

  // NEW: a random Rescue ID number for each new game.
  const [rescueIdNumber, setRescueIdNumber] = useState(generateRescueId)

  const [playAgainText, setPlayAgainText] = useState('')

  const [showGeoOptions, setShowGeoOptions] = useState(false)
  const [showWeatherOptions, setShowWeatherOptions] = useState(false)
  const [showTimeOptions, setShowTimeOptions] = useState(false)

  const [selectedGeo, setSelectedGeo] = useState('')
  const [droppedGeo, setDroppedGeo] = useState([])

  const [rescuedCreatures, setRescuedCreatures] = useState([])
  const [resultCreature, setResultCreature] = useState(null)

  // DEVICE SOUND: preloaded audio + a flag that says whether it has finished.
  // The typing sound waits for this flag so the two never overlap.
  const deviceAudioRef = useRef(null)
  const [deviceSoundDone, setDeviceSoundDone] = useState(true)

  // FIRST MESSAGE DELAY: false until the short pause after entering the
  // dialogue screen is over. Typing (and the typing sound) wait for this.
  const [firstMessageReady, setFirstMessageReady] = useState(false)

  // NICKNAME TYPING SOUND: the looping audio and the timer that stops it
  // shortly after the player stops typing.
  const nicknameTypingAudioRef = useRef(null)
  const nicknameTypingTimerRef = useRef(null)

  // Tooltip: text + cursor position (null = hidden).
  const [tooltip, setTooltip] = useState(null)
  const tooltipTimer = useRef(null)

  const hideTooltip = () => {
    clearTimeout(tooltipTimer.current)
    setTooltip(null)
  }

  const tooltipProps = (text) => ({
    // Show the tooltip and start the auto-hide timer.
    onMouseEnter: (e) => {
      clearTimeout(tooltipTimer.current)
      setTooltip({ text, x: e.clientX, y: e.clientY })
      tooltipTimer.current = setTimeout(() => setTooltip(null), TOOLTIP_DURATION)
    },
    // Only follow the cursor while the tooltip is still visible.
    onMouseMove: (e) => {
      const { clientX, clientY } = e
      setTooltip((current) =>
        current ? { ...current, x: clientX, y: clientY } : null
      )
    },
    onMouseLeave: hideTooltip,
  })

  // Opens the About window if it is closed, and closes it if it is open.
  const toggleAbout = () => setShowAbout((current) => !current)

  // Hide the tooltip when the screen changes (the hovered element disappears).
  useEffect(() => {
    hideTooltip()
  }, [screen])

  // Close the About window whenever the screen changes.
  useEffect(() => {
    setShowAbout(false)
  }, [screen])

  // Clear the timer if the component is ever removed.
  useEffect(() => {
    return () => clearTimeout(tooltipTimer.current)
  }, [])

  // Stops the nickname typing sound and clears its timer.
  const stopNicknameTyping = () => {
    clearTimeout(nicknameTypingTimerRef.current)
    if (nicknameTypingAudioRef.current) {
      nicknameTypingAudioRef.current.pause()
      nicknameTypingAudioRef.current = null
    }
  }

  // Make sure the nickname typing sound never keeps playing after leaving
  // the finish screen or closing the app.
  useEffect(() => {
    if (screen !== 'finish') stopNicknameTyping()
  }, [screen])

  useEffect(() => {
    return () => stopNicknameTyping()
  }, [])

  // Runs on every change in the nickname box: updates the nickname and keeps
  // type.mp3 looping while the player is typing. It stops shortly after the
  // last keystroke.
  const handleNicknameChange = (event) => {
    setNickname(event.target.value)

    if (!nicknameTypingAudioRef.current) {
      const typing = new Audio(typeSound)
      typing.loop = true
      typing.play().catch(() => {})
      nicknameTypingAudioRef.current = typing
    }

    clearTimeout(nicknameTypingTimerRef.current)
    nicknameTypingTimerRef.current = setTimeout(
      stopNicknameTyping,
      NICKNAME_TYPING_SOUND_HOLD
    )
  }

  // Preload device.mp3 as soon as the app loads, so it starts instantly on click.
  useEffect(() => {
    const preloaded = new Audio(deviceSound)
    preloaded.preload = 'auto'
    preloaded.load()
    deviceAudioRef.current = preloaded

    return () => {
      preloaded.pause()
    }
  }, [])

  // Start the first-message delay when the dialogue screen appears,
  // and reset it when the player leaves that screen.
  useEffect(() => {
    if (screen !== 'desktop3') {
      setFirstMessageReady(false)
      return
    }

    const delayTimer = setTimeout(
      () => setFirstMessageReady(true),
      FIRST_MESSAGE_DELAY
    )

    return () => clearTimeout(delayTimer)
  }, [screen])

  // INTRO SOUNDS: pops follow INTRO_SOUND_PLAN while the intro video is showing.
  // Everything is stopped when the intro ends.
  useEffect(() => {
    if (screen !== 'intro') return

    const timers = []
    const intervals = []
    const playing = []

    // Play a sound. A new Audio object is made each time so pops can overlap.
    // If the browser blocks audio (no click yet), the error is ignored.
    const play = (src) => {
      const audio = new Audio(src)
      playing.push(audio)
      audio.play().catch(() => {})
      return audio
    }

    INTRO_SOUND_PLAN.forEach((step) => {
      const durationMs = (step.end - step.start) * 1000

      timers.push(
        setTimeout(() => {
          play(popSound)
          const popLoop = setInterval(() => play(popSound), POP_INTERVAL)
          intervals.push(popLoop)
          timers.push(setTimeout(() => clearInterval(popLoop), durationMs - 1))
        }, step.start * 1000)
      )
    })

    return () => {
      timers.forEach(clearTimeout)
      intervals.forEach(clearInterval)
      playing.forEach((audio) => audio.pause())
    }
  }, [screen])

  const collectedCreatures = recipes.filter((recipe) =>
    rescuedCreatures.includes(recipe.id)
  )

  const currentCreature =
    recipes.find((recipe) => !rescuedCreatures.includes(recipe.id)) || null

  const formattedTime = `${String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, '0')}:${String(secondsRemaining % 60).padStart(2, '0')}`

  const toggleRecipe = (creatureId) => {
    setRevealedRecipes((current) =>
      current.includes(creatureId)
        ? current.filter((id) => id !== creatureId)
        : [...current, creatureId]
    )
  }

  const openCategory = (category) => {
    if (gameOver || secondsRemaining <= 0) return

    setShowGeoOptions(category === 'geo')
    setShowWeatherOptions(category === 'weather')
    setShowTimeOptions(category === 'time')
  }

  const startGame = () => {
    setSecondsRemaining(10 * 60)
    setGameOver(false)
    setGameStarted(true)

    setRescuedCreatures([])
    setRevealedRecipes([])
    setResultCreature(null)
    setDroppedGeo([])
    setSelectedGeo('')
    setCouldronFrame(0)

    setGameWon(false)
    setWinText('')
    setNickname('')
    setTopThree([])
    setRescueIdNumber(generateRescueId())

    setShowGeoOptions(false)
    setShowWeatherOptions(false)
    setShowTimeOptions(false)
    setShowRules(false)
    setShowCollection(false)

    setPlayAgainText('')
    setScreen('blank')
  }

  const playAgain = () => {
    setPlayAgainText('')
    setScreen('desktop3')
  }

  // Click on "Anyone there?" (second screen): play device.mp3, then go to the next screen.
  // The typing sound is held back until device.mp3 finishes (deviceSoundDone).
  const handleAnyoneThereClick = () => {
    const audio = deviceAudioRef.current || new Audio(deviceSound)
    audio.currentTime = 0

    setDeviceSoundDone(false)
    audio.onended = () => setDeviceSoundDone(true)
    audio.onerror = () => setDeviceSoundDone(true)

    // If the browser blocks the sound, don't leave the typing sound waiting forever.
    audio.play().catch(() => setDeviceSoundDone(true))

    setScreen('desktop3')
  }

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return

    const timer = setInterval(() => {
      setSecondsRemaining((current) => Math.max(0, current - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, gameOver, gameWon])

  useEffect(() => {
    if (gameStarted && secondsRemaining === 0 && !gameOver && !gameWon) {
      setGameOver(true)
      setPlayAgainText('')
      setScreen('gameover-video')
      setShowGeoOptions(false)
      setShowWeatherOptions(false)
      setShowTimeOptions(false)
    }
  }, [gameStarted, secondsRemaining, gameOver, gameWon])

  // GAME OVER SOUND: plays over.mp3 together with the game over animation.
  // It starts when the animation screen appears and stops when that screen ends.
  useEffect(() => {
    if (screen !== 'gameover-video') return

    const overAudio = new Audio(overSound)
    overAudio.play().catch(() => {})

    return () => overAudio.pause()
  }, [screen])

  // VICTORY SOUND: plays victory.mp3 together with the congrats animation.
  // It starts when the congrats video screen appears and stops when that screen ends.
  useEffect(() => {
    if (screen !== 'congrats-video') return

    const victoryAudio = new Audio(victorySound)
    victoryAudio.play().catch(() => {})

    return () => victoryAudio.pause()
  }, [screen])

  // RESULT SOUND: plays win.mp3 when a creature is shown (successful guess)
  // and lose.mp3 when the onion screen is shown (wrong guess).
  // It starts when the result screen appears and stops when the screen is left.
  useEffect(() => {
    if (screen !== 'result' || !resultCreature) return

    const resultAudio = new Audio(
      resultCreature.id === 'onion' ? loseSound : winSound
    )
    resultAudio.play().catch(() => {})

    return () => resultAudio.pause()
  }, [screen, resultCreature])

  useEffect(() => {
    if (screen !== 'gameover') return

    const fullText = 'play again?'
    if (playAgainText.length >= fullText.length) return

    const typingTimer = setTimeout(() => {
      setPlayAgainText(fullText.slice(0, playAgainText.length + 1))
    }, 120)

    return () => clearTimeout(typingTimer)
  }, [screen, playAgainText])

  // PLAY AGAIN TYPING SOUND: true only while "play again?" is being typed
  // on the game over screen. It becomes false as soon as the last character appears.
  const isTypingPlayAgain =
    screen === 'gameover' && playAgainText.length < 'play again?'.length

  // Loops type.mp3 while "play again?" is typing, stops when typing ends.
  useEffect(() => {
    if (!isTypingPlayAgain) return

    const typing = new Audio(typeSound)
    typing.loop = true
    typing.play().catch(() => {})

    return () => typing.pause()
  }, [isTypingPlayAgain])

  useEffect(() => {
    if (screen !== 'win') return

    const fullText = 'you rescued all of them'

    if (winText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setWinText(fullText.slice(0, winText.length + 1))
      }, 80)

      return () => clearTimeout(typingTimer)
    }

    const pauseTimer = setTimeout(() => setScreen('finish'), 1500)
    return () => clearTimeout(pauseTimer)
  }, [screen, winText])

  // WIN TYPING SOUND: true only while "you rescued all of them" is being typed
  // on the win screen. It becomes false as soon as the last character appears.
  const isTypingWin =
    screen === 'win' && winText.length < 'you rescued all of them'.length

  // Loops type.mp3 while "you rescued all of them" is typing, stops when typing ends.
  useEffect(() => {
    if (!isTypingWin) return

    const typing = new Audio(typeSound)
    typing.loop = true
    typing.play().catch(() => {})

    return () => typing.pause()
  }, [isTypingWin])

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / 1440
      const scaleY = window.innerHeight / 1024
      setSceneScale(Math.min(scaleX, scaleY))
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  useEffect(() => {
    if (screen !== 'blank') return

    const timer = setInterval(() => {
      setCouldronFrame((current) => (current + 1) % 4)
    }, 500)

    return () => clearInterval(timer)
  }, [screen])

  const messages = [
    {
      text: 'you’re in the blip',
      type: 'single',
      parts: [
        { text: 'you’re in the ', color: '#416DB8' },
        { text: 'blip', color: '#1C2165' },
      ],
      position: 'message-one',
    },
    {
      text: 'the skies of the world held their balance in the presence of the Wardens - five creatures woven from weather, time, and geography',
      type: 'double',
      firstLine: {
        text: 'the skies of the world held their balance in the presence of the Wardens -',
        parts: [
          {
            text: 'the skies of the world held their balance in the presence of the ',
            color: '#416DB8',
          },
          { text: 'Wardens', color: '#1C2165' },
          { text: ' -', color: '#416DB8' },
        ],
        position: 'message-two',
      },
      secondLine: {
        text: 'five creatures woven from weather, time, and geography',
        parts: [
          {
            text: 'five creatures made from weather, time, and geography',
            color: '#416DB8',
          },
        ],
        position: 'message-three',
      },
    },
    {
      text: 'but that balance has been disturbed, and the world has been fading',
      type: 'single',
      parts: [
        {
          text: 'but that balance has been disturbed, and the world has been fading',
          color: '#416DB8',
        },
      ],
      position: 'message-four',
    },
    {
      text: "you've been pulled in to restore what's been lost mix the right constituents, uncover each recipe, and rescue all five to return the world's balance",
      type: 'double',
      firstLine: {
        text: "you've been pulled in to restore what's been lost",
        parts: [
          {
            text: "you've been pulled in to restore what's been lost",
            color: '#416DB8',
          },
        ],
        position: 'message-five',
      },
      secondLine: {
        text: "mix the right constituents, uncover each recipe, and rescue all five to return the world's balance",
        parts: [
          { text: 'mix', color: '#1C2165' },
          { text: ' the right constituents, uncover each ', color: '#416DB8' },
          { text: 'recipe', color: '#1C2165' },
          {
            text: ", and rescue all five to return the world's balance",
            color: '#416DB8',
          },
        ],
        position: 'message-six',
      },
    },
  ]

  useEffect(() => {
    if (screen !== 'desktop3' || showLetsPlay || !firstMessageReady) return

    const currentMessage = messages[messageIndex].text

    if (displayText.length < currentMessage.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length + 1))
      }, 55)

      return () => clearTimeout(timer)
    }

    if (messageIndex === 0 && !showSkip) setShowSkip(true)

    const pauseTimer = setTimeout(() => {
      setDisplayText('')

      if (messageIndex < messages.length - 1) {
        setMessageIndex(messageIndex + 1)
      } else {
        setShowLetsPlay(true)
      }
    }, 1400)

    return () => clearTimeout(pauseTimer)
  }, [screen, messageIndex, displayText, showLetsPlay, showSkip, firstMessageReady])

  // TYPING SOUND: true only while a dialogue message is actively being typed,
  // the first-message delay is over, AND the "Anyone there?" device sound
  // has finished playing.
  // It becomes false during the pause after each message, and true again
  // when the next message starts typing.
  const isTypingMessage =
    screen === 'desktop3' &&
    firstMessageReady &&
    deviceSoundDone &&
    !showLetsPlay &&
    displayText.length < messages[messageIndex].text.length

  // Loops type.mp3 while typing, stops as soon as typing stops.
  useEffect(() => {
    if (!isTypingMessage) return

    const typing = new Audio(typeSound)
    typing.loop = true
    typing.play().catch(() => {})

    return () => typing.pause()
  }, [isTypingMessage, messageIndex])

  const getColoredText = (parts, visibleCharacters) => {
    let remainingCharacters = visibleCharacters

    return parts.map((part, index) => {
      if (remainingCharacters <= 0) return null

      const visibleText = part.text.slice(0, remainingCharacters)
      remainingCharacters -= visibleText.length

      return (
        <span key={index} style={{ color: part.color }}>
          {visibleText}
        </span>
      )
    })
  }

  const renderMessage = () => {
    const currentMessage = messages[messageIndex]

    if (currentMessage.type === 'single') {
      return (
        <div className={`dialogue-text ${currentMessage.position}`}>
          {getColoredText(currentMessage.parts, displayText.length)}
        </div>
      )
    }

    const firstLength = currentMessage.firstLine.text.length
    const firstLineCharacters = Math.min(displayText.length, firstLength)
    const secondLineCharacters = Math.max(displayText.length - firstLength, 0)

    return (
      <>
        <div className={`dialogue-text ${currentMessage.firstLine.position}`}>
          {getColoredText(currentMessage.firstLine.parts, firstLineCharacters)}
        </div>
        <div className={`dialogue-text ${currentMessage.secondLine.position}`}>
          {getColoredText(currentMessage.secondLine.parts, secondLineCharacters)}
        </div>
      </>
    )
  }

  const selectGeoIngredient = (option) => {
    if (gameOver || secondsRemaining <= 0) return

    // Pop sound only when an ingredient is actually added to the cauldron
    // (not when one is removed, and not when the cauldron is already full).
    const alreadyAdded = droppedGeo.some(
      (ingredient) => ingredient.name === option.name
    )
    if (!alreadyAdded && droppedGeo.length < 5) playPop()

    setSelectedGeo(option.name)

    setDroppedGeo((current) => {
      const existingIndex = current.findIndex(
        (ingredient) => ingredient.name === option.name
      )

      if (existingIndex !== -1) {
        return current.filter((ingredient) => ingredient.name !== option.name)
      }

      if (current.length >= 5) return current

      return [
        ...current,
        {
          ...option,
          image: option.ballImage,
          dropId: `${option.name}-${Date.now()}`,
        },
      ]
    })
  }

  const checkRecipe = () => {
    if (
      !gameStarted ||
      gameOver ||
      secondsRemaining <= 0 ||
      droppedGeo.length !== 5 ||
      !currentCreature
    ) return

    const selectedNames = droppedGeo.map((ingredient) => ingredient.name).sort()

    const matchedRecipe = recipes.find((recipe) => {
      if (rescuedCreatures.includes(recipe.id)) return false
      const recipeNames = [...recipe.ingredients].sort()
      return recipeNames.every((name, index) => name === selectedNames[index])
    })

    setShowGeoOptions(false)
    setShowWeatherOptions(false)
    setShowTimeOptions(false)

    if (!matchedRecipe) {
      const updatedTime = Math.max(0, secondsRemaining - 30)
      setSecondsRemaining(updatedTime)

      if (updatedTime === 0) {
        setGameOver(true)
        setPlayAgainText('')
        setScreen('gameover-video')
        return
      }

      setResultCreature({ id: 'onion', name: 'Onion', image: onionImage })
      setScreen('result')
      return
    }

    setResultCreature(matchedRecipe)
    setRescuedCreatures((current) =>
      current.includes(matchedRecipe.id)
        ? current
        : [...current, matchedRecipe.id]
    )

    if (rescuedCreatures.length + 1 === recipes.length) setGameWon(true)

    setDroppedGeo([])
    setSelectedGeo('')
    setScreen('result')
  }

  const returnToGame = () => {
    // ALL FIVE FOUND: PLAY THE CONGRATS ANIMATION FIRST.
    // IT THEN LEADS TO THE TYPED "you rescued all of them" MESSAGE.
    if (gameWon) {
      setWinText('')
      setNickname('')
      setTopThree([])
      setScreen('congrats-video')
      return
    }

    if (gameOver || secondsRemaining <= 0) {
      setGameOver(true)
      setPlayAgainText('')
      setScreen('gameover-video')
      return
    }

    setResultCreature(null)
    setScreen('blank')
  }

  const toggleTopThree = (creatureId) => {
    setTopThree((current) => {
      if (current.includes(creatureId)) {
        return current.filter((id) => id !== creatureId)
      }
      if (current.length >= 3) return current
      return [...current, creatureId]
    })
  }

  // Move to the Rescue ID card once a nickname is entered
  // and exactly three favourite creatures are selected.
  const handleFinishForward = () => {
    if (nickname.trim() === '' || topThree.length !== 3) return
    setScreen('rescue-card')
  }

  const geoOptions = [
    { name: 'volcano', image: volcanoImage, ballImage: volcanoBall },
    { name: 'cave', image: caveImage, ballImage: caveBall },
    { name: 'mountain', image: mountainImage, ballImage: mountainBall },
    { name: 'ocean', image: oceanImage, ballImage: oceanBall },
    { name: 'forest', image: forestImage, ballImage: forestBall },
  ]

  const weatherOptions = [
    { name: 'rainy', image: rainyImage, ballImage: rainyBall },
    { name: 'snowy', image: snowyImage, ballImage: snowyBall },
    { name: 'stormy', image: stormyImage, ballImage: stormyBall },
    { name: 'cloudy', image: cloudyImage, ballImage: cloudyBall },
    { name: 'sunny', image: sunnyImage, ballImage: sunnyBall },
  ]

  const timeOptions = [
    { name: 'dawn', image: dawnImage, ballImage: dawnBall },
    { name: 'dusk', image: duskImage, ballImage: duskBall },
    { name: 'eclipse', image: eclImage, ballImage: eclBall },
    { name: 'midnight', image: midnightImage, ballImage: midnightBall },
    { name: 'twilight', image: twilightImage, ballImage: twilightBall },
  ]

  const renderCategoryOptions = (options, category) => (
    <div className="geo-options-window">
      <img src={geoWindowImage} className="geo-window-image" alt="" />
      <button
        className="geo-close-button"
        onClick={() => openCategory(null)}
        aria-label={`Close ${category} options`}
      />
      {options.map((option, index) => (
        <img
          key={option.name}
          src={option.image}
          className={`geo-option ${category}-option ${category}-${option.name} option-position-${index + 1}`}
          alt={option.name}
          onClick={() => selectGeoIngredient(option)}
          {...tooltipProps(option.name)}
        />
      ))}
    </div>
  )

  const renderCollectionContents = () => (
    <div className="collection-creatures">
      {collectedCreatures.map((creature) => {
        const isRevealed = revealedRecipes.includes(creature.id)

        return (
          <div
            className={`collection-creature-card collection-${creature.id}`}
            key={creature.id}
          >
            <img src={creature.image} className="collection-creature-image" alt="" />
            <button
              type="button"
              className="collection-creature-recipe"
              onClick={() => toggleRecipe(creature.id)}
              aria-label={isRevealed ? 'Hide recipe' : 'Show recipe'}
            >
              {isRevealed ? creature.ingredients.join(' + ') : 'recipe'}
            </button>
          </div>
        )
      })}
    </div>
  )

  // NEW: export only the Rescue ID card and its contents.
  // The page background and Mizi logo are intentionally not drawn.
  const downloadRescueCard = async () => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width = 1440
      canvas.height = 1024

      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Canvas is not supported in this browser.')

      // Transparent canvas: draw the card artwork only.
      const card = await loadCanvasImage(rescueIdImage)
      ctx.drawImage(card, 146, -93, 1147, 1147)

      // Match the on-screen card slot positions and clip each creature
      // to its designated box, without scaling it down to fit.
      const slots = [
        { x: 751, y: 523, w: 160, h: 170 },
        { x: 900, y: 523, w: 160, h: 170 },
        { x: 1049, y: 523, w: 160, h: 170 },
      ]

      for (let index = 0; index < topThree.length; index += 1) {
        const creature = recipes.find((item) => item.id === topThree[index])
        if (!creature) continue

        const image = await loadCanvasImage(creature.image)
        const slot = slots[index]

        ctx.save()
        ctx.beginPath()
        ctx.rect(slot.x, slot.y, slot.w, slot.h)
        ctx.clip()

        // Keep the original image size and crop the overflow at the box.
        ctx.drawImage(
          image,
          slot.x + (slot.w - 300) / 2,
          slot.y + (slot.h - 291) / 2,
          300,
          291
        )
        ctx.restore()
      }

      // Player nickname: read the real on-screen position from the page,
      // so the PNG always matches .rescue-player-name in App.css.
      const frameEl = document.querySelector('.rescue-card-screen .design-frame')
      const nameEl = document.querySelector('.rescue-player-name')
      const nameText = nickname.trim()

      if (frameEl && nameEl && nameText) {
        const frameRect = frameEl.getBoundingClientRect()
        const nameRect = nameEl.getBoundingClientRect()
        const nameStyle = window.getComputedStyle(nameEl)

        // Convert from scaled screen pixels back to the 1440 x 1024 design space.
        const scale = frameRect.width / 1440
        const nameLeft = (nameRect.left - frameRect.left) / scale
        const nameTop = (nameRect.top - frameRect.top) / scale
        const nameWidth = nameRect.width / scale
        const nameLineHeight = nameRect.height / scale
        const nameFontSize = parseFloat(nameStyle.fontSize)

        ctx.font = `${nameFontSize}px "Retro Gaming"`
        ctx.fillStyle = nameStyle.color
        ctx.textAlign = 'center'
        ctx.textBaseline = 'alphabetic'

        const nameMetrics = ctx.measureText(nameText)
        const nameAscent =
          nameMetrics.fontBoundingBoxAscent ?? nameFontSize * 0.8
        const nameDescent =
          nameMetrics.fontBoundingBoxDescent ?? nameFontSize * 0.2
        const nameBaseline =
          nameTop + (nameLineHeight - (nameAscent + nameDescent)) / 2 + nameAscent

        ctx.fillText(nameText, nameLeft + nameWidth / 2, nameBaseline)
      }

      // Random Rescue ID number beside the card's existing "id:" label.
      // Rescue ID number: mirrors .rescue-id-number in App.css.
      // If you move or resize it in the CSS, update these values to match.
      const idFontSize = 25
      const idBox = { left: 532, top: 623, width: 193, lineHeight: 29 }

      ctx.font = `${idFontSize}px "Retro Gaming"`
      ctx.fillStyle = '#1C2165'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'alphabetic'

      // Work out the text baseline the same way CSS centres text in its line box.
      const idMetrics = ctx.measureText(rescueIdNumber)
      const idAscent = idMetrics.fontBoundingBoxAscent ?? idFontSize * 0.8
      const idDescent = idMetrics.fontBoundingBoxDescent ?? idFontSize * 0.2
      const idBaseline =
        idBox.top + (idBox.lineHeight - (idAscent + idDescent)) / 2 + idAscent

      ctx.fillText(rescueIdNumber, idBox.left + idBox.width / 2, idBaseline)

      // Rescue count.
      // Rescue count: mirrors .rescue-count in App.css.
      // If you move or resize it in the CSS, update these values to match.
      const countFontSize = 23
      const countBox = { left: 625, top: 759, width: 193, lineHeight: 29 }
      const countText = String(rescuedCreatures.length)

      ctx.font = `${countFontSize}px "Retro Gaming"`
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'alphabetic'

      // Same baseline calculation as the Rescue ID number.
      const countMetrics = ctx.measureText(countText)
      const countAscent =
        countMetrics.fontBoundingBoxAscent ?? countFontSize * 0.8
      const countDescent =
        countMetrics.fontBoundingBoxDescent ?? countFontSize * 0.2
      const countBaseline =
        countBox.top +
        (countBox.lineHeight - (countAscent + countDescent)) / 2 +
        countAscent

      ctx.fillText(countText, countBox.left + countBox.width / 2, countBaseline)

      canvas.toBlob((blob) => {
        if (!blob) {
          alert('The Rescue ID image could not be created. Please try again.')
          return
        }

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `rescue-id-${rescueIdNumber}.PNG`
        document.body.appendChild(link)
        link.click()
        link.remove()
        URL.revokeObjectURL(url)
      }, 'image/png')
    } catch (error) {
      console.error('Rescue ID download failed:', error)
      alert('Could not download the Rescue ID. Please try again.')
    }
  }

  return (
    <div className="app">
      {screen === 'intro' && (
        <div className="intro-screen">
          <video
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={() => setScreen('desktop2')}
          />
        </div>
      )}

      {screen === 'desktop2' && (
        <div className="game-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <img src={windowImage} className="pixel-window" alt="" />
            <video src={deviceVideo} className="device" autoPlay loop muted playsInline />
            <img src={devMessage} className="dev-message" alt="Anyone there?" onClick={handleAnyoneThereClick} />
          </div>
        </div>
      )}

      {screen === 'desktop3' && (
        <div className="game-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <MiziLink className="mizi" onAbout={toggleAbout} />

            {showLetsPlay && (
              <>
                <img src={collectImage} className="collect-button" alt="" onClick={() => { playClick(); setShowCollection(!showCollection) }} {...tooltipProps('recipes')} />
                <img src={htpImage} className="htp-button" alt="" onClick={() => { playClick(); setShowRules(!showRules) }} {...tooltipProps('how to play?')} />
              </>
            )}

            {showRules && (
              <>
                <img src={rulesImage} className="rules-window" alt="" />
                <button
                  type="button"
                  className="rules-close-button"
                  onClick={() => { playClick(); setShowRules(false) }}
                  aria-label="Close how to play"
                />
              </>
            )}

            {showCollection && (
              <>
                <img src={collectionImage} className="collection-window" alt="" />
                {renderCollectionContents()}
                <button
                  type="button"
                  className="collection-close-button"
                  onClick={() => { playClick(); setShowCollection(false) }}
                  aria-label="Close collection"
                />
              </>
            )}

            <img src={windowImage} className="pixel-window desktop3-window" alt="" />
            {!showLetsPlay && renderMessage()}

            {showSkip && !showLetsPlay && (
              <button className="skip-button" onClick={() => { playClick(); setShowLetsPlay(true) }}>skip</button>
            )}

            {showLetsPlay && (
              <button className="lets-play" onClick={() => { playStart(); startGame() }}>let’s play</button>
            )}
          </div>
        </div>
      )}

      {screen === 'blank' && !gameOver && (
        <div className="game-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <img src={collectImage} className="collect-button" alt="" onClick={() => { playClick(); setShowCollection(!showCollection) }} {...tooltipProps('recipes')} />
            <img src={htpImage} className="htp-button" alt="" onClick={() => { playClick(); setShowRules(!showRules) }} {...tooltipProps('how to play?')} />

            {showRules && (
              <>
                <img src={rulesImage} className="rules-window" alt="" />
                <button
                  type="button"
                  className="rules-close-button"
                  onClick={() => { playClick(); setShowRules(false) }}
                  aria-label="Close how to play"
                />
              </>
            )}

            {showCollection && (
              <>
                <img src={collectionImage} className="collection-window" alt="" />
                {renderCollectionContents()}
                <button
                  type="button"
                  className="collection-close-button"
                  onClick={() => { playClick(); setShowCollection(false) }}
                  aria-label="Close collection"
                />
              </>
            )}

            <MiziLink className="mizi" onAbout={toggleAbout} />
            <div className="game-timer">{formattedTime}</div>

            <img src={[couldron1, couldron2, couldron3, couldron4][couldronFrame]} className="couldron" alt="" />

            {droppedGeo.map((ingredient, index) => {
              const positions = [
                { left: 405, top: 310, angle: -18 },
                { left: 275, top: 315, angle: 22 },
                { left: 245, top: 310, angle: 8 },
                { left: 225, top: 320, angle: -30 },
                { left: 105, top: 305, angle: 16 },
              ]
              const position = positions[index]

              return (
                <img
                  key={ingredient.dropId}
                  src={ingredient.image}
                  className="dropped-geo"
                  alt={ingredient.name}
                  onClick={() => selectGeoIngredient(ingredient)}
                  style={{
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    '--start-x': `${400 - position.left}px`,
                    '--final-rotation': `${position.angle}deg`,
                    zIndex: index + 2,
                    animationDelay: `${index * 0.08}s`,
                  }}
                />
              )
            })}

            {droppedGeo.length > 0 && (
              <img src={[front1, front2, front3, front4][couldronFrame]} className="couldron couldron-front" alt="" aria-hidden="true" />
            )}

            {droppedGeo.length > 0 && (
              <>
                <img src={ingWinImage} className="ingredient-list-window" alt="" />
                <div className="ingredient-list">
                  {droppedGeo.map((ingredient) => <div key={ingredient.dropId}>{ingredient.name}</div>)}
                </div>
              </>
            )}

            <img src={window4Image} className="clue-window" alt="" />
            <img src={window3Image} className="ingredient-window" alt="" />

            <img src={geoImage} className="geo-button" alt="Geo" onClick={() => { playClick(); openCategory('geo') }} />
            <img src={weatherImage} className="weather-button" alt="Weather" onClick={() => { playClick(); openCategory('weather') }} />
            <img src={timeImage} className="time-button" alt="Time" onClick={() => { playClick(); openCategory('time') }} />

            <div className={`clue-text ${currentCreature?.id === 'crea5' ? 'clue-text-creature-5' : ''}`}>
              {currentCreature && (
                <>
                  <div className="clue-requirement">• {currentCreature.requirement}</div>
                  <div className="clue-content">
                    {currentCreature.clueLines.map((line, index) => (
                      <div className="clue-line" key={index}>{line}</div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {showGeoOptions && (
              <div className="geo-options-window">
                <img src={geoWindowImage} className="geo-window-image" alt="" />
                <button className="geo-close-button" onClick={() => openCategory(null)} aria-label="Close Geo options" />
                {geoOptions.map((option) => (
                  <img key={option.name} src={option.image} className={`geo-option geo-${option.name}`} alt={option.name} onClick={() => selectGeoIngredient(option)} {...tooltipProps(option.name)} />
                ))}
              </div>
            )}

            {showWeatherOptions && renderCategoryOptions(weatherOptions, 'weather')}
            {showTimeOptions && renderCategoryOptions(timeOptions, 'time')}

            <button
              className="mix-button"
              onClick={checkRecipe}
              disabled={droppedGeo.length !== 5 || !currentCreature || gameOver || secondsRemaining <= 0}
              aria-label="Mix ingredients"
              {...tooltipProps('mix')}
            >
              <img src={forwardImage} alt="" />
            </button>
          </div>
        </div>
      )}

      {screen === 'result' && resultCreature && !gameOver && (
        <div className="game-screen result-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <img src={windowImage} className="pixel-window result-window" alt="" />
            <img
              src={resultCreature.image}
              className={`result-creature ${resultCreature.id === 'onion' ? 'result-onion' : resultCreature.id === 'crea5' ? 'result-creature-five' : ''}`}
              alt={resultCreature.name}
            />
            <div className={`result-message ${resultCreature.id === 'onion' ? 'onion-result-message' : resultCreature.id === 'crea5' ? 'creature-five-result-message' : 'creature-result-message'}`}>
              <div className="result-title">{resultCreature.id === 'onion' ? 'found an ONION' : resultCreature.name}</div>
              <div className="result-subtitle">{resultCreature.id === 'onion' ? 'you lost 30 SECONDS' : 'YOU FOUND ONE!'}</div>
            </div>

            {/* ONION SCREEN ONLY: the button gets the extra "onion-back-button" class
                (rotation + position are set in App.css) and says "back" instead of "next". */}
            <button
              className={`result-back-button${resultCreature.id === 'onion' ? ' onion-back-button' : ''}`}
              onClick={() => { playClick(); returnToGame() }}
              aria-label="Back to game"
              {...tooltipProps(resultCreature.id === 'onion' ? 'back' : 'next')}
            >
              <img src={backImage} alt="" />
            </button>
          </div>
        </div>
      )}

      {/* CONGRATS ANIMATION: PLAYS AFTER ALL FIVE ARE RESCUED, THEN THE TYPED MESSAGE */}
      {screen === 'congrats-video' && (
        <div className="game-screen game-over-video-screen congrats-video-screen">
          <video
            className="game-over-video"
            src={congratsVideo}
            autoPlay
            muted
            playsInline
            onEnded={() => setScreen('win')}
            onError={() => setScreen('win')}
          />
        </div>
      )}

      {screen === 'win' && (
        <div className="game-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <MiziLink className="finish-mizi" onAbout={toggleAbout} />
            <div className="win-message">{winText}</div>
          </div>
        </div>
      )}

      {screen === 'finish' && (
        <div className="game-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <MiziLink className="finish-mizi" onAbout={toggleAbout} />

            {/* TOP 3 WINDOW */}
            <img src={win2} className="finish-top3-window" alt="" />
            <div className="finish-label finish-top3-label">choose top 3 wardens:</div>
            {recipes.map((creature) => (
              <div
                key={creature.id}
                className={`top3-creature top3-${creature.id}${topThree.includes(creature.id) ? ' selected' : ''}`}
              >
                <img src={creature.image} className="top3-art" alt={creature.name} />
                <button
                  type="button"
                  className="top3-hit"
                  onClick={() => { playClick(); toggleTopThree(creature.id) }}
                  aria-label={`Select ${creature.name}`}
                />
              </div>
            ))}

            {/* NICKNAME WINDOW */}
            <img src={window4Image} className="finish-nickname-window" alt="" />
            <div className="finish-label finish-nickname-label">enter nickname:</div>
            <input
              type="text"
              className="finish-nickname-input"
              value={nickname}
              maxLength={10}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              onChange={handleNicknameChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleFinishForward()
              }}
            />

            {/* FORWARD BUTTON: APPEARS ONCE BOTH STEPS ARE DONE */}
            {nickname.trim() !== '' && topThree.length === 3 && (
              <button className="finish-forward-button" onClick={() => { playClick(); handleFinishForward() }} aria-label="Continue">
                <img src={forwardImage} alt="" />
              </button>
            )}
          </div>
        </div>
      )}

      {screen === 'rescue-card' && (
        <div className="game-screen rescue-card-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <MiziLink className="finish-mizi" onAbout={toggleAbout} />

            <img src={rescueIdImage} className="rescue-card-image" alt="" />

            {topThree.map((creatureId, index) => {
              const creature = recipes.find((recipe) => recipe.id === creatureId)
              if (!creature) return null

              return (
                <div 
                  className={`card-slot card-slot-${index + 1}${creature.id === 'crea5' ? ' card-slot-crea5' : ''}`}
                  key={creatureId}
                >
                  <img src={creature.image} className={`card-creature card-creature-${creature.id}`} alt={creature.name} />
                </div>
              )
            })}

            <div className="rescue-player-name">{nickname.trim()}</div>
            <div className="rescue-id-number">{rescueIdNumber}</div>
            <div className="rescue-count">{rescuedCreatures.length}</div>

            <button
              type="button"
              className="rescue-download-button"
              onClick={() => { playClick(); downloadRescueCard() }}
            >
              Download Rescue ID
            </button>
          </div>
        </div>
      )}

      {screen === 'gameover-video' && (
        <div className="game-screen game-over-video-screen">
          <video className="game-over-video" src={gameOverVideo} autoPlay muted playsInline onEnded={() => setScreen('gameover')} onError={() => setScreen('gameover')} />
        </div>
      )}

      {screen === 'gameover' && (
        <div className="game-screen game-over-screen">
          <img src={bgImage} className="background" alt="" />
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <div className="game-over-message">GAME OVER</div>
            <button className="play-again-button" onClick={playAgain} aria-label="Play again">
              {playAgainText}
            </button>
          </div>
        </div>
      )}

      {/* ABOUT WINDOW: sits above every screen, scaled like the rest of the game */}
      {showAbout && (
        <div className="about-layer">
          <div className="design-frame" style={{ transform: `translate(-50%, -50%) scale(${sceneScale})` }}>
            <img src={aboutWindowImage} className="about-window" alt="About Mizi and the game" />
            <button
              type="button"
              className="about-close-button"
              onClick={() => { playClick(); setShowAbout(false) }}
              aria-label="Close about"
            />
          </div>
        </div>
      )}

      {tooltip && (
        <div
          className="game-tooltip"
          style={{ left: tooltip.x + 14, top: tooltip.y + 18 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}

export default App