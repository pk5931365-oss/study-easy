/* =========================================================
   STUDY EASY - COMPLETE APP.JS
   ========================================================= */

/* -------------------------
   EXAM LIST
------------------------- */

const exams = [
  {
    id: "NEET",
    name: "NEET",
    desc: "Biology • Chemistry • Physics"
  },
  {
    id: "JEE",
    name: "JEE Main",
    desc: "Physics • Chemistry • Mathematics"
  },
  {
    id: "JEE_ADV",
    name: "JEE Advanced",
    desc: "Advanced PCM practice"
  },
  {
    id: "CDS",
    name: "CDS",
    desc: "English • GK • Maths"
  },
  {
    id: "NDA",
    name: "NDA",
    desc: "Maths • GAT"
  },
  {
    id: "UPSC",
    name: "UPSC CSE",
    desc: "GS • CSAT"
  },
  {
    id: "RAILWAY",
    name: "Railway",
    desc: "Maths • Reasoning • GK"
  },
  {
    id: "SSC",
    name: "SSC",
    desc: "Quant • Reasoning • English • GK"
  }
];


/* -------------------------
   QUESTION BANK
------------------------- */

const questions = [

  /* =========================
     CDS - EASY
  ========================= */

  {
    exam: "CDS",
    level: "Easy",
    q: "Who appoints the Governor of a state in India?",
    o: ["Prime Minister", "President", "Chief Minister", "Chief Justice"],
    a: 1,
    e: "The Governor of a state is appointed by the President of India."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "Which is the largest planet in the Solar System?",
    o: ["Earth", "Saturn", "Jupiter", "Neptune"],
    a: 2,
    e: "Jupiter is the largest planet in the Solar System."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "What is the capital of Rajasthan?",
    o: ["Jodhpur", "Jaipur", "Udaipur", "Kota"],
    a: 1,
    e: "Jaipur is the capital of Rajasthan."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "Which gas is most abundant in Earth's atmosphere?",
    o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    a: 2,
    e: "Nitrogen makes up about 78% of Earth's atmosphere."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "Who wrote the Indian national anthem?",
    o: [
      "Bankim Chandra Chattopadhyay",
      "Rabindranath Tagore",
      "Sarojini Naidu",
      "Subhas Chandra Bose"
    ],
    a: 1,
    e: "Rabindranath Tagore wrote 'Jana Gana Mana'."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "What is the currency of Japan?",
    o: ["Won", "Yuan", "Yen", "Ringgit"],
    a: 2,
    e: "The currency of Japan is the Japanese Yen."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "Which vitamin is mainly produced in the skin through sunlight?",
    o: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    a: 3,
    e: "Sunlight helps the skin synthesize vitamin D."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "The headquarters of the United Nations is located in:",
    o: ["Geneva", "Paris", "New York", "London"],
    a: 2,
    e: "The UN headquarters is in New York City."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "Which river is known as the 'Sorrow of Bihar'?",
    o: ["Ganga", "Kosi", "Yamuna", "Godavari"],
    a: 1,
    e: "The Kosi River is traditionally known as the Sorrow of Bihar because of its floods."
  },

  {
    exam: "CDS",
    level: "Easy",
    q: "What is the SI unit of power?",
    o: ["Joule", "Newton", "Watt", "Pascal"],
    a: 2,
    e: "Power is measured in watts (W)."
  },


  /* =========================
     CDS - MEDIUM
  ========================= */

  {
    exam: "CDS",
    level: "Medium",
    q: "Which Fundamental Right is guaranteed under Article 19?",
    o: [
      "Right to Equality",
      "Right to Freedom",
      "Right against Exploitation",
      "Right to Education"
    ],
    a: 1,
    e: "Article 19 guarantees several freedoms, including speech and expression."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "The Permanent Settlement was introduced by:",
    o: ["Lord Wellesley", "Lord Cornwallis", "Lord Dalhousie", "Lord Curzon"],
    a: 1,
    e: "Lord Cornwallis introduced the Permanent Settlement in 1793."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "Which Indian state has the longest coastline?",
    o: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    a: 2,
    e: "Gujarat has the longest coastline among Indian states."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "The Tropic of Cancer passes through how many Indian states?",
    o: ["6", "7", "8", "9"],
    a: 2,
    e: "The Tropic of Cancer passes through 8 Indian states."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "Which blood group is commonly called the universal donor for red blood cells?",
    o: ["AB+", "O−", "A+", "B−"],
    a: 1,
    e: "O-negative red blood cells are generally considered the universal donor type."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "The Green Revolution in India was mainly associated with increased production of:",
    o: ["Tea", "Wheat and rice", "Cotton", "Sugarcane"],
    a: 1,
    e: "The Green Revolution greatly increased wheat and rice production."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "Which Constitutional Amendment reduced the voting age from 21 to 18?",
    o: ["42nd", "44th", "61st", "73rd"],
    a: 2,
    e: "The 61st Constitutional Amendment Act, 1988, lowered the voting age to 18."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "Which layer of the atmosphere contains most weather phenomena?",
    o: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
    a: 1,
    e: "Most weather occurs in the troposphere."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "If the speed of a body is doubled, its kinetic energy becomes:",
    o: ["Half", "Double", "Four times", "Eight times"],
    a: 2,
    e: "Kinetic energy is proportional to the square of velocity, so doubling speed makes it four times larger."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "Choose the correct sentence:",
    o: [
      "Neither of the boys are present.",
      "Neither of the boys is present.",
      "Neither boys is present.",
      "Neither boys are present."
    ],
    a: 1,
    e: "'Neither' is singular and takes the singular verb 'is' in standard usage."
  },


  /* =========================
     CDS - HARD
  ========================= */

  {
    exam: "CDS",
    level: "Hard",
    q: "Which Act introduced dyarchy in the provinces of British India?",
    o: [
      "Government of India Act 1909",
      "Government of India Act 1919",
      "Government of India Act 1935",
      "Indian Councils Act 1892"
    ],
    a: 1,
    e: "The Government of India Act 1919 introduced dyarchy in the provinces."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "The Doctrine of Lapse is most closely associated with:",
    o: ["Lord Ripon", "Lord Curzon", "Lord Dalhousie", "Lord Canning"],
    a: 2,
    e: "Lord Dalhousie extensively applied the Doctrine of Lapse."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Which Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha?",
    o: [
      "Third Schedule",
      "Fourth Schedule",
      "Fifth Schedule",
      "Seventh Schedule"
    ],
    a: 1,
    e: "The Fourth Schedule deals with allocation of seats in the Council of States (Rajya Sabha)."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "In economics, a situation where general prices continuously fall is called:",
    o: ["Inflation", "Stagflation", "Deflation", "Reflation"],
    a: 2,
    e: "Deflation refers to a sustained decline in the general price level."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Which writ is issued to produce a person who has been unlawfully detained?",
    o: ["Mandamus", "Certiorari", "Habeas Corpus", "Quo Warranto"],
    a: 2,
    e: "Habeas Corpus is used to challenge unlawful detention."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "If the radius of a sphere is doubled, its volume becomes:",
    o: ["2 times", "4 times", "6 times", "8 times"],
    a: 3,
    e: "Volume of a sphere is proportional to r³, so doubling the radius gives 8 times the volume."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Which part of the brain is primarily responsible for maintaining posture and balance?",
    o: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    a: 1,
    e: "The cerebellum plays a major role in coordination, posture and balance."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Which of the following pairs is incorrectly matched?",
    o: [
      "Narmada — Rift valley river",
      "Godavari — Dakshin Ganga",
      "Mahanadi — Odisha",
      "Luni — Arabian Sea"
    ],
    a: 3,
    e: "The Luni does not reach the Arabian Sea; it drains into the Rann of Kutch."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "A man walks 10 km north, then 10 km east. What is his displacement from the starting point?",
    o: ["10 km", "20 km", "10√2 km", "5√2 km"],
    a: 2,
    e: "The two perpendicular movements form a right triangle, giving displacement 10√2 km."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Choose the grammatically correct sentence:",
    o: [
      "No sooner he arrived than it started raining.",
      "No sooner had he arrived than it started raining.",
      "No sooner did he arrived than it started raining.",
      "No sooner he had arrived when it started raining."
    ],
    a: 1,
    e: "The standard construction is 'No sooner had ... than ...'."
  },


  /* =========================
     ADDITIONAL CDS
  ========================= */

  {
    exam: "CDS",
    level: "Easy",
    q: "Which article of the Constitution deals with equality before law?",
    o: ["Article 14", "Article 19", "Article 21", "Article 32"],
    a: 0,
    e: "Article 14 guarantees equality before law and equal protection of laws."
  },

  {
    exam: "CDS",
    level: "Medium",
    q: "The Battle of Plassey was fought in which year?",
    o: ["1757", "1761", "1857", "1773"],
    a: 0,
    e: "The Battle of Plassey took place in 1757."
  },

  {
    exam: "CDS",
    level: "Hard",
    q: "Which type of sentence contains two independent clauses joined by a coordinating conjunction?",
    o: ["Simple", "Compound", "Complex", "Interrogative"],
    a: 1,
    e: "A compound sentence has two independent clauses joined by a coordinating conjunction or suitable punctuation."
  },


  /* =========================
     NDA
  ========================= */

  {
    exam: "NDA",
    level: "Easy",
    q: "What is the SI unit of force?",
    o: ["Joule", "Newton", "Watt", "Pascal"],
    a: 1,
    e: "Force is measured in newtons (N)."
  },

  {
    exam: "NDA",
    level: "Medium",
    q: "If a body moves with constant velocity, its acceleration is:",
    o: ["Zero", "Constant non-zero", "Increasing", "Decreasing"],
    a: 0,
    e: "Constant velocity means no change in velocity, so acceleration is zero."
  },

  {
    exam: "NDA",
    level: "Hard",
    q: "For a projectile launched and landing at the same level, maximum range occurs at what angle?",
    o: ["30°", "45°", "60°", "90°"],
    a: 1,
    e: "Ignoring air resistance, projectile range is maximum at 45°."
  },


  /* =========================
     UPSC
  ========================= */

  {
    exam: "UPSC",
    level: "Easy",
    q: "Who is the constitutional head of the Union executive in India?",
    o: ["Prime Minister", "President", "Chief Justice", "Speaker"],
    a: 1,
    e: "The President is the constitutional head of the Union executive."
  },

  {
    exam: "UPSC",
    level: "Medium",
    q: "Which institution is the final interpreter of the Constitution?",
    o: ["Parliament", "Supreme Court", "Election Commission", "CAG"],
    a: 1,
    e: "The Supreme Court has the final authority to interpret the Constitution."
  },

  {
    exam: "UPSC",
    level: "Hard",
    q: "The Basic Structure Doctrine is associated with which landmark case?",
    o: [
      "Kesavananda Bharati",
      "Maneka Gandhi",
      "Golaknath",
      "Minerva Mills only"
    ],
    a: 0,
    e: "The Basic Structure Doctrine was established in Kesavananda Bharati v. State of Kerala (1973)."
  },


  /* =========================
     SSC
  ========================= */

  {
    exam: "SSC",
    level: "Easy",
    q: "What is 15% of 200?",
    o: ["15", "20", "30", "40"],
    a: 2,
    e: "15/100 × 200 = 30."
  },

  {
    exam: "SSC",
    level: "Medium",
    q: "Choose the correctly spelt word.",
    o: ["Accomodate", "Acommodate", "Accommodate", "Accomadate"],
    a: 2,
    e: "The correct spelling is Accommodate."
  },

  {
    exam: "SSC",
    level: "Hard",
    q: "If the average of five consecutive integers is 24, what is the largest integer?",
    o: ["24", "25", "26", "27"],
    a: 2,
    e: "The middle integer is 24, so the sequence is 22, 23, 24, 25, 26."
  },


  /* =========================
     RAILWAY
  ========================= */

  {
    exam: "RAILWAY",
    level: "Easy",
    q: "Which planet is known as the Red Planet?",
    o: ["Venus", "Mars", "Jupiter", "Mercury"],
    a: 1,
    e: "Mars appears reddish because of iron-rich minerals on its surface."
  },

  {
    exam: "RAILWAY",
    level: "Medium",
    q: "A train covers 120 km in 2 hours. Its average speed is:",
    o: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    a: 2,
    e: "Speed = distance/time = 120/2 = 60 km/h."
  },

  {
    exam: "RAILWAY",
    level: "Hard",
    q: "If the ratio of two numbers is 3:5 and their sum is 64, the larger number is:",
    o: ["24", "32", "40", "48"],
    a: 2,
    e: "8 parts = 64, so one part = 8 and the larger number = 5×8 = 40."
  },


  /* =========================
     NEET
  ========================= */

  {
    exam: "NEET",
    level: "Easy",
    q: "The basic unit of life is the:",
    o: ["Tissue", "Organ", "Cell", "Atom"],
    a: 2,
    e: "The cell is the basic structural and functional unit of life."
  },

  {
    exam: "NEET",
    level: "Medium",
    q: "Which molecule carries genetic information in most organisms?",
    o: ["ATP", "DNA", "Glucose", "Lipid"],
    a: 1,
    e: "DNA stores hereditary genetic information in most organisms."
  },

  {
    exam: "NEET",
    level: "Hard",
    q: "Which phase of the cell cycle includes DNA replication?",
    o: ["G1", "S", "G2", "M"],
    a: 1,
    e: "DNA replication occurs during the S (synthesis) phase."
  },


  /* =========================
     JEE MAIN
  ========================= */

  {
    exam: "JEE",
    level: "Easy",
    q: "The derivative of x² with respect to x is:",
    o: ["x", "2x", "x²", "2"],
    a: 1,
    e: "d(x²)/dx = 2x."
  },

  {
    exam: "JEE",
    level: "Medium",
    q: "If a vector has magnitude 5 and is doubled, its new magnitude is:",
    o: ["5", "7", "10", "25"],
    a: 2,
    e: "Multiplying a vector by 2 doubles its magnitude."
  },

  {
    exam: "JEE",
    level: "Hard",
    q: "For a quadratic ax²+bx+c=0 to have equal real roots, its discriminant must be:",
    o: [">0", "<0", "=0", "=1"],
    a: 2,
    e: "Equal real roots occur when b²−4ac = 0."
  },


  /* =========================
     JEE ADVANCED
  ========================= */

  {
    exam: "JEE_ADV",
    level: "Easy",
    q: "Which particle has a negative electric charge?",
    o: ["Proton", "Electron", "Neutron", "Photon"],
    a: 1,
    e: "The electron carries negative charge."
  },

  {
    exam: "JEE_ADV",
    level: "Medium",
    q: "The dot product of two perpendicular vectors is:",
    o: ["1", "-1", "0", "Their magnitudes multiplied"],
    a: 2,
    e: "A·B = AB cos 90° = 0."
  },

  {
    exam: "JEE_ADV",
    level: "Hard",
    q: "For an ideal gas undergoing an isothermal process, which quantity remains constant?",
    o: ["Pressure", "Temperature", "Volume", "Internal energy only"],
    a: 1,
    e: "An isothermal process occurs at constant temperature."
  }

];


