document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            text: "Care e cel mai greu lucru de Craciun?",
            answers: ["sa nu mananci toata ciocolata", "sa pastrezi cadoul secret", "sa te hotarasti la ce film sa te uiti ", "sa cumperi cadouri"],
            correct: 1
        },
        {
            text: "Care este cea mai importanta regula a cadourilor de Craciun ?",
            answers: ["sa fie scumpe", "sa fie practice", "sa fie multe", "sa fie ceva la care nu te astepti"],
            correct: 3 
        },
        {
            text: "Care este cea mai apropiata mancare traditionala de sarmale ?",
            answers: ["dolma", "gołąbki ", "holubtsi", "pierogi"],
            correct: "all"
        },
        {
            text: "Care este cea mai apropiata moneda ca valoare de LEU? ",
            answers: ["MDL (leu moldovenesc)", "BGN (leva)", "PLN (zlot polonez)", "HUF (forint maghiar)"],
            correct: 2
        },
        {
            text: "Sunteti gata de surpriza?",
            answers: ["DAAAA", "stiu deja ce este" , "nu"],
            correct: 0
        }
    ];

    let current = 0;

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const quiz = document.querySelector(".quiz-container");
    // const questionText este acum definit mai jos, dar verificam textul si imaginea
    const questionText = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");
    const resultBox = document.getElementById("result-box");
    
    // Logica de dispariție a ecranului principal și afișarea quiz-ului
    startBtn.addEventListener('click', function () {
        // Aceasta va ascunde ecranul principal "Surpriză de Crăciun"
        intro.classList.add("hidden"); 
        
        // Aceasta va afișa Micul Quiz
        quiz.classList.remove("hidden");
        
        showQuestion();
    });

    function showQuestion() {
        const q = questions[current];
        questionText.innerText = q.text; // Aici punem textul intrebarii
        answersDiv.innerHTML = "";

        q.answers.forEach((answer, index) => {
            const btn = document.createElement("button");
            btn.innerText = answer;
            btn.onclick = () => checkAnswer(index);
            answersDiv.appendChild(btn);
        });
    }

    function checkAnswer(index) {
    const currentQuestion = questions[current];

    // Verificăm dacă răspunsul este cel setat SAU dacă întrebarea acceptă orice răspuns ("all")
    if (index === currentQuestion.correct || currentQuestion.correct === "all") {
        current++;

        if (current < questions.length) {
            showQuestion();
        } else {
            // Codul pentru final (ascundere quiz, afișare rezultat, confetti)
            quiz.classList.add("hidden");
            resultBox.classList.remove("hidden");

            if (typeof confetti === "function") {
                confetti({
                    particleCount: 200,
                    spread: 150,
                    origin: { y: 0.6 }
                });
            }
        }
    } else {
        alert("Mai incearca ! 😉");
    }
}
});
