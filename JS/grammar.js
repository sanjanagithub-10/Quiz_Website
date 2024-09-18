// Define an array of quiz questions
const quizQuestions = [
    {
      question: "1. Most university students ………………… on campus in their first year.",
      options: ["Lives", "Live", "are living", "Living"],
      correctAnswer: "Live"
    },
    {
      question: "2. From this graph we can see that the economy ………………… at the moment.",
      options: ["improves", "Improve", "is improving", "improving"],
      correctAnswer: "Improve"
    },
    {
      question: "3. They ………………… personal computers when my father was a student.",
      options: ["hadn’t", "didn’t have", "weren’t having", "are having"],
      correctAnswer: "didn’t have"
    },
    {
        question: "4. I ……………… want to be a practicing doctor but now I’m more interested in research.",
        options: ["was used to", "used to", "would", "will"],
        correctAnswer: " used to"
    },
    {
        question: "5. The teacher ………………… us how to do the experiment when the fire bell rang.",
        options: ["Showed", "Shown", "was showing", "showing"],
        correctAnswer: " was showing"
    },
    {
        question: "6. I finished my essay yesterday but …………… it in to the tutor yet.",
        options: ["I’ve given", "I haven’t given", "I didn’t give", "i did not"],
        correctAnswer: "I haven’t given"
    },
    {
        question: "7. ………………… the experiment three times now with different results each time!",
        options: ["We’ve done", "We did", "We’ve been doing", "We did"],
        correctAnswer: "We’ve done"
    },
    {
        question: "8. When I arrived the lecture …………… So I didn’t find it easy to follow.",
        options: ["started", "had started", " had been starting", " has been starting"],
        correctAnswer: "had started"
    },
    {
        question: "9. She …………… well at school but that changed when she became friends with a different group of girls.",
        options: ["did", "use to go", "had done", "had been doing"],
        correctAnswer: " used to"
    },
    {
        question: "10. ……………… the doctor at 2.00 this afternoon so I can’t go to the lecture.",
        options: ["I’m seeing", "I see", " I will see", "I am seeing"],
        correctAnswer: "I’m seeing"
    }
    
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function navigateToMainPage() {
    // Replace "your-main-page-url.html" with the actual URL of your main page
    window.location.href = "main.html";
}

// Function to show the "Go To Main Page" button after quiz completion
function showMainPageButton() {
    const mainPageButton = document.getElementById("main-page-button");
    mainPageButton.style.display = "block";
}

// Modify your endQuiz function to call showMainPageButton
function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizQuestions.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;

    // Call the function to show the "Go To Main Page" button
    showMainPageButton();
}
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);
  