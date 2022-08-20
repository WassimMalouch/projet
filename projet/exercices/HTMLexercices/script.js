const quizData = [
    {
        question: "What does HTML stand for ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "less-than and greater-than angle brackets surrounding an element creates a ...  ",
        a: 'question',
        b: 'movement',
        c: 'sentence',
        d: "tag",
        correct: "d",
    },
    {
        question: "An element is composed of ... ",
        a: "Opening tag, closing tag",
        b: "Opening tag, content, closing tag",
        c: "Opening tag, content",
        d: "Content, closing tag",
        correct: "b",
    },
    {
        question: "Which describes an element of HTML ?",
        a: "An element in HTML represents a structure and generally consists of a start tag, content, and an end tag.",
        b: "An element is used to mark up the start and end of an HTML element.",
        c: "An element defines a property for an element, consists of an element/value pair, and appears within the attributes start tag.",
        d: "None of these is correct.",
        correct: "a",
    },
    {
        question: "Every HTML document should have what ?",
        a: 'A head section, and within it a title, followed by a body',
        b: 'A title section, and within it a header, followed by a body',
        c: 'A body and header',
        d: "None of these",
        correct: "a",
    },
    {
        question: "What is the tag beginning the section of the Web page that is visible to the viewer/user ?",
        a: '<Title>',
        b: '</Body>',
        c: '<body>',
        d: "</Title>",
        correct: "c",
    },
    {
        question: "Correct the tags! : </html> </head> </title>Houston News<title> <head> </body>Find Out More<body> <html> ",
        a: 'Move the body section to the head section.',
        b: 'Closing tags, such as </html>, should be moved to the end (close) or each section.',
        c: 'Delete the title section.',
        d: "This HTML page is correct",
        correct: "b",
    },
    {
        question: "The document type declaration, or <!DOCTYPE html>... ",
        a: 'Is placed at the very beginning of the HTML document.',
        b: 'Informs web browsers which version of HTML is being used.',
        c: 'first and second statement are correct',
        d: "Is none of the above.",
        correct: "c",
    },
    {
        question: "Which statement/s about CSS are true ?",
        a: "CSS goes inside the <style> element.",
        b: "The <style> element should be inside the <head> element.",
        c: "CSS goes inside the <body> element.",
        d: "first and second statement are correct",
        correct: "d",
    },
    {
        question: "How would you add the background color yellow to body element ?",
        a: ' <background-color:yellow> ',
        b: ' <color addition="background-color:yellow;" ',
        c: ' <body style="background-color:yellow;">',
        d: "<yellow=color>",
        correct: "c",
    },
    {
        question: "Which is a hyperlink ?",
        a: '<a href="http://www.messianicjudaism.net">News </a>',
        b: '<body link+"background-image:ur(background.gif)">',
        c: '<u href="http://www.messianicjudaism.net" </u>',
        d: "All are acceptable links.",
        correct: "a",
    },
    {
        question: "How can you create an email link ?",
        a: 'A href="mailto:xxx@yyy"',
        b: 'A href="xxx@yyy"',
        c: 'Mail>xxx@yyy',
        d: 'Mail href="xxx@yyy"',
        correct: "a",
    },
    
    
    {
        question: "Which tag would insert a graphic into a Web page ?",
        a: 'Picture=Glass.jpeg',
        b: 'Img file=Glass.jpeg',
        c: 'P....Glass.jpeg..../p',
        d: "Img src=Glass.jpeg",
        correct: "d",
    },
    {
        question: "What is the tag that begins a list of items ?",
        a: 'Il',
        b: 'Ls',
        c: 'Ol or Ul',
        d: "Ul or ls",
        correct: "c",
    },
    {
        question: "You wish your list to be in a particular order. Which tag should you use ?",
        a: 'Ul',
        b: 'Ls',
        c: 'li',
        d: "Ol",
        correct: "d",
    },
    
   
    {
        question: "Creates horizontal lines ",
        a: '<horz>',
        b: '<hrz>',
        c: '<hr>',
        d: "<hor>",
        correct: "c",
    },
    
    
    
    {
        question: "Which tag begins a new paragraph ?",
        a: '<pg>',
        b: '<pp>',
        c: '<li>',
        d: "<p>",
        correct: "d",
    },
    {
        question: "Choose the correct HTML tag to make text bold ",
        a: 'bold',
        b: 'b',
        c: 'bld',
        d: "bl",
        correct: "b",
    },
    {
        question: "Choose the correct HTML tag to make the text italic ",
        a: 'Italic',
        b: 'It',
        c: 'I',
        d: "li",
        correct: "c",
    },
    {
        question: "Which is the default text size of internet web page text ?",
        a: '<h1>',
        b: '<h3>',
        c: '<h4>',
        d: "<h6>",
        correct: "b",
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