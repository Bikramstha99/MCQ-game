const questions = [
    {
      question: "Who is the author of the novel 'Harry Porter'?",
      answers: [
        { text: "J.K. Rowling", correct: true },
        { text: "F. Scott Fitzgerald", correct: false },
        { text: "Harper Lee", correct: false },
        { text: "George Orwell", correct: false },
      ],
    },
    {
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1912", correct: true },
        { text: "1920", correct: false },
        { text: "1945", correct: false },
        { text: "1898", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Cu", correct: false },
      ],
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Leo Tolstoy", correct: false },
      ],
    },
    {
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "African Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      question: "What is the capital city of Australia?",
      answers: [
        { text: "Melbourne", correct: false },
        { text: "Sydney", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false },
      ],
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
  ];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const highScoreButton = document.getElementById("high-score-btn");

let currentQuestionNumber =0;
let score =0;

function startQuiz(){
    currentQuestionNumber = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){

    resetstate();
    let currentQuestion = questions[currentQuestionNumber];
    let questionNo = currentQuestionNumber + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate(){
    nextButton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
        const userDataJson = localStorage.getItem('users');
        const users = JSON.parse(userDataJson);
        debugger
        const currentUser = sessionStorage.getItem('currentUser');
        const userToUpdate = users.find(x=>x.username === currentUser);
    
        userToUpdate.score = score;
        localStorage.setItem('users',JSON.stringify(users));
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

  
}

function showScore(){
    resetstate();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again!";

    highScoreButton.style.display="block";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionNumber < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
},
highScoreButton.addEventListener("click",()=>{
    window.location.href="../ScoreBoard/scoreboard.html";
})
);

startQuiz();