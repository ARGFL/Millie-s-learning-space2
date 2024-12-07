// Array of questions
const questions = [
    {
        audio: './subcat_pronun/recordingfruit/apple.mp3',
        correctAnswer: 'apple',
        options: ['apal', 'apple']
    },
    {
        audio: './subcat_pronun/recordingfruit/banana.mp3',
        correctAnswer: 'banana',
        options: ['bonana', 'banana']
    },
    {
        audio: './subcat_pronun/recordingfruit/orange.mp3',
        correctAnswer: 'orange',
        options: ['oranj', 'orange']
    },
    {
        audio: './subcat_pronun/recordingfruit/berry.mp3',
        correctAnswer: 'berry',
        options: ['beri', 'berry']
    },
    {
        audio: './subcat_pronun/recordingfruit/blueberry.mp3',
        correctAnswer: 'blueberry',
        options: ['blueberry', 'blueberi']
    },
    {
        audio: './subcat_pronun/recordingfruit/cherry.mp3',
        correctAnswer: 'cherry',
        options: ['cherri', 'cherry']
    },
    {
        audio: './subcat_pronun/recordingfruit/grapes.mp3',
        correctAnswer: 'grapes',
        options: ['grapes', 'greips']
    },
    {
        audio: './subcat_pronun/recordingfruit/mango.mp3',
        correctAnswer: 'mango',
        options: ['mango', 'mang']
    },
    {
        audio: './subcat_pronun/recordingfruit/pear.mp3',
        correctAnswer: 'pear',
        options: ['per', 'pear']
    },
    {
        audio: './subcat_pronun/recordingfruit/pineapple.mp3',
        correctAnswer: 'pineapple',
        options: ['painapple', 'pineapple']
    },
    {
        audio: './subcat_pronun/recordingfruit/plum.mp3',
        correctAnswer: 'plum',
        options: ['plam', 'plum']
    }
];

let currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];

    // Clear previous feedback
    document.getElementById('feedback').textContent = '';

    // Dynamically create option buttons
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'button';
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Hide the "Try Again" button
    document.getElementById('retryButton').style.display = 'none';

    // Store the current question index in local storage
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
}

function playAudio() {
    const question = questions[currentQuestionIndex];
    const audio = new Audio(question.audio);
    audio.play();
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (answer === question.correctAnswer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Try again.';
        feedback.style.color = 'red';
    }

    // Store feedback in local storage
    localStorage.setItem('feedback', feedback.textContent);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('feedback').textContent = 'Quiz Completed!';
        document.getElementById('options').innerHTML = ''; // Clear options
        document.getElementById('retryButton').style.display = 'inline-block'; // Show "Try Again" button

        // Store the end state in local storage
        localStorage.setItem('quizCompleted', 'true');
    }

    // Store the updated question index in local storage
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.removeItem('quizCompleted');
    localStorage.removeItem('feedback');
    loadQuestion();
}

// Initialize the quiz based on local storage
window.onload = function () {
    const quizCompleted = localStorage.getItem('quizCompleted');
    if (quizCompleted === 'true') {
        document.getElementById('feedback').textContent = 'Quiz Completed!';
        document.getElementById('retryButton').style.display = 'inline-block';
    } else {
        loadQuestion();
        const feedback = localStorage.getItem('feedback');
        if (feedback) {
            document.getElementById('feedback').textContent = feedback;
        }
    }
};