const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Cascade sheets style",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "Coded Style Sheet",
        correct: "c",
    },
    {
        question: " Which of the following is the correct syntax to add the external stylesheet in CSS ?",
        a: "<style src = quiz.css>",
        b: '<style src = "quiz.css">',
        c: "<stylesheet> quiz.css </stylesheet>",
        d: '<link rel="stylesheet" type="quiz/css" href="quiz.css">',
        correct: "d",
    },
    {
        question: "Which HTML attribute is used to define inline styles ?",
        a: 'styles',
        b: 'style',
        c: 'font',
        d: "class",
        correct: "b",
    },
    {
        question: " How do you add a comment in a CSS file ?",
        a: '/* this is a comment */',
        b: '// this is a comment //',
        c: '// this is a comment',
        d: "<!-- this is a comment-->",
        correct: "a",
    },
    {
        question: " Which of the below CSS properties is used to change the background color of CSS ?",
        a: 'bg color',
        b: 'color-background',
        c: 'background-color',
        d: 'color',
        correct: "c",
    },
    
    {
        question: " Which of the below CSS class is used to change the text color of CSS ?",
        a: "background-color",
        b: "color",
        c: "color-background",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which element is used to represent the transparency of an element in CSS ?",
        a: 'Hover',
        b: 'Opacity',
        c: 'Transparent',
        d: "Overlay",
        correct: "b",
    },
    {
        question: "What is the correct CSS syntax for making all the <span> elements bold ?",
        a: 'span {text-size: bold}',
        b: 'span {font-weight: bold}',
        c: "<span style='font-size: bold'>",
        d: "<span style='text-size: bold'>",
        correct: "b",
    },
    {
        question: "The # symbol specifies that the selector is ?",
        a: 'class',
        b: 'tag',
        c: 'first',
        d: "id",
        correct: "d",
    },
       
    {
        question: "What are the main differences between ID and Class ?",
        a: "Classes are for use with spans and ID's are for use with DIVs",
        b: "ID's are supposed to be only used once per page but Classes can be used multiple times per page, and one element can have more than one Class but should have only one ID",
        c: "Classes should be used only once per page, but ID's can be used as many times as you like on one page",
        d: "ID's are better than Classes",
        correct: "b",
    },
    {
        question: "Which snippet of CSS is commonly used to center a website horizontally ?",
        a: 'site-align: center;',
        b: 'margin: center;',
        c: 'margin: auto 0;',
        d: "margin: 0 auto;",
        correct: "d",
    },
    {
        question: "How do you make a list not display bullet points ?",
        a: "list-style-type: no-bullet",
        b: "list: none",
        c: "bulletpoints: none",
        d: "list-style-type: none",
        correct: "d",
    },
    {
        question: "What is the correct CSS syntax to change the font name ?",
        a: 'font-name:',
        b: 'font:',
        c: 'font-family:',
        d: "fontname:",
        correct: "c",
    },
    {
        question: "How do we set the default width of the font in CSS ?",
        a: 'font-stretch',
        b: 'font-weight',
        c: 'text-transform',
        d: "font-variant",
        correct: "a",
    },
    {
        question: "What is the correct CSS syntax for making all the <p> tags font size 14px ?",
        a: 'p {14px}',
        b: 'p {font-size: 14px;}',
        c: 'p {text-size: 14px;}',
        d: 'p {font: 14px;}',
        correct: "b",
    },
    
    
    {
        question: "How do you insert padding so that it is: 10 pixels at the top, 15 pixels at the bottom, 5 pixels at the right, 10 pixels to the left ?",
        a: 'padding: 10px 15px 5px 10px;',
        b: 'padding: 15px 5px 10px 10px;',
        c: 'padding: 10px 5px 10px 15px;',
        d: "padding: 10px 5px 15px 10px;",
        correct: "d",
    },
    {
        question: "How do you display hyperlinks without an underline ?",
        a: 'a {decoration: no underline}',
        b: 'a {text-decoration: none}',
        c: 'a {hyperlink: no underline}',
        d: "a {text-decoration: no underline}",
        correct: "b",
    },
    {
        question: " How can you created rounded corners using CSS ?",
        a: 'border[round]: 30px; ',
        b: 'corner-effect: round; ',
        c: 'border-radius: 30px; ',
        d: "alpha-effect: round-corner; ",
        correct: "c",
    },
    
   
    {
        question: " How do you add shadow to elements in CSS ?",
        a: 'box-shadow: 10px 10px 5px grey; ',
        b: 'shadow-right: 10px shadow-bottom: 10px; ',
        c: 'shadow-color: grey; ',
        d: "alpha-effect[shadow]: 10px 10px 5px grey; ",
        correct: "a",
    },

    {
        question: "What is the default value of the position property ?",
        a: 'fixed',
        b: 'absolute',
        c: 'static',
        d: "relative",
        correct: "c",
    },
    
    




];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const  divider= document.querySelector('.divider')

let currentQuiz = 0
let dividerWidth = 0

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
       dividerWidth+=5;
       divider.style.width=dividerWidth+"%";


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