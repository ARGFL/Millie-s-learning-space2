'use strict';
const words = ["apple", "banana", "pear", "plum", "grapes", "cherry", "berry", "strawberry", "blueberry", "raspberry", "orange", "mango", "melon", "watermelon", "pineapple"];

const correctPronunciation = {
    "apple": "./recordingfruit/apple.mp3",
    "banana": "./recordingfruit/banana.mp3",
    "pear": "./recordingfruit/pear.mp3",
    "plum": "./recordingfruit/plum.mp3",
    "grapes": "./recordingfruit/grapes.mp3",
    "cherry": "./recordingfruit/cherry.mp3",
    "berry": "./recordingfruit/berry.mp3",
    "strawberry": "./recordingfruit/strawberry.mp3",
    "blueberry": "./recordingfruit/blueberry.mp3",
    "raspberry": "./recordingfruit/raspberry.mp3",
    "orange": "./recordingfruit/orange.mp3",
    "mango": "./recordingfruit/mango.mp3",
    "melon": "./recordingfruit/pepene_galben.mp3",
    "watermelon": "./recordingfruit/pepene_rosu.mp3",
    "pineapple": "./recordingfruit/pineapple.mp3",
};

const retryAudio = "../subcat_pronun/retry.mp3"; // Audio file for retry message

const fruitImages = {
    "apple": "./images/apple.png",
    "banana": "./images/banana.png",
    "pear": "./images/pear.jpg",
    "plum": "./images/plum.jpg",
    "grapes": "./images/grapes.jpg",
    "cherry": "./images/cherry.jpg",
    "berry": "./images/berry.jpg",
    "strawberry": "./images/strawberry.png",
    "blueberry": "./images/blueberry.jpg",
    "raspberry": "./images/raspberry.jpg",
    "orange": "./images/orange.jpg",
    "mango": "./images/mango.jpg",
    "melon": "./images/melon.jpg",
    "watermelon": "./images/watermelon.jpg",
    "pineapple": "./images/pineapple.jpg",
};

const translations = {
    "apple": "măr",
    "banana": "banană",
    "pear": "pară",
    "plum": "prună",
    "grapes": "struguri",
    "cherry": "cireașă",
    "berry": "fruct de pădure",
    "strawberry": "căpșuni",
    "blueberry": "afine",
    "raspberry": "zmeură",
    "orange": "portocală",
    "mango": "mango",
    "melon": "pepene",
    "watermelon": "pepene roșu",
    "pineapple": "ananas",
};

let currentWordIndex = 0;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const userInput = event.results[0][0].transcript.toLowerCase().trim();
        console.log("Recognized:", userInput);
        checkPronunciation(userInput);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert('Speech recognition error: ' + event.error);
    };

    recognition.onend = () => {
        console.log("Speech recognition service disconnected");
    };
} else {
    alert('Speech Recognition API not supported in this browser.');
}

function playCorrectPronunciation() {
    console.log("Playing correct pronunciation...");
    const wordToPronounce = document.querySelector(".wordToPronounce").textContent.toLowerCase();
    if (correctPronunciation[wordToPronounce]) {
        const audio = new Audio(correctPronunciation[wordToPronounce]);
        audio.play();
    } else {
        alert('Audio not available for this word.');
    }
}

function replayWord() {
    console.log("Replaying word...");
    const wordToPronounce = document.querySelector(".wordToPronounce").textContent.toLowerCase();
    if (correctPronunciation[wordToPronounce]) {
        const audio = new Audio(correctPronunciation[wordToPronounce]);
        audio.play();
    } else {
        alert('Audio not available for this word.');
    }
}

function startRecognition() {
    console.log("Starting speech recognition...");
    recognition.start();
}

function stopRecognition() {
    console.log("Stopping speech recognition...");
    if (recognition) {
        recognition.stop();
    }
}

