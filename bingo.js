const freeSpace = "zaya is behind on chat"
const bingoOptions = [
    "Zaya tells someone to “get fucked”",
    "Hidan was jailed",
    "Zaya tells felina she loves her",
    "Audio unsyncs",
    "professional strimmer moment / technical issues",
    "cat walks in front of camera",
    "Zaya mentions twilight unprompted",
    "Zaya greets or mentions you",
    "someone asks if contacts or fangs are real",
    "Zaya gets raided",
    "Zaya fake cries",
    "Zaya cries fr",
    "misreads or struggles to read name",
    "Zaya word garbles brkjbeikrfbekrf",
    "Zaya falls for the eyewear-roll",
    "Zaya leaks dms",
    "unholy trinity of sound redeems",
    "Yeeves message gets deleted",
    "Zaya thirsts over Yop",
    "Zaya gets jumpscared",
    "cats copypasta (no cheating)",
    "Finn spit on hand",
    "Zaya info dumps",
    "Zaya missed your msg"
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

let cachedBingoOptions = localStorage.getItem('cachedBingoOptions');
if (cachedBingoOptions) {
  cachedBingoOptions = JSON.parse(cachedBingoOptions);
} 
else {
    cachedBingoOptions = buildBingoCard();
    console.log(cachedBingoOptions)
    localStorage.setItem('cachedBingoOptions', JSON.stringify(cachedBingoOptions));
}
console.log(cachedBingoOptions)

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
    localStorage.setItem('cachedBingoOptions', JSON.stringify(cachedBingoOptions));
});

$('.clear-button').on('click', function(){
    $('.bingo-card__item').removeClass('active');
    let index = $(this).data('index');
    cachedBingoOptions[index].isMarked = false;
    console.log(cachedBingoOptions);
    localStorage.setItem('cachedBingoOptions', JSON.stringify(cachedBingoOptions));
});