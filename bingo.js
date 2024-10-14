$(".bingo-card__item").on('click', function() {
    $(this).toggleClass('active');
});

$('.clear-button').on('click', function(){
    $('.bingo-card__item').removeClass('active');
});

const freeSpace = "zaya is behind on chat"
const bingoOptions = [
    "Zaya tells someone to “get fucked”",
    "Hidan was jailed",
    "Zaya tells felina she loves her",
    "Audio unsyncs",
    "professional strimmer moment / technical issues",
    "cat walks in front of camera",
    "Zaya mentions twilight unprompted",
    "clip shoutouts freeze/bug",
    "someone asks if contacts or fangs are real",
    "Zaya gets raided",
    "Zaya fake cries",
    "Zaya cries fr",
    "misreads or struggles to read name",
    "Zaya word garbles brkjbeikrfbekrf",
    "Zaya falls for the eyewear-roll",
    "Zaya leaks dms",
    "the unholy trinity of redeems (dr who, yop, secret tunnel)",
    "Yeeves message gets deleted",
    "Zaya thirsts over Yop",
    "Zaya gets jumpscared",
    "cats copypasta",
    "Finn spit on hand",
    "Zaya info dumps",
    "",
    ""
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
    
    for (var i=0; i<numCards; i++) {
        if (i == numFreeSpace) {
            bingoCard[i] = {text: freeSpace, isMarked: false};
        }
        else if (shuffledOptions.length > 0) {
            bingoCard[i] = {text: bingoOptions.pop(), isMarked: false};
        }
        else {
            bingoCard[i] = {text: "", isMarked: false};
        }
    }
    
    return bingoCard;
}


let cachedBingoOptions;
if (cachedBingoOptions) {
  cachedBingoOptions = JSON.parse(cachedBingoOptions);
} 
else {
    cachedBingoOptions = buildBingoCard();
  localStorage.setItem('cachedBingoOptions', JSON.stringify(cachedBingoOptions));
}

// insert bingo options
const bingoCardItems = document.querySelectorAll('.bingo-card__item');
bingoCardItems.forEach((item, index) => {
    let text = "";
    let isMarked = false;
    if (index < cachedBingoOptions.length) {
        text = cachedBingoOptions[index].text;
    }
    
    if (isMarked) {
            item.innerHTML = `${text}<span class="bingo-card__checkbox active"></span>`;
    }
    else {
            item.innerHTML = `${text}<span class="bingo-card__checkbox"></span>`;
    }
});