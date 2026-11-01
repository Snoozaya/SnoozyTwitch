/*
  EDITING GUIDE
  1) Edit the cats below: names, descriptions, traits, colors and SVG portrait details.
  2) Edit question text and options in QUESTIONS.
  3) Each option has scores: { catId: points }. Add or remove points as you like.
  4) type: "single" allows ONE answer. type: "multi" allows any number of answers.
     The display uses square indicators for single-select and round indicators for multi-select,
     following the requested visual style. Change `type` to change the selection behavior.
  5) Every question must have at least one option. Keep each cat id consistent with CATS.
*/
const CATS = [
  {
    id: "macha",
    name: "Macha",
    subtitle: "The Protector",
    description: "You're the most normal out of all the crazies. You have a good sense of what you like and don't like, but don't let it overshadow other's. It's kindness, that's at the center of your being, and you don't hesitate to help other's when they need it. Although you might not admit it to yourself and maybe don't look it - you're a lil pookie at heart!",
    traits: ["kind", "protective", "composed"],
    colors: ["#E5E0FA", "#A99BE8", "#55468A"],
    face: "😽",
    image: "./macha.png",
  },
  {
    id: "finn",
    name: "Finn",
    subtitle: "The Menace",
    description: "Honestly, if you got this result, I should probably call 911. You're a menace to society, especially when you're bored. The world revolves around you and you know it, but that's no excuse to be a selish creep. Maybe work on yourself, low key.",
    traits: ["curious", "main character syndrome", "chaotic"],
    colors: ["#FADADA", "#E87979", "#922F3E"],
    face: "🐈‍⬛",
    image: "./finn.png",
  },
  {
    id: "cinni",
    name: "Cinni",
    subtitle: "The Doormat",
    description: "You're the sweetest most adorable person and you deserve to be loved the way you crave. But... you're also a bit of a doormat. You let others treat you badly as long as they will like you, and you're scared of being alone or abandoned. Damn when did this quiz get so serious? But hey, at least you're really cute!",
    traits: ["adorable", "clingy", "people pleaser"],
    colors: ["#FCE4EE", "#F09BBB", "#A84670"],
    face: "😼",
    image: "./cinni.png",
  },
  {
    id: "khajiit",
    name: "Khajiit",
    subtitle: "The Coward",
    description: "Life in general is kind of scary and uncomfortable for you. But it's okay, everyone gets a little scared sometimes... You just more than others. And in the end, there's nothing wrong with finding pleasure in the quiet things in life. Thrill and andrenaline isn't more everyone.",
    traits: ["scaredy-cat", "sensitive", "quiet"],
    colors: ["#DDF1E4", "#91C9A7", "#376B50"],
    face: "😺",
    image: "./khajiit.png",
  }
];

// Draft answer text and scoring are placeholders for you to customize.
// Scores are deliberately easy to edit: an option can add points to one or several cats.