/* =========================================================
   APP STATE
========================================================= */

let selectedExam = null;
let selectedLevel = null;

let quiz = [];
let idx = 0;
let score = 0;
let chosen = null;

let timerId = null;
let timeLeft = 60;

let currentQuizType = "exam";


/* -------------------------
   SAVED STATE
------------------------- */

const defaultState = {
  attempts: 0,
  correct: 0,
  streak: 0,
  history: [],
  premium: false
};

let state;

try {
  state = JSON.parse(
    localStorage.getItem("studyEasyState")
  ) || defaultState;
} catch (error) {
  state = defaultState;
}


/* -------------------------
   SAVE DATA
------------------------- */

function save() {
  localStorage.setItem(
    "studyEasyState",
    JSON.stringify(state)
  );
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function show(id) {

  const screen = document.getElementById(id);

  if (!screen) {
    console.error("Screen not found:", id);
    return;
  }

  document
    .querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));

  screen.classList.add("active");

  if (id === "progress") {
    renderProgress();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* -------------------------
   ALL DATA-GO BUTTONS
------------------------- */

document
  .querySelectorAll("[data-go]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const destination = button.dataset.go;

      if (destination === "exams") {
        show("exams");
      } else {
        show(destination);
      }

    });

  });


/* -------------------------
   PREMIUM HEADER BUTTON
------------------------- */

