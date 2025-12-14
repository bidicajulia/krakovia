document.addEventListener('DOMContentLoaded', (event) => {
    // Definirea întrebărilor
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

    // Aici se face căutarea elementelor DUPĂ ce pagina este încărcată
    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const quiz = document.querySelector(".quiz-container");
    const questionText = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");
    const resultBox = document.getElementById("result-box");

    // 1. GESTIONAREA BUTONULUI DE START (AFIȘAREA QUIZ-ULUI)
    // Folosim addEventListener, care este preferat pentru buton
    startBtn.addEventListener('click', function () {
        intro.classList.add("hidden");
        quiz.classList.remove("hidden");
        showQuestion();
    });

    function showQuestion() {
        const q = questions[current];
        questionText.innerText = q.text;
        answersDiv.innerHTML = "";

        q.answers.forEach((answer, index) => {
            const btn = document.createElement("button");
            btn.innerText = answer;
            btn.onclick = () => checkAnswer(index);
            answersDiv.appendChild(btn);
        });
    }

    function checkAnswer(index) {
        // Logica de răspuns corect
        if (index === questions[current].correct) {
            current++;

            if (current < questions.length) {
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
}); // Închide event listener-ul DOMContentLoaded
