questionArray = [
    {
        'question': "HTML stands for?",
        'options': [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyperlink Text Making Language",
            "None"
        ],
        'answer': "Hyper Text Markup Language"
    },
    {
        'question': "Which tag is used to insert an image?",
        'options': [
            "<div>",
            "<img>",
            "<image>",
            "<pic>"
        ],
        'answer': "<img>"
    },
    {
        'question': "Which CSS property changes text color?",
        'options': [
            "font-size",
            "background",
            "color",
            "text-align"
        ],
        'answer': "color"
    },
    {
        'question': "Which symbol is used for comments in HTML?",
        'options': [
            "// comment",
            "/* comment */",
            "<!-- comment -->",
            "** comment **"
        ],
        'answer': "<!-- comment -->"
    },
    {
        'question': "Which tag creates the largest heading?",
        'options': [
            "<h3>",
            "<h6>",
            "<h1>",
            "<h4>"
        ],
        'answer': "<h1>"
    },
    {
        'question': "Which tag is used to write JavaScript?",
        'options': [
            "<javascript>",
            "<js>",
            "<script>",
            "<code>"
        ],
        'answer': "<script>"
    },
    {
        'question': "Which CSS property sets the background color?",
        'options': [
            "color",
            "bgcolor",
            "background-color",
            "background-text"
        ],
        'answer': "background-color"
    },
    {
        'question': "Which of the following is a JavaScript data type?",
        'options': [
            "Number",
            "Textfile",
            "Folder",
            "Link"
        ],
        'answer': "Number"
    },
    {
        'question': "Which tag is used to make text bold?",
        'options': [
            "<b>",
            "<bold>",
            "<bl>",
            "<stronger>"
        ],
        'answer': "<b>"
    },
    {
        'question': "Which of the following is a CSS file extension?",
        'options': [
            ".html",
            ".css",
            ".js",
            ".txt"
        ],
        'answer': ".css"
    }
];



let instructions = document.getElementById("instructions")
let questionscon = document.getElementById("questionscon");
let result = document.getElementById("result");
let startbtn = document.getElementById("startbtn");
let timerCount = document.getElementsByClassName("timerCount")
let questionName = document.getElementById("question");
let options = document.getElementsByClassName("option");
let nextQues = document.getElementById("nextQues");
let resultShow = document.getElementById("resultShow");
let restartQuiz = document.getElementById("restartQuiz");
let optionSelected = false;
let questionCount = 0;
let mins = 10;
let seconds = 0;
let marks = 0;





questionscon.style.display = "none";
result.style.display = "none";

startbtn.onclick = function () {
    instructions.style.display = "none";
    result.style.display = "none";
    questionscon.style.display = "flex";
    timerCount[0].innerText += `Time Left: 10:00`;

    questionName.innerText = `1. ${questionArray[questionCount].question}`;
    for (let i = 0; i < 4; i++) {
        options[i].innerText = questionArray[questionCount].options[i]
        options[i].onclick = function () {
            if (options[i].innerText == questionArray[questionCount].answer) {
                marks += 2;
                options[i].style.backgroundColor = "green";
                for (let i = 0; i < 4; i++) {
                    options[i].disabled = "ture";
                }
                optionSelected = true;
            } else {
                marks -= 1;
                options[i].style.backgroundColor = "red";
                for (let i = 0; i < 4; i++) {
                    options[i].disabled = "ture";
                }
                optionSelected = true;
            }
            if(optionSelected){
                for(let option of options){
                    if(option.innerText==questionArray[questionCount].answer){
                        option.style.backgroundColor="green";
                    }
                }
            }
        }
    }
    let timer = setInterval(() => {
        seconds -= 1;
        let seconds1;
        let min1
        if (seconds < 0) {
            mins--;
            seconds = 59;
        }

        if (seconds < 10) {
            seconds1 = `0${seconds}`
        } else {
            seconds1 = seconds
        }
        if (mins < 10) {
            min1 = `0${mins}`
        } else {
            min1 = mins
        }
        timerCount[0].innerText = `Time Left: ${min1}:${seconds1}`;
        if (seconds == 0 && mins == 0) {
            clearInterval(timer);
            instructions.style.display = "none";
            questionscon.style.display = "none";
            if (marks >=0) {
                resultShow.innerText = `Your Final Score: ${marks}`;
            } else {
                resultShow.innerText = `Your Final Score: 0`;
            }
            result.style.display = "block";
        }
    }, 1000);

}

nextQues.onclick = function () {
    if (!optionSelected) {
        alert("Please select an option before continuing.")
        return;
    } else {
        optionSelected = false;
    }
    questionCount++;
    for (let i = 0; i < 4; i++) {
        options[i].disabled = false;
    }
    if (questionCount == questionArray.length) {
        questionscon.style.display = "none";
        result.style.display = "block";
        if (marks >= 0) {
            resultShow.innerText = `Your Final Score: ${marks}`;
        } else {
            resultShow.innerText = `Your Final Score: 0`;
        }
        return;
    }
    questionName.innerText = `${questionCount + 1}. ${questionArray[questionCount].question}`;
    for (let i = 0; i < 4; i++) {
        options[i].innerText = questionArray[questionCount].options[i]
        options[i].style.backgroundColor = "white";
    }
}
restartQuiz.onclick = function () {
    //first way to reload page
    // location.reload();

    // secound way to restart quiz 
    seconds=0;
    mins=10;
    marks = 0;
    questionCount = 0;
    for (let i of options) {
        i.style.backgroundColor = "white";
    }
    instructions.style.display = "block";
    questionscon.style.display = "none";
    result.style.display = "none";
}

