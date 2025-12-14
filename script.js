const questions = [
  {
    text: "Unde mergem de Crăciun?",
    answers: ["Acasă", "La munte", "Într-un oraș european", "Surpriză"],
    correct: 3 // Răspunsul "Surpriză"
  },
  {
    text: "Câte zile de relaxare credeți că sunt suficiente?",
    answers: ["1", "2", "3", "Câte sunt"],
    correct: 3 // Răspunsul "Câte sunt"
  },
  {
    text: "Ce nu trebuie să lipsească din bagaj?",
    answers: ["Bună dispoziție", "Poze", "Plimbări", "Toate"],
    correct: 3 // Răspunsul "Toate"
  },
  {
    text: "Sunteți gata de surpriză?",
    answers: ["DA", "SIGUR DA"],
    correct: 1 // Răspunsul "SIGUR DA"
  }
];

let current = 0;

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const quiz = document.querySelector(".quiz-container");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const resultBox = document.getElementById("result-box");

// 1. GESTIONAREA BUTONULUI DE START (AFIȘAREA QUIZ-ULUI)
startBtn.onclick = function () {
  // Verifică dacă body conține clasa 'intro' sau dacă elementul intro este vizibil
  if (!intro.classList.contains("hidden")) {
    intro.classList.add("hidden");
  }
  
  // Aici facem quiz-ul vizibil
  quiz.classList.remove("hidden");
  showQuestion();
};


function showQuestion() {
  const q = questions[current];
  questionText.innerText = q.text;
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    
    // Asigură-te că funcția de click apelează checkAnswer cu indexul corect
    btn.onclick = () => checkAnswer(index); 
    
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  // Logica de răspuns corect
  if (index === questions[current].correct) {
    current++;

    if (current < questions.length) {
      // Treci la următoarea întrebare
      showQuestion();
    } else {
      // S-a terminat quiz-ul, afișează rezultatul
      quiz.classList.add("hidden");
      resultBox.classList.remove("hidden");

      // Declansează Confetti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 150,
          origin: { y: 0.6 }
        });
      }
    }
  } else {
    // Răspuns incorect
    alert("Mai încearcă, merită! 😉");
  }
}

// Nu mai este nevoie de codul pentru inimioare plutitoare, 
// deoarece am înlocuit cu "zăpada" din CSS.
