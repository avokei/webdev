const libOne = document.getElementById('sounds1'); // library 1 button
const libTwo = document.getElementById('sounds2'); // library 2 button
const libThree = document.getElementById('sounds3'); // library 3 button
const beatNAME = document.getElementById('beatName'); //display name paragraph
const padCONTAINER = document.getElementById('padContainer'); // pad container div

let selectedLib; // declare variable

//Press key event handler
const pressKeyHandler = (e) => {
    switch (e.keyCode) {
        case 65:
            classClick('A');
            const filterA = selectedLib.filter((pad) => pad.key === 'A');
            playSound(filterA[0].sound, filterA[0].name)
            break;
        case 83:
            classClick('S');
            const filterS = selectedLib.filter((pad) => pad.key === 'S');
            playSound(filterS[0].sound, filterS[0].name)
            break;
        case 68:
            classClick('D');
            const filterD = selectedLib.filter((pad) => pad.key === 'D');
            playSound(filterD[0].sound, filterD[0].name)
            break;
        case 70:
            classClick('F');
            const filterF = selectedLib.filter((pad) => pad.key === 'F');
            playSound(filterF[0].sound, filterF[0].name)
            break;
        case 71:
            classClick('G');
            const filterG = selectedLib.filter((pad) => pad.key === 'G');
            playSound(filterG[0].sound, filterG[0].name)
            break;
        case 72:
            classClick('H');
            const filterH = selectedLib.filter((pad) => pad.key === 'H');
            playSound(filterH[0].sound, filterH[0].name)
            break;
        case 74:
            classClick('J');
            const filterJ = selectedLib.filter((pad) => pad.key === 'J');
            playSound(filterJ[0].sound, filterJ[0].name)
            break;
        case 75:
            classClick('K');
            const filterK = selectedLib.filter((pad) => pad.key === 'K');
            playSound(filterK[0].sound, filterK[0].name)
            break;
        case 76:
            classClick('L');
            const filterL = selectedLib.filter((pad) => pad.key === 'L');
            playSound(filterL[0].sound, filterL[0].name)
            break;
        case 49:
            selectedLib = kicks;
            createPads(kicks);
            break;
        case 50:
            selectedLib = snares;
            createPads(snares);
            break;
        case 51:
            selectedLib = percussion;
            createPads(percussion);
            break;
        default:
            console.log(`${e.keyCode} does not have a function in this App`);
            break;
    }
};

//keys event listeners
document.addEventListener('keydown', pressKeyHandler);

// audio element generator
function sound(src) {
    this.sound = document.createElement('audio')
    this.sound.src = src; //set the src attribute to the link passed
    this.sound.setAttribute('preload', 'auto'); //preload the sound to be ready
    this.sound.setAttribute('controls', 'none'); //hide controls
    this.sound.classList.add('clip'); //FCC project #6 (each audio element should be named like this)
    this.sound.style.display = 'none'; //hide the audio element
    document.body.appendChild(this.sound); //render the created audio element into the DOM
    this.play = function() {
        this.sound.play(); //play the sound  
    };
    this.stop = function() {
        this.sound.pause(); //pauses the sound
    };
}

//kick library
oneA = new sound('./sounds/kicks/ESTA_kick_one_shot_air_max.wav');
oneS = new sound('./sounds/kicks/ESTA_kick_one_shot_bear.wav');
oneD = new sound('./sounds/kicks/ESTA_kick_one_shot_boost.wav');
oneF = new sound('./sounds/kicks/ESTA_kick_one_shot_finesse.wav');
oneG = new sound('./sounds/kicks/ESTA_kick_one_shot_gel.wav');
oneH = new sound('./sounds/kicks/ESTA_kick_one_shot_indent.wav');
oneJ = new sound('./sounds/kicks/ESTA_kick_one_shot_kiko.wav');
oneK = new sound('./sounds/kicks/ESTA_kick_one_shot_leather.wav');
oneL = new sound('./sounds/kicks/ESTA_kick_one_shot_maroon.wav');

kicks = [
    {
        sound: oneA,
        name: 'Air Max',
        key: 'A'
    },

    {
        sound: oneS,
        name: 'Bear',
        key: 'S'
    },

    {
        sound: oneD,
        name: 'Boost',
        key: 'D'
    },

    {
        sound: oneF,
        name: 'Finesse',
        key: 'F'
    },

    {
        sound: oneG,
        name: 'Gel',
        key: 'G'
    },

    {
        sound: oneH,
        name: 'Indent',
        key: 'H'
    },

    {
        sound: oneJ,
        name: 'Kiko',
        key: 'J'
    },

    {
        sound: oneK,
        name: 'Leather',
        key: 'K'
    },

    {
        sound: oneL,
        name: 'Maroon',
        key: 'L'
    }
]

