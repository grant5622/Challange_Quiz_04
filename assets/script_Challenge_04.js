//Grant Williamson

function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    T.style.display = "block";  // <-- Set it to block
}

const startingTime = 20
let time = startingTime * 60

const count = document.getElementById("countdownTimer")
setInterval(updateTimer, 1000)
function updateTimer() {
    const minutes = Math.floor(time/60)
    let  seconds = time % 60

    seconds = seconds < 10 ? '0' +  seconds : seconds
    count.innerHTML = '${minutes}:${seconds}'
    time--
}

var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}


setTime();


const quizData = [
    {
        question: "What process do we use to find errors in code?",
        a: "Examine",
        b: "Debug",
        c: "System Check",
        d: "Scan",
        answer: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central system Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Category style system",
        answer: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "How the machine Language",
        c: "Hypeexist Machine Language",
        d: "How text machine language",
        answer: "a",
    },
    {
        question: "What is the most common code langauge?",
        a: "React",
        b: "Python",
        c: "Javascript",
        d: "none of the above",
        answer: "c",
    },

    {
        question: "What does cd do in termianl?",
        a: "Save file",
        b: "Move up two levels",
        c: "Root of the drive",
        d: "Home Directory",
        answer: "d",
    },

    {
        question: "What operating system does Apple use?",
        a: "MacOS",
        b: "Windows",
        c: "Linux",
        d: "none of the above",
        answer: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