const premiumBtn = document.getElementById("premiumBtn");

if (premiumBtn) {
  premiumBtn.addEventListener("click", () => {
    show("premium");
  });
}


/* =========================================================
   EXAM LIST
========================================================= */

const examList = document.getElementById("examList");

if (examList) {

  examList.innerHTML = exams
    .map(exam => `
      <button
        class="exam"
        data-exam="${exam.id}"
        type="button"
      >
        <b>${exam.name}</b>
        <span>${exam.desc} →</span>
      </button>
    `)
    .join("");

}


/* -------------------------
   EXAM BUTTON CLICK
------------------------- */

document
  .querySelectorAll(".exam")
  .forEach(button => {

    button.addEventListener("click", () => {

      selectedExam = button.dataset.exam;

      const exam = exams.find(
        item => item.id === selectedExam
      );

      const title = document.getElementById("levelTitle");

      if (title && exam) {
        title.textContent =
          `${exam.name} • Difficulty`;
      }

      show("levels");

    });

  });


/* =========================================================
   DIFFICULTY BUTTONS
========================================================= */

document
  .querySelectorAll(".level")
  .forEach(button => {

    button.addEventListener("click", () => {

      selectedLevel = button.dataset.level;

      startQuiz(
        selectedExam,
        selectedLevel,
        10
      );

    });

  });


/* =========================================================
   START EXAM QUIZ
========================================================= */

function startQuiz(exam, level, count) {

  currentQuizType = "exam";

  let pool = questions.filter(
    question =>
      question.exam === exam &&
      question.level === level
  );

  /*
    If that exact exam + level doesn't have enough
    questions, use questions from that exam.
  */

  if (pool.length < count) {

    const examPool = questions.filter(
      question => question.exam === exam
    );

    if (examPool.length > pool.length) {
      pool = examPool;
    }

  }

  /*
    If still not enough questions,
    use questions from the selected difficulty.
  */

  if (pool.length < count) {

    const levelPool = questions.filter(
      question => question.level === level
    );

    if (levelPool.length > pool.length) {
      pool = levelPool;
    }

  }

  quiz = shuffle(pool).slice(
    0,
    Math.min(count, pool.length)
  );

  if (quiz.length === 0) {

    alert(
      "More questions will be added for this exam soon."
    );

    return;
  }

  idx = 0;
  score = 0;
  chosen = null;
  timeLeft = 60;

  show("quiz");

  renderQuestion();

  startTimer();
}


/* =========================================================
   DAILY 10
========================================================= */

function startDaily() {

  currentQuizType = "daily";

  quiz = shuffle(questions).slice(
    0,
    Math.min(10, questions.length)
  );

  idx = 0;
  score = 0;
  chosen = null;
  timeLeft = 90;

  show("quiz");

  renderQuestion();

  startTimer();
}


/* =========================================================
   MOCK TEST
========================================================= */

function startMock() {

  currentQuizType = "mock";

  quiz = shuffle(questions).slice(
    0,
    Math.min(15, questions.length)
  );

  idx = 0;
  score = 0;
  chosen = null;
  timeLeft = 120;

  show("quiz");

  renderQuestion();

  startTimer();
}


/* -------------------------
   DAILY BUTTON
------------------------- */

const dailyBtn = document.getElementById("dailyBtn");

if (dailyBtn) {
  dailyBtn.addEventListener("click", startDaily);
}


/* -------------------------
   MOCK BUTTON
------------------------- */

const mockBtn = document.getElementById("mockBtn");

if (mockBtn) {
  mockBtn.addEventListener("click", startMock);
}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

  const q = quiz[idx];

  if (!q) {
    finish();
    return;
  }

  chosen = null;

  const meta = document.getElementById("quizMeta");

  if (meta) {

    let typeText = "";

    if (currentQuizType === "daily") {
      typeText = "Daily 10";
    } else if (currentQuizType === "mock") {
      typeText = "Mock Test";
    } else {
      typeText = q.exam;
    }

    meta.textContent =
      `${typeText} • ${idx + 1}/${quiz.length} • ${q.level}`;
  }


  /* Question */

  const questionElement =
    document.getElementById("question");

  if (questionElement) {
    questionElement.textContent = q.q;
  }


  /* Progress bar */

  const quizBar =
    document.getElementById("quizBar");

  if (quizBar) {

    const percentage =
      ((idx) / quiz.length) * 100;

    quizBar.style.width =
      `${percentage}%`;
  }


  /* Options */

  const box =
    document.getElementById("options");

  if (!box) return;

  box.innerHTML = "";


  q.o.forEach((option, i) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className = "option";

    button.textContent =
      `${String.fromCharCode(65 + i)}. ${option}`;

    button.addEventListener(
      "click",
      () => selectOption(i, button)
    );

    box.appendChild(button);

  });


  /* Disable Next */

  const nextBtn =
    document.getElementById("nextBtn");

  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent =
      idx === quiz.length - 1
        ? "Finish Test"
        : "Next";
  }

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectOption(i, button) {

  if (chosen !== null) {
    return;
  }

  chosen = i;

  const currentQuestion = quiz[idx];

  button.classList.add("selected");


  /*
    Show correct answer
  */

  document
    .querySelectorAll(".option")
    .forEach((optionButton, index) => {

      if (index === currentQuestion.a) {
        optionButton.classList.add("correct");
      }

    });


  /*
    Show wrong answer
  */

  if (i !== currentQuestion.a) {
    button.classList.add("wrong");
  }


  /*
    Enable Next
  */

  const nextBtn =
    document.getElementById("nextBtn");

  if (nextBtn) {
    nextBtn.disabled = false;
  }

}


/* =========================================================
   NEXT BUTTON
========================================================= */

const nextBtn =
  document.getElementById("nextBtn");

if (nextBtn) {

  nextBtn.addEventListener("click", () => {

    /*
      Don't continue if no answer selected.
    */

    if (chosen === null) {
      return;
    }


    /*
      Calculate score.
    */

    if (chosen === quiz[idx].a) {
      score++;
    }


    /*
      Next question.
    */

    if (idx < quiz.length - 1) {

      idx++;

      renderQuestion();

    } else {

      finish();

    }

  });

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finish() {

  clearInterval(timerId);

  /*
    Update statistics
  */

  state.attempts += quiz.length;

  state.correct += score;

  state.streak += 1;


  /*
    Save history
  */

  state.history.unshift({

    date: new Date().toLocaleDateString(),

    score: score,

    total: quiz.length,

    type: currentQuizType

  });


  /*
    Keep only latest 8 results
  */

  state.history =
    state.history.slice(0, 8);


  save();


  /*
    Display result
  */

  const scoreElement =
    document.getElementById("score");

  if (scoreElement) {

    scoreElement.textContent =
      `${score}/${quiz.length}`;

  }


  const resultText =
    document.getElementById("resultText");

  if (resultText) {

    const accuracy =
      Math.round(
        (score / quiz.length) * 100
      );

    resultText.textContent =
      `Accuracy: ${accuracy}%. Review your mistakes and practice again.`;

  }


  const resultTitle =
    document.getElementById("resultTitle");

  if (resultTitle) {

    if (score === quiz.length) {

      resultTitle.textContent =
        "Perfect Score! 🎉";

    } else if (
      score >= quiz.length * 0.7
    ) {

      resultTitle.textContent =
        "Great Job! 🔥";

    } else if (
      score >= quiz.length * 0.5
    ) {

      resultTitle.textContent =
        "Good Attempt! 👍";

    } else {

      resultTitle.textContent =
        "Keep Practising! 💪";

    }

  }


  show("result");

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

  clearInterval(timerId);

  updateTimerDisplay();


  timerId = setInterval(() => {

    timeLeft--;

    updateTimerDisplay();


    if (timeLeft <= 0) {

      clearInterval(timerId);

      /*
        Finish automatically when time reaches zero.
      */

      finish();

    }

  }, 1000);

}


/* -------------------------
   TIMER DISPLAY
------------------------- */

function updateTimerDisplay() {

  const timer =
    document.getElementById("timer");

  if (!timer) return;

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;


  if (minutes > 0) {

    timer.textContent =
      `⏱ ${minutes}:${String(seconds).padStart(2, "0")}`;

  } else {

    timer.textContent =
      `⏱ ${seconds}s`;

  }

}


/* =========================================================
   SHUFFLE QUESTIONS
========================================================= */

function shuffle(array) {

  const copy = [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];

  }

  return copy;

}


