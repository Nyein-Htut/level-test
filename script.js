const questions = [
  // --- A1 LEVEL (Questions 1-5) ---
  { level: "A1", question: "My sister _______ in London with her friend.", options: ["live", "lives", "living", "is live"], answer: 1 },
  { level: "A1", question: "Where _______ yesterday at 5 PM?", options: ["were you", "you were", "are you", "did you be"], answer: 0 },
  { level: "A1", question: "There isn't _______ milk left in the fridge.", options: ["some", "many", "any", "a"], answer: 2 },
  { level: "A1", question: "Look at those dark clouds! It _______ rain soon.", options: ["is going to", "will to", "is going", "shall"], answer: 0 },
  { level: "A1", question: "She is _______ than her older brother.", options: ["tall", "taller", "more tall", "tallest"], answer: 1 },

  // --- A2 LEVEL (Questions 6-10) ---
  { level: "A2", question: "She is much _______ at mathematics than her brother.", options: ["good", "more good", "better", "best"], answer: 2 },
  { level: "A2", question: "We couldn't go out because it _______ heavily.", options: ["rained", "was raining", "is raining", "rains"], answer: 1 },
  { level: "A2", question: "I haven't finished reading the report _______.", options: ["already", "yet", "still", "ever"], answer: 1 },
  { level: "A2", question: "You _______ wear a seatbelt while driving; it's the law.", options: ["must", "might", "could", "would"], answer: 0 },
  { level: "A2", question: "He decided to stop _______ junk food to get in shape.", options: ["eating", "to eat", "eat", "eaten"], answer: 0 },

  // --- B1 LEVEL (Questions 11-15) ---
  { level: "B1", question: "If I had more time, I _______ learn a third language.", options: ["will", "would", "shall", "am going to"], answer: 1 },
  { level: "B1", question: "She has been working here _______ 2019.", options: ["since", "for", "during", "from"], answer: 0 },
  { level: "B1", question: "The package _______ to your house tomorrow morning.", options: ["will deliver", "will be delivered", "delivers", "is delivering"], answer: 1 },
  { level: "B1", question: "Do you know where _______?", options: ["the station is", "is the station", "the station lies", "does the station be"], answer: 0 },
  { level: "B1", question: "I'm looking forward _______ you at the conference.", options: ["to see", "seeing", "to seeing", "for seeing"], answer: 2 },

  // --- B2 LEVEL (Questions 16-20) ---
  { level: "B2", question: "The flight was delayed _______ unexpected bad weather.", options: ["due to", "because", "despite", "owing"], answer: 0 },
  { level: "B2", question: "He promised to call me as soon as he _______ at the airport.", options: ["arrived", "arrives", "will arrive", "would arrive"], answer: 1 },
  { level: "B2", question: "By this time next year, I _______ my master's degree.", options: ["will finish", "will have finished", "am finishing", "have finished"], answer: 1 },
  { level: "B2", question: "He insisted _______ paying for the entire dinner.", options: ["in", "on", "for", "at"], answer: 1 },
  { level: "B2", question: "She regrets _______ that job offer in New York last year.", options: ["not taking", "to not take", "not take", "don't take"], answer: 0 },

  // --- C1 LEVEL (Questions 21-25) ---
  { level: "C1", question: "Had I known about the changes, I _______ my plans earlier.", options: ["would alter", "will alter", "would have altered", "had altered"], answer: 2 },
  { level: "C1", question: "Rarely _______ such a passionate performance from a young artist.", options: ["we have seen", "have we seen", "we saw", "did we saw"], answer: 1 },
  { level: "C1", question: "The team worked around the clock to _______ the deadline.", options: ["reach", "meet", "gain", "fulfill"], answer: 1 },
  { level: "C1", question: "No sooner _______ home than the storm broke out.", options: ["had I arrived", "did I arrive", "I arrived", "was I arriving"], answer: 0 },
  { level: "C1", question: "Her remarks were completely _______ to the issue being discussed.", options: ["irrelevant", "unrelevant", "disrelevant", "non-relevant"], answer: 0 },

  // --- C2 LEVEL (Questions 26-30) ---
  { level: "C2", question: "The proposal was accepted, _______ some initial reservations from the committee.", options: ["notwithstanding", "provided that", "whereas", "insofar as"], answer: 0 },
  { level: "C2", question: "He gave a very _______ account of the event, leaving out no detail.", options: ["meticulous", "equivocal", "cursory", "superficial"], answer: 0 },
  { level: "C2", question: "The new regulations are expected to _______ major changes across the sector.", options: ["bring about", "take over", "come by", "put off"], answer: 0 },
  { level: "C2", question: "The company's rapid growth was _______ by aggressive overseas investment.", options: ["fuelled", "ignited", "propelled", "sparked"], answer: 0 },
  { level: "C2", question: "To suggest he did it deliberately is a gross _______ of his intentions.", options: ["misconstruction", "misrepresentation", "misconception", "misdirection"], answer: 1 }
];

const cefrDescriptions = {
  "A1": { title: "A1 — Beginner", text: "You can understand and use basic everyday expressions and very simple phrases aimed at satisfying concrete needs." },
  "A2": { title: "A2 — Elementary", text: "You can understand sentences and frequently used expressions related to areas of most immediate relevance." },
  "B1": { title: "B1 — Intermediate", text: "You can handle most situations while traveling and produce simple connected text on topics of personal interest." },
  "B2": { title: "B2 — Upper-Intermediate", text: "You can interact with a degree of fluency with native speakers and understand complex, technical concepts." },
  "C1": { title: "C1 — Advanced", text: "You can express ideas fluently and spontaneously without searching for words in complex, professional environments." },
  "C2": { title: "C2 — Mastery", text: "You have complete command over the language, easily understanding and expressing nuanced ideas effortlessly." }
};

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let userAnswers = []; // Tracks question, user response, and correct response

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCount = document.getElementById("question-count");
const levelIndicator = document.getElementById("level-indicator");
const progressBar = document.getElementById("progress-bar");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  quizScreen.classList.remove("fade-in");
  void quizScreen.offsetWidth; // Trigger reflow for animation
  quizScreen.classList.add("fade-in");
  
  showQuestion();
}

function showQuestion() {
  resetState();
  const q = questions[currentQuestionIndex];
  
  questionText.innerText = q.question;
  questionCount.innerText = `STEP ${String(currentQuestionIndex + 1).padStart(2, '0')}/${questions.length}`;
  levelIndicator.innerText = `LEVEL ${q.level}`;
  
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  const labels = ["A", "B", "C", "D"];
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("quiz-option");
    
    button.innerHTML = `
      <span>${option}</span>
      <span class="option-index">${labels[index]}</span>
    `;
    
    button.addEventListener("click", () => selectOption(button, index));
    optionsContainer.appendChild(button);
  });
}

function resetState() {
  selectedOption = null;
  nextBtn.disabled = true;
  optionsContainer.innerHTML = "";
}

function selectOption(selectedBtn, index) {
  const options = optionsContainer.querySelectorAll(".quiz-option");
  options.forEach(btn => btn.classList.remove("selected"));
  
  selectedBtn.classList.add("selected");
  selectedOption = index;
  nextBtn.disabled = false;
}

function handleNextQuestion() {
  const q = questions[currentQuestionIndex];
  const isCorrect = selectedOption === q.answer;

  if (isCorrect) {
    score++;
  }

  // Store user attempt details for review
  userAnswers.push({
    question: q.question,
    level: q.level,
    selected: q.options[selectedOption],
    correct: q.options[q.answer],
    isCorrect: isCorrect
  });

  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function calculateCEFR(scoreTotal) {
  if (scoreTotal <= 5) return "A1";
  if (scoreTotal <= 10) return "A2";
  if (scoreTotal <= 16) return "B1";
  if (scoreTotal <= 22) return "B2";
  if (scoreTotal <= 27) return "C1";
  return "C2";
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  
  resultScreen.classList.remove("fade-in");
  void resultScreen.offsetWidth; // Trigger reflow
  resultScreen.classList.add("fade-in");

  const cefrLevel = calculateCEFR(score);
  const info = cefrDescriptions[cefrLevel];

  document.getElementById("result-cefr").innerText = cefrLevel;
  document.getElementById("result-title").innerText = info.title;
  document.getElementById("result-score").innerText = `${score} / ${questions.length} Correct`;
  document.getElementById("result-text").innerText = info.text;

  renderReviewSection();
}

function renderReviewSection() {
  let reviewContainer = document.getElementById("review-container");

  // Create review container dynamically if it doesn't exist
  if (!reviewContainer) {
    reviewContainer = document.createElement("div");
    reviewContainer.id = "review-container";
    reviewContainer.className = "review-section";
    
    // Insert before the restart button
    resultScreen.insertBefore(reviewContainer, restartBtn);
  }

  const incorrectAnswers = userAnswers.filter(item => !item.isCorrect);

  if (incorrectAnswers.length === 0) {
    reviewContainer.innerHTML = `
      <div class="review-header perfect">
        <h3>🎉 Perfect Score!</h3>
        <p>You answered every diagnostic question correctly.</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="review-header">
      <h3>Review Your Mistakes (${incorrectAnswers.length})</h3>
    </div>
    <div class="review-list">
  `;

  incorrectAnswers.forEach((item, idx) => {
    html += `
      <div class="review-card">
        <div class="review-meta">
          <span class="review-index">#${idx + 1}</span>
          <span class="hud-chip">${item.level}</span>
        </div>
        <p class="review-question">${item.question}</p>
        <div class="review-answers">
          <div class="answer-badge wrong">
            <span>Your answer:</span> <strong>${item.selected}</strong>
          </div>
          <div class="answer-badge right">
            <span>Correct:</span> <strong>${item.correct}</strong>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  reviewContainer.innerHTML = html;
}