const quizDB = [
    {
        question: "Q1: Who was the first President of the United States?",
        a: "Thomas Jefferson",
        b: "George Washington",
        c: "Abraham Lincoln",
        d: "John Adams",
        ans: "ans2"
    },
    {
        question: "Q2: In which year did Christopher Columbus reach the Americas?",
        a: " 1400",
        b: "1492",
        c: " 1607",
        d: " 1776",
        ans: "ans2"
    },
    {
        question: "Q3: The Renaissance period is known for the revival of?",
        a: "Science",
        b: "Literature and Arts",
        c: "Warfare",
        d: "Explorat",
        ans: "ans2"
    },
    {
        question: "Q4: Who was the leader of the Civil Rights Movement in the 1960s?",
        a: "Malcolm X",
        b: "Martin Luther King Jr",
        c: "Rosa Parks",
        d: "Nelson Mandela",
        ans: "ans2"
    },
    {
        question: "Q5: What event marked the beginning of World War I?",
            a: "The assassination of Archduke Franz Ferdinand",
            b: "The sinking of the Titanic",
            c: "The signing of the Treaty of Versailles",
            d: "The bombing of Pearl Harbor",
            ans: "ans1"
        },
        {
            question: "Q6: Who was the first female Prime Minister of the United Kingdom?",
                a: "Margaret Thatcher",
                b: "Angela Merkel",
                c: "Theresa May",
                d: "Indira Gandhi",
                ans: "ans4"
         },   
        {
           question: "Q7: The Great Wall of China was built to protect against invasions by which nomadic group?",
                        a: "Mongols",
                        b: " Huns",
                        c: "Vandals",
                        d: "Visigoths",
                        ans: "ans1"
         },
         {
            question: "Q8: What was the main cause of the French Revolution?",
                        a: "Economic inequality",
                        b: " Religious conflicts",
                        c: "Monarchy stability",
                        d: "Industrialization",
                        ans: "ans1"
         },
         {
            question: "Q9: The Berlin Wall, which divided East and West Berlin, fell in:",
                        a: " 1989",
                        b: "1975 ",
                        c: "1991",
                        d: "1961",
                        ans: "ans1"
         },{
            question: "10: Who was the first Prime Minister of India",
                        a: "Sardar Vallabhbhai Patel",
                        b: "Jawaharlal Nehru ",
                        c: "Subhas Chandra Bose ",
                        d: "Rajendra Prasad",
                        ans: "ans2"
         }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const prevButton = document.querySelector('#prev');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h2> You Scored ${score}/${quizDB.length} </h2>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});

// ... (Your existing code)

//const prevButton = document.querySelector('#prev');
const showPrevQuestion = document.querySelector('#showprevquestion');

prevButton.addEventListener('click', () => {
    if (questionCount > 0) {
        questionCount--;
        loadQuestion();
        showPrevQuestion.innerHTML = `<p>Showing Previous Question</p>`;
    }
});

