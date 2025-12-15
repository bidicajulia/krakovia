document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            text: "Unde mergem de Crăciun?",
            answers: ["Acasă", "La munte", "Într-un oraș european", "Surpriză"],
            correct: 3 
        },
        {
            text: "Câte zile de relaxare credeți că sunt suficiente?",
            answers: ["1", "2", "3", "Câte sunt"],
            correct: 3 
        },
        {
            text: "Ce nu trebuie să lipsească din bagaj?",
            answers: ["Bună dispoziție", "Poze", "Plimbări", "Toate"],
            correct: 3 
        },
        {
            text: "Sunteți gata de surpriză?",
            answers: ["DA", "SIGUR DA"],
            correct: 1 
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
        if (index === questions[current].correct) {
            current++;

            if (current < questions.length) {
                showQuestion();
            } else {
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
            alert("Mai încearcă ! 😉");
        }
    }
});