const QUESTIONS = [
  {
    text: "Which smells do you like?",
    type: "multi",
    options: [
      { text: "Breakfast, Lunch, and Dinner", emoji: "🍲", scores: { finn: 2, macha: 2 } },
      { text: "The scent after a nice shower", emoji: "🧼", scores: { finn: 1 } },
      { text: "The smell of my partner", emoji: "🥰", scores: { finn: 1, cinni: 2 } },
      { text: "Plastic, Gasoline, Money", emoji: "⛽", scores: { macha: 1, khajiit: 2 } },
      { text: "Fresh country side air", emoji: "🌿", scores: { khajiit: 2, macha: 1 } }
    ]
  },
  {
    text: "Which types of affection do you like?",
    type: "multi",
    options: [
      { text: "Hugs and Kisses", emoji: "💋", scores: { finn: 2 } },
      { text: "Gentle Touch", emoji: "🤲", scores: { finn: 1, macha: 1, khajiit: 1 } },
      { text: "Cuddling in bed", emoji: "🧸", scores: { macha: 2, cinni: 1 } },
      { text: "All of them, a lot, and hard", emoji: "💗", scores: { cinni: 2, khajiit: 1 } }
    ]
  },
  {
    text: "Having someone brush my hair is…",
    type: "single",
    options: [
      { text: "the shit!", emoji: "💆", scores: { cinni: 2, khajiit: 1 } },
      { text: "...shit", emoji: "🙅", scores: { macha: 2 } }
    ]
  },
  {
    text: "Your partner is taking a bath. What do you do?",
    type: "single",
    options: [
      { text: "Go perv on them and watch them bathe", emoji: "👀", scores: { finn: 1 } },
      { text: "Keep doing what I'm doing", emoji: "🚪", scores: { macha: 1, cinni: 1, khajiit: 1 } }
    ]
  },
  {
    text: "Do you prefer giving or receiving affection?",
    type: "single",
    options: [
      { text: "Giving", emoji: "💝", scores: { finn: 2 } },
      { text: "Receiving", emoji: "🥰", scores: { cinni: 2, khajiit: 1 } },
      { text: "Either", emoji: "⚖️", scores: { macha: 2, khajiit: 2 } }
    ]
  },
  {
    text: "Which is closest to your perfect type of day?",
    type: "single",
    options: [
      { text: "Going out to see new places with my friends and ending the day strong with pizza and laser tag.", emoji: "🎮", scores: { finn: 3 } },
      { text: "A warm spring day spent on the porch with a book, enjoying the wind, the grass and life by myself.", emoji: "🌿", scores: { khajiit: 3 } },
      { text: "A quiet day with my partner watching a movie I've already seen 3 times and cuddling. The most exciting part of the day will be a tickle fight.", emoji: "🧸", scores: { cinni: 3 } },
      { text: "Spending the day on a creative hobby, eating lots of snacks, a movie and dinner in the evening, and then some cuddles before bed.", emoji: "🎨", scores: { macha: 3 } }
    ]
  },
  {
    text: "There is screaming and fighting in an alley nearby. What do you do?",
    type: "single",
    options: [
      { text: "I run and hide, then call 911.", emoji: "🏃", scores: { cinni: 2 } },
      { text: "I panic and scream while running in a circle.", emoji: "😱", scores: { khajiit: 2 } },
      { text: "I jump into action and run into the alley, ready to defend whoever needs help.", emoji: "🦸", scores: { macha: 2 } },
      { text: "I'm the one fighting.", emoji: "🥊", scores: { finn: 2 } }
    ]
  },
  {
    text: "What do you do to cope when you get emotional?",
    type: "single",
    options: [
      { text: "I cry. And then I cry until I get hugs. And once that's done, I cry some more.", emoji: "😭", scores: { cinni: 2 } },
      { text: "I can't cope, so i just get really pissed off and want no one to touch me.", emoji: "😡", scores: { finn: 2 } },
      { text: "I get mad and might lash out at other's, but really I'm just close to tears.", emoji: "🌋", scores: { khajiit: 2 } },
      { text: "I don't have mental issues (delusional).", emoji: "😌", scores: { macha: 2 } }
    ]
  },
  {
    text: "What is the worst?",
    type: "single",
    options: [
      { text: "Being alone", emoji: "💔", scores: { cinni: 2 } },
      { text: "Being bored", emoji: "🥱", scores: { finn: 2 } },
      { text: "Being hungry", emoji: "🍽️", scores: { macha: 2 } },
      { text: "Being around others", emoji: "🚷", scores: { khajiit: 2 } }
    ]
  },
  {
    text: "What scares you the most?",
    type: "single",
    options: [
      { text: "Loud or unfamiliar noises", emoji: "🔊", scores: { cinni: 2, khajiit: 1 } },
      { text: "Being in new unfamiliar environments", emoji: "🌫️", scores: { macha: 2, khajiit: 1 } },
      { text: "Doctors", emoji: "🩺", scores: { finn: 2, khajiit: 1 } },
      { text: "All of the above and more", emoji: "😰", scores: { khajiit: 3 } }
    ]
  },
  {
    text: "How do you feel about your personal boundaries?",
    type: "single",
    options: [
      { text: "I know my personal boundaries and don't allow them to be broken.", emoji: "🛑", scores: { macha: 2 } },
      { text: "I have boundaries, but I let people step all over them if it means they'll like me.", emoji: "🥺", scores: { cinni: 2 } },
      { text: "I love personal boundaries! They're so fun to step on.", emoji: "😈", scores: { finn: 2 } },
      { text: "I haven't really thought about it and this question scares me.", emoji: "😳", scores: { khajiit: 2 } }
    ]
  },
  {
    text: "In what areas of your life do you tend to feel envy or jealousy?",
    type: "multi",
    options: [
      { text: "Food - I always want whatever the other person is eating", emoji: "🍟", scores: { macha: 1, finn: 1 } },
      { text: "Relationships - I don't like to share attention.", emoji: "💞", scores: { cinni: 2 } },
      { text: "Material stuff - I want the same games, clothes, etc. as my friends", emoji: "🛍️", scores: { khajiit: 2, finn: 1 } },
      { text: "None - I dont really get jealous or envious.", emoji: "🧘", scores: { macha: 1 } }
    ]
  },
  {
    text: "Your friend or partner really wants to watch a movie they know you hate and begs you to watch it with them. You…",
    type: "single",
    options: [
      { text: "... watch it with them. If you really like someone, you should be willing to do things you don't like if it makes them happy.", emoji: "🍿", scores: { cinni: 2 } },
      { text: "... don't watch it with them. There's no point of putting myself through it, they could just watch it with someone else who'd actually enjoy it.", emoji: "🙅", scores: { finn: 2 } },
      { text: "... don't feel any particular way. I don't care that much about this kind of thing.", emoji: "🤷‍♀️", scores: { macha: 2 } },
      { text: "... guess I could watch it? Unless its a scary movie, then I can't watch it!", emoji: "😨", scores: { khajiit: 2 } },
      { text: "I don't like either of these answers. Why is this suddenly so serious anyway?? This is a Cat Personality Quiz. oh ffs... this isn't about the Dark Knight, is it?", emoji: "😼", scores: { macha: 1 } }
    ]
  }
];


const $ = (selector) => document.querySelector(selector);
const welcome = $("#welcome");
const quiz = $("#quiz");
const result = $("#result");
const questionArea = $("#questionArea");
const nextButton = $("#nextButton");
const backButton = $("#backButton");
let currentQuestion = 0;
let answers = QUESTIONS.map(() => []);

$("#startButton").addEventListener("click", () => {
  welcome.hidden = true;
  result.hidden = true;
  quiz.hidden = false;
  currentQuestion = 0;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

backButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!answers[currentQuestion].length) return;
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const saved = answers[currentQuestion] || [];
  const percent = Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100);

  $("#progressLabel").textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  $("#progressPercent").textContent = `${percent}% of the way`;
  $("#progressFill").style.width = `${percent}%`;
  $("#progressBar").setAttribute("aria-valuenow", percent);
  backButton.disabled = currentQuestion === 0;
  nextButton.textContent = currentQuestion === QUESTIONS.length - 1 ? "Reveal my cat ✦" : "Continue →";
  nextButton.disabled = saved.length === 0;
  $("#selectionHint").textContent = question.type === "multi" ? "Choose one or more" : "Choose one answer";

  questionArea.className = "question-area " + (question.type === "single" ? "single" : "multi");
  questionArea.innerHTML = `
    <div class="question-kicker">A little about you</div>
    <h2>${escapeHTML(question.text)}</h2>
    ${question.help ? `<p class="question-help">${escapeHTML(question.help)}</p>` : `<p class="question-help">Pick whatever fits best, it doesn't need to be a perfect match.</p>`}
    <div class="options" role="${question.type === "single" ? "radiogroup" : "group"}" aria-label="${escapeHTML(question.text)}">
      ${question.options.map((option, index) => {
        const selected = saved.includes(index);
        const inputType = question.type === "single" ? "radio" : "checkbox";
        return `
          <label class="option ${selected ? "selected" : ""}">
            <input type="${inputType}" name="answer-${currentQuestion}" value="${index}" ${selected ? "checked" : ""} aria-label="${escapeHTML(option.text)}">
            <span class="indicator" aria-hidden="true"></span>
            <span class="option-text">${option.emoji ? `<span class="option-emoji" aria-hidden="true">${option.emoji}</span>` : ""}${escapeHTML(option.text)}</span>
          </label>`;
      }).join("")}
    </div>`;

  questionArea.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      const picked = Number(input.value);
      if (question.type === "single") {
        answers[currentQuestion] = [picked];
      } else {
        const selected = new Set(answers[currentQuestion]);
        if (input.checked) selected.add(picked);
        else selected.delete(picked);
        answers[currentQuestion] = [...selected];
      }
      renderQuestion();
    });
  });
}

function calculateScores() {
  const scores = Object.fromEntries(CATS.map(cat => [cat.id, 0]));
  answers.forEach((selectedIndices, questionIndex) => {
    selectedIndices.forEach(optionIndex => {
      const option = QUESTIONS[questionIndex].options[optionIndex];
      if (!option || !option.scores) return;
      Object.entries(option.scores).forEach(([catId, points]) => {
        if (Object.hasOwn(scores, catId)) scores[catId] += Number(points) || 0;
      });
    });
  });
  return scores;
}

function showResult() {
  const scores = calculateScores();

  const maxScore = Math.max(...Object.values(scores));

  const winners = CATS.filter(
    cat => scores[cat.id] === maxScore
  );

  // Randomly select a winner if multiple cats tie.
  const winner = winners[
    Math.floor(Math.random() * winners.length)
  ];

  // Calculate each cat's share of all points earned.
  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0
  );

  // If no points were earned, give each cat an equal share.
  const percentages = {};
  let remainingPercentage = 100;

  CATS.forEach((cat, index) => {
    if (index === CATS.length - 1) {
      // Ensure the percentages always add up to exactly 100%.
      percentages[cat.id] = remainingPercentage;
    } else {
      const percentage = totalScore > 0
        ? Math.round((scores[cat.id] / totalScore) * 100)
        : Math.floor(100 / CATS.length);

      percentages[cat.id] = percentage;
      remainingPercentage -= percentage;
    }
  });

  quiz.hidden = true;
  result.hidden = false;

  result.innerHTML = `
    <span class="eyebrow">✦ Your feline alter ego</span>

    <div class="result-art">
      <img
        src="${escapeHTML(winner.image)}"
        alt="${escapeHTML(winner.name)}"
        width="310"
        height="310"
      >
    </div>

    <div class="question-kicker">Your result is</div>

    <h2>${escapeHTML(winner.name)}</h2>

    <p class="question-help">
      ${escapeHTML(winner.subtitle)}
    </p>

    <p class="result-copy">
      ${escapeHTML(winner.description)}
    </p>

    <div class="traits">
      ${winner.traits.map(trait => `
        <span class="trait">
          ${escapeHTML(trait)}
        </span>
      `).join("")}
    </div>

    <div class="personality-overview">
      <h3>Your personality mix ✨</h3>

      <p>
        You're a little bit of every cat.
        Here's how your answers break down.
      </p>

      ${CATS.map(cat => `
        <div class="personality-row">

          <div class="personality-label">
            <span class="personality-name">
              ${escapeHTML(cat.name)}
            </span>

            <span class="personality-percentage">
              ${percentages[cat.id]}%
            </span>
          </div>

          <div
            class="personality-track"
            role="progressbar"
            aria-label="${escapeHTML(cat.name)}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${percentages[cat.id]}"
          >
            <div
              class="personality-fill"
              data-percentage="${percentages[cat.id]}"
              style="background: ${cat.colors[2]}"
            ></div>
          </div>

        </div>
      `).join("")}
    </div>

    <div class="result-actions">
      <button class="primary" id="retakeButton">
        Take it again ↻
      </button>

      <button class="secondary" id="shareButton">
        Copy my result ✧
      </button>
    </div>
  `;

  // Animate the bars after the result is displayed.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      result.querySelectorAll(".personality-fill")
        .forEach(bar => {
          bar.style.width =
            `${bar.dataset.percentage}%`;
        });
    });
  });

  // Retake the quiz.
  $("#retakeButton").addEventListener("click", () => {
    answers = QUESTIONS.map(() => []);
    currentQuestion = 0;

    result.hidden = true;
    quiz.hidden = false;

    renderQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Copy the main result.
  $("#shareButton").addEventListener("click", async () => {
    const shareText =
      `I'm ${winner.name} — ${winner.subtitle}! ` +
      `Which cat are you?`;

    try {
      await navigator.clipboard.writeText(shareText);
      $("#shareButton").textContent = "Copied! ✓";
    } catch {
      window.prompt("Copy your result:", shareText);
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function catPortrait(cat) {
    return `<img
      src="${escapeHTML(cat.image)}"
      alt="${escapeHTML(cat.name)}"
      width="310"
      height="310"
    >`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}