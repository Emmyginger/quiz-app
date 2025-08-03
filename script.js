const app = document.getElementById('app');
const TOTAL_QUESTIONS_PER_SECTION = 20;
const SECTIONS = ['HTML', 'CSS', 'JavaScript'];
const TIMER_SEC = 5 * 60;

let quizState = {
    currentSection: 0,
    currentQuestionIndex: 0,
    answered: [],
    correct: [],
    attempted: [],
    timer: TIMER_SEC,
    interval: null,
    sectionQuestions: []
};

function renderRules() {
    app.innerHTML = `
    <h2>Quiz Rules</h2>
    <ol>
        <li>Total Questions: <b>60</b> (20 HTML, 20 CSS, 20 JavaScript)</li>
        <li>Each section (HTML, CSS, JavaScript) has <b>5 minutes</b> timer, after which you move to next section automatically.</li>
        <li>Answer each question by selecting the option. Immediate feedback provided!</li>
        <li>Green Pass <span class="icon-pass">&#10003;</span> for correct, Red Fail <span class="icon-fail">&#10007;</span> for incorrect (with the correct answer displayed).</li>
        <li>Passing requires a score of at least <b>65%</b>.</li>
    </ol>
    <button class="btn" onclick="startQuiz()">Start Quiz</button>
    <button class="btn" onclick="exitQuiz()">Exit</button>
    `;
}
function exitQuiz() {
    app.innerHTML = `<h2>Quiz App</h2><p>Thank you! You have exited the quiz.</p> <br/> <button class="btn" onclick="startQuiz()">Start Quiz</button>`;
}
function startQuiz() {
    quizState.currentSection = 0;
    quizState.currentQuestionIndex = 0;
    quizState.answered = [];
    quizState.correct = [];
    quizState.attempted = [];
    quizState.timer = TIMER_SEC;
    quizState.sectionQuestions = [];
    // Partition questions into their sections
    for (let sec = 0; sec < SECTIONS.length; sec++) {
        quizState.sectionQuestions[sec] = QUIZ_QUESTIONS.filter(q=>q.section === SECTIONS[sec]).slice(0,TOTAL_QUESTIONS_PER_SECTION);
    }
    renderQuestionSection();
}

function renderQuestionSection() {
    const sec = quizState.currentSection;
    quizState.timer = TIMER_SEC;
    quizState.currentQuestionIndex = 0;
    // Shuffle current section's questions
    let questions = quizState.sectionQuestions[sec];
    if (!questions) return renderResult();
    questions = questions.slice();
    for(let i=questions.length-1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        [questions[i],questions[j]] = [questions[j],questions[i]];
    }
    quizState.sectionQuestions[sec] = questions;
    renderTimer();
    renderQuestion();
    quizState.interval = setInterval(()=>{
        quizState.timer--;
        renderTimer();
        if(quizState.timer<=0) {
            clearInterval(quizState.interval);
            gotoNextSection();
        }
    }, 1000);
}

function renderTimer() {
    let min = String(Math.floor(quizState.timer / 60)).padStart(2,0);
    let sec = String(quizState.timer % 60).padStart(2,0);
    let timerDiv = document.getElementById('timer');
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        app.insertBefore(timerDiv, app.firstChild);
    }
    timerDiv.textContent = `Time Left: ${min}:${sec}`;
}

function renderQuestion() {
    const sec = quizState.currentSection;
    const qIdx = quizState.currentQuestionIndex;
    const questions = quizState.sectionQuestions[sec];
    const q = questions[qIdx];
    app.innerHTML = `
        <div id="timer"></div>
        <h3>Section: ${SECTIONS[sec]}</h3>
        <p>Question ${qIdx+1} of ${TOTAL_QUESTIONS_PER_SECTION}</p>
        <h4>${q.question}</h4>
        <div id="options"></div>
        <div id="feedback"></div>
        <button class="btn" id="next" style="display:none;margin-top:14px;">Next</button>
    `;
    renderTimer();
    let optionsDiv = document.getElementById('options');
    q.options.forEach((opt,i) => {
        let div = document.createElement('div');
        div.className = 'quiz-option';
        div.name = 'opt';
        div.textContent = opt;
        div.onclick = ()=>selectOption(i);
        optionsDiv.appendChild(div);
    });
}

function selectOption(idx) {
    const sec = quizState.currentSection;
    const qIdx = quizState.currentQuestionIndex;
    const questions = quizState.sectionQuestions[sec];
    const q = questions[qIdx];

    // Prevent multi answers
    if (quizState.answered[sec+'-'+qIdx]) return;

    quizState.answered[sec+'-'+qIdx] = true;
    quizState.attempted.push(1);

    let allOpts = document.querySelectorAll('.quiz-option');
    allOpts.forEach((div, i) => {
        div.onclick = null;
        if (i === q.answer) div.classList.add('correct');
        if (i === idx && idx !== q.answer) div.classList.add('incorrect');
    });
    let feedback = document.getElementById('feedback');
    let isCorrect = (idx === q.answer);
    if (isCorrect) {
        quizState.correct.push(1);
        feedback.innerHTML = `<span class="icon-pass">&#10003;</span> <span style="color:#24b224;">Correct!</span>`;
    } else {
        feedback.innerHTML = `<span class="icon-fail">&#10007;</span> <span style="color:#e03f3f;">Incorrect!</span> <br> Correct: <b>${q.options[q.answer]}</b>`;
    }

    document.getElementById('next').style.display = 'inline-block';
    document.getElementById('next').onclick = nextQuestion;
}

function nextQuestion() {
    const sec = quizState.currentSection;
    if (quizState.currentQuestionIndex+1 < TOTAL_QUESTIONS_PER_SECTION) {
        quizState.currentQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(quizState.interval);
        gotoNextSection();
    }
}

function gotoNextSection() {
    if (quizState.currentSection+1 < SECTIONS.length) {
        quizState.currentSection++;
        renderQuestionSection();
    } else {
        renderResult();
    }
}

function renderResult() {
    clearInterval(quizState.interval);
    let score = (quizState.correct.length / (SECTIONS.length*TOTAL_QUESTIONS_PER_SECTION)) * 100;
    let passed = score>=65;
    app.innerHTML = `
        <h2>Quiz Results</h2>
        <div class="result-msg" style="color:${passed?'#22ae33':'#ec4444'};">
            ${passed?'Congratulations! You passed.':'Sorry! You failed.'}
        </div>
        <p>
          <b>Score:</b> ${score.toFixed(2)}%<br>
          <b>Correct:</b> ${quizState.correct.length} / ${SECTIONS.length*TOTAL_QUESTIONS_PER_SECTION}<br>
          <b>Attempted:</b> ${quizState.attempted.length} / ${SECTIONS.length*TOTAL_QUESTIONS_PER_SECTION}
        </p>
        <button class="btn" onclick="startQuiz()">Retry Quiz</button> 
        <button class="btn" onclick="renderRules()">End Quiz</button> 
    `;
    if (passed) setTimeout(()=>window.confetti.fire(),400);
}

renderRules();
window.exitQuiz = exitQuiz; // For button onclick
window.renderRules = renderRules; // For End Quiz button
window.startQuiz = startQuiz; // For Start/Retry buttons