//Snare library
twoA = new sound('./sounds/snares/ESTA_snare_one_shot_backboard.wav');
twoS = new sound('./sounds/snares/ESTA_snare_one_shot_chippy.wav');
twoD = new sound('./sounds/snares/ESTA_snare_one_shot_crackers.wav');
twoF = new sound('./sounds/snares/ESTA_snare_one_shot_crackin.wav');
twoG = new sound('./sounds/snares/ESTA_snare_one_shot_duece_01.wav');
twoH = new sound('./sounds/snares/ESTA_snare_one_shot_duece_02.wav');
twoJ = new sound('./sounds/snares/ESTA_snare_one_shot_dust.wav');
twoK = new sound('./sounds/snares/ESTA_snare_one_shot_goat.wav');
twoL = new sound('./sounds/snares/ESTA_snare_one_shot_levels_01.wav');

snares = [
    {
        sound: twoA,
        name: 'Backboard',
        key: 'A'
    },
    {
        sound: twoS,
        name: 'Chippy',
        key: 'S'
    },
    {
        sound: twoD,
        name: 'Crackers',
        key: 'D'
    },
    {
        sound: twoF,
        name: 'Crackin',
        key: 'F'
    },
    {
        sound: twoG,
        name: 'Deuce 1',
        key: 'G'
    },
    {
        sound: twoH,
        name: 'Deuce 2',
        key: 'H'
    },
    {
        sound: twoJ,
        name: 'Dust',
        key: 'J'
    },
    {
        sound: twoK,
        name: 'Goat',
        key: 'K'
    },
    {
        sound: twoL,
        name: 'Levels',
        key: 'L'
    }
]

//percussion library
threeA = new sound('./sounds/percussion/ESTA_percussion_one_shot_bounce.wav');
threeS = new sound('./sounds/percussion/ESTA_percussion_one_shot_chainz.wav');
threeD = new sound('./sounds/percussion/ESTA_percussion_one_shot_champ.wav');
threeF = new sound('./sounds/percussion/ESTA_percussion_one_shot_lovely.wav');
threeG = new sound('./sounds/percussion/ESTA_percussion_one_shot_push.wav');
threeH = new sound('./sounds/percussion/ESTA_percussion_one_shot_shaky.wav');
threeJ = new sound('./sounds/percussion/ESTA_percussion_one_shot_side_hit.wav');
threeK = new sound('./sounds/percussion/ESTA_percussion_one_shot_stomp.wav');
threeL = new sound('./sounds/percussion/ESTA_percussion_one_shot_tambourine.wav');

percussion = [
    {
        sound: threeA,
        name: 'Bounce',
        key: 'A'
    },
    {
        sound: threeS,
        name: 'Chainz',
        key: 'S'
    },
    {
        sound: threeD,
        name: 'Champ',
        key: 'D'
    },
    {
        sound: threeF,
        name: 'Lovely',
        key: 'F'
    },
    {
        sound: threeG,
        name: 'Push',
        key: 'G'
    },
    {
        sound: threeH,
        name: 'Shaky',
        key: 'H'
    },
    {
        sound: threeJ,
        name: 'Side Hit',
        key: 'J'
    },
    {
        sound: threeK,
        name: 'Stomp',
        key: 'K'
    },
    {
        sound: threeL,
        name: 'Tambourine',
        key: 'L'
    }
]

//pad element generator
function newPad(pad) {
    const { sound, name, key } = pad; // destructuring the pad object provided
    this.newPad = document.createElement('div'); //create a div
    this.newPad.classList.add('drumPad'); //add the class "drumPad" to it
    this.newPad.setAttribute('id', key); //sets the id
    this.newPad.setAttribute('type', 'button'); //sets the div type to button
    this.newPad.innerText = key; //render the key 
    this.newPad.onclick = () => {
        playSound(sound, name);
        classClick(key);
    };
    this.newPad.onmouseover = () => classHover(key);
    this.newPad.onmouseleave = () => {
        this.newPad.classList.remove('drumPadHover');
    };
    padCONTAINER.appendChild(this.newPad); // add this new pad created to the pad container
}

// Play sound function 
const playSound = (sound, name) => {
    sound.play(); // plays the sound -- this function is part of the sound object
    beatNAME.innerHTML = name; //displays sounds name into the beat-name paragraph
};

// Edit class when hover 
const classHover = (key) => {
    const pad = document.getElementById(key); //get current pad id
    pad.classList.add('drumPadHover'); //add a class when mouse hovers in
};

//edit class when clicking
const classClick = (key) => {
    const pad = document.getElementById(key); //get current pad id
    pad.classList.add('drumPadClicked'); // add a class when pad is clicked
    setTimeout(() => {
        pad.classList.remove('drumPadClicked');
    }, 500); //remove after 500MS
};

//create pad function
const createPads = (library) => {
    while (padCONTAINER.firstChild) {
        padCONTAINER.removeChild(padCONTAINER.lastChild);
    }
    library.map((pad) => {
        new newPad(pad);
    });
};

// Render library on first load
window.onload = () => {
    selectedLib = kicks;
    createPads(kicks);
};

//Render libraries on click
libOne.onclick = () => {
    selectedLib = kicks;
    createPads(kicks);
};
libTwo.onclick = () => {
    selectedLib = snares;
    createPads(snares);
};
libThree.onclick = () => {
    selectedLib = percussion;
    createPads(percussion);
};