/* =========================================================
   PROGRESS PAGE
========================================================= */

function renderProgress() {

  const attempts =
    document.getElementById("attempts");

  const correct =
    document.getElementById("correct");

  const accuracy =
    document.getElementById("accuracy");

  const streak =
    document.getElementById("streak");

  const streakBar =
    document.getElementById("streakBar");

  const history =
    document.getElementById("history");


  /*
    Attempts
  */

  if (attempts) {
    attempts.textContent =
      state.attempts;
  }


  /*
    Correct answers
  */

  if (correct) {
    correct.textContent =
      state.correct;
  }


  /*
    Accuracy
  */

  if (accuracy) {

    const percentage =
      state.attempts > 0
        ? Math.round(
            (state.correct / state.attempts) * 100
          )
        : 0;

    accuracy.textContent =
      `${percentage}%`;

  }


  /*
    Streak
  */

  if (streak) {

    streak.textContent =
      `${state.streak} days`;

  }


  /*
    Streak progress bar
  */

  if (streakBar) {

    streakBar.style.width =
      `${Math.min(state.streak * 10, 100)}%`;

  }


  /*
    History
  */

  if (history) {

    if (state.history.length === 0) {

      history.innerHTML =
        `<p class="muted">No attempts yet.</p>`;

    } else {

      history.innerHTML =
        state.history
          .map(item => {

            let type = "";

            if (item.type === "daily") {
              type = "Daily 10";
            } else if (item.type === "mock") {
              type = "Mock Test";
            } else {
              type = "Practice";
            }

            return `
              <p>
                <b>${type}</b><br>
                ${item.date} — ${item.score}/${item.total}
              </p>
            `;

          })
          .join("");

    }

  }

}


/* =========================================================
   PREMIUM
========================================================= */

const buyBtn =
  document.getElementById("buyBtn");

if (buyBtn) {

  buyBtn.addEventListener("click", () => {

    alert(
      "Premium purchase is currently in demo mode. Google Play Billing must be connected before accepting real payments."
    );

  });

}


/* =========================================================
   INITIAL LOAD
========================================================= */

renderProgress();

console.log(
  "Study Easy loaded successfully."
);

console.log(
  `Question bank: ${questions.length} questions`
);