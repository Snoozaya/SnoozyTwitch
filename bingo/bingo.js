const freeSpace = "zaya is behind on chat";
const lastUpdatedTimestamp = 1760291978;
const bingoOptions = [
    "Someone's back gets broken 🫂",
    "Technical issues ⚠️",
    "Someone gets jailed",
    "Cat spotted on main cam 🐈",
    "Twilight reference dropped unprompted",
    "Incomming Raid!",
    "Zaya says your name",
    "Hype train!",
    "Real crying 😢",
    "Successful jumpscare 👻",
    "Zaya thirsts over Yop",
    "Zaya cant fecking read",
    "Yop teases / makes fun of Zaya",
    "Coffee refill ☕",
    "DMs get leaked 😳",
    "Zaya Tangia is used 🍊",
    "Zaya laughs at their own joke 🙄",
    "Zaya sings 🎵",
    "German Valley Girl 💀",
    "Zaya gushes over how cute Finn or Cinni is",
    "Jayvik or KDH mentioned",
    "Someone gets roasted by Zaya 🔥",
    "Close-up of dissapointment 😒",
    "TTS is making sus noises"
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function buildBingoCard() {
    /*	Shuffles a new bingo card list with freeSpace in the middle.
     *	Initiates all fields as unticked.
     */
    const numCards = 24;
    const numFreeSpace = (numCards / 2);
    let bingoCard = [];
    let shuffledOptions = [...bingoOptions];
    shuffleArray(shuffledOptions);
    
    for (var i=0; i<=numCards; i++) {
        if (i == numFreeSpace) {
            bingoCard[i] = {text: freeSpace, isMarked: false};
        }
        else if (shuffledOptions.length > 0) {
            bingoCard[i] = {text: shuffledOptions.pop(), isMarked: false};
        }
        else {
            bingoCard[i] = {text: "", isMarked: false};
        }
    }
    console.log(bingoCard)
    return bingoCard;
}

let cachedBingoOptions;
let creationTimestamp;
let cachedData = localStorage.getItem('cachedBingoOptions');
console.log(cachedData);
console.log(cachedData.options);
console.log(cachedData.timestamp);
console.log(cachedData.timestamp > lastUpdatedTimestamp);
if (cachedData.options && cachedData.timestamp > lastUpdatedTimestamp) {
  cachedBingoOptions = JSON.parse(cachedData.options);
} 
else {
    cachedBingoOptions = buildBingoCard();
    creationTimestamp = Date.now();
    localStorage.setItem('cachedBingoOptions', JSON.stringify({
        options: cachedBingoOptions,
        timestamp: creationTimestamp,
    }));
}

// insert bingo options
const bingoCardItems = document.querySelectorAll('.bingo-card__item');
bingoCardItems.forEach((item, index) => {
    let text = cachedBingoOptions[index].text;
    let isMarked = cachedBingoOptions[index].isMarked;
    console.log(cachedBingoOptions[index])
    if (isMarked) {
        item.innerHTML = `${text}<span class="bingo-card__checkbox"></span>`;
        item.className += " active"
    }
    else {
        item.innerHTML = `${text}<span class="bingo-card__checkbox"></span>`;
    }
});


$(".bingo-card__item").on('click', function() {
    $(this).toggleClass('active');
    let index = $(this).data('index');
    cachedBingoOptions[index].isMarked = !cachedBingoOptions[index].isMarked;
    console.log(cachedBingoOptions);
    localStorage.setItem('cachedBingoOptions', JSON.stringify({
        options: cachedBingoOptions,
        timestamp: creationTimestamp,
    }));
});

$('.clear-button').on('click', function(){
    $('.bingo-card__item').removeClass('active');
    let index = $(this).data('index');
    cachedBingoOptions[index].isMarked = false;
    console.log(cachedBingoOptions);
    localStorage.setItem('cachedBingoOptions', JSON.stringify({
        options: cachedBingoOptions,
        timestamp: creationTimestamp,
    }));
});