function checkPronunciation(userInput) {
    const wordToPronounce = document.querySelector(".wordToPronounce").textContent.toLowerCase();
    const distance = levenshteinDistance(userInput, wordToPronounce);
    let threshold = Math.ceil(wordToPronounce.length / 3);

    console.log("Checking pronunciation:", userInput, "against:", wordToPronounce, "with threshold:", threshold, "distance:", distance);

    if (distance <= threshold) {
        console.log("Pronunciation correct, playing positive feedback.");
        playAudioFeedback('../subcat_pronun/recordingfruit/positive_feedback.mp3');
        document.querySelector(".nextWordButton").disabled = false;
    } else {
        console.log("Pronunciation incorrect, playing retry feedback.");
        playAudioFeedback(retryAudio);
    }
}

function playAudioFeedback(audioFile) {
    console.log("Playing audio feedback:", audioFile);
    const audio = new Audio(audioFile);
    audio.play();
    audio.onerror = () => {
        console.error("Failed to load audio file:", audioFile);
    };
}

function nextWord() {
    console.log("Loading next word...");
    // Increment the current word index to move to the next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    const nextWord = words[currentWordIndex];

    // Update elements for the next word
    document.querySelector(".wordToPronounce").textContent = nextWord;
    document.querySelector(".fruitImage").src = fruitImages[nextWord];
    document.querySelector(".fruitImage").alt = nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
    document.querySelector(".translation").textContent = translations[nextWord];

    // Reset the writing practice inputs
    document.querySelector(".writingInput").value = '';
    document.querySelector(".writingFeedback").textContent = '';

    // Always show the pronunciation section and hide the writing practice section
    document.querySelector(".pronunciation").style.display = "block";
    document.querySelector(".writing-practice").style.display = "none";

    // Disable the next word button until it is appropriate to use it again
    document.querySelector(".nextWordButton").disabled = true;
}

function showWritingPractice() {
    console.log("Showing writing practice...");
    document.querySelector(".pronunciation").style.display = "none";
    document.querySelector(".writing-practice").style.display = "block";
    replayWord();
}

function hideWritingPractice() {
    console.log("Hiding writing practice...");
    document.querySelector(".pronunciation").style.display = "block";
    document.querySelector(".writing-practice").style.display = "none";
    document.querySelector(".nextWordButton").disabled = true;
}

function checkWriting() {
    console.log("Checking writing...");
    const userInput = document.querySelector(".writingInput").value.toLowerCase().trim();
    const correctWord = document.querySelector(".wordToPronounce").textContent.toLowerCase();
    const feedbackElement = document.querySelector(".writingFeedback");
    const nextWordButton = document.querySelector(".nextWordButton");

    if (userInput === correctWord) {
        feedbackElement.textContent = "Corect, bravo!";
        feedbackElement.style.color = "green";
        nextWordButton.disabled = false;
    } else {
        feedbackElement.textContent = "Incorect, mai încearcă odată.";
        feedbackElement.style.color = "red";
        nextWordButton.disabled = true;
    }
}

function levenshteinDistance(a, b) {
    console.log("Calculating Levenshtein distance between", a, "and", b);
    const an = a ? a.length : 0;
    const bn = b ? b.length : 0;
    const matrix = new Array(bn + 1);

    for (let i = 0; i <= bn; ++i) {
        matrix[i] = new Array(an + 1);
        matrix[i][0] = i;
    }
    for (let j = 0; j <= an; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= bn; i++) {
        for (let j = 1; j <= an; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // Deletion
                    matrix[i][j - 1] + 1, // Insertion
                    matrix[i - 1][j - 1] + 1 // Substitution
                );
            }
        }
    }
    console.log("Levenshtein distance result:", matrix[bn][an]);
    return matrix[bn][an];
}

document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('.tooltip-header');
    headerTitle.setAttribute('data-hover-text', 'Pronunciation and Writing Practice');
    
    headerTitle.addEventListener('mouseover', () => {
        headerTitle.innerText = headerTitle.getAttribute('data-hover-text');
    });

    headerTitle.addEventListener('mouseout', () => {
        headerTitle.innerText = 'Lecție de pronunție și scriere';
    });
});