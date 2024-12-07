'use strict';
const words = ["asparagus", "aubergine", "beans", "beetroot", "broccoli", "cabbages", "carrots", "cauliflower", "celeriac", "celery", "courgette", "cucumber", "fennel", "garlic","ginger","leeks","lettuce","mushrooms","onions","parsnip","peas","peppers","potatoes","pumpkins","radish","rhubarb","spinach","spring onions","sprouts","sweet corn","tomato"];

const correctPronunciation = {
    "asparagus": "../subcat_pronun/recordingfruit/recordingveggies/asparagus.mp3",
    "aubergine": "../subcat_pronun/recordingfruit/recordingveggies/aubergine.mp3",
    "beans": "../subcat_pronun/recordingfruit/recordingveggies/beans.mp3",
    "beetroot": "../subcat_pronun/recordingfruit/recordingveggies/beetroot.mp3",
    "broccoli": "../subcat_pronun/recordingfruit/recordingveggies/broccoli.mp3",
    "cabbages": "../subcat_pronun/recordingfruit/recordingveggies/cabbages.mp3",
    "carrots": "../subcat_pronun/recordingfruit/recordingveggies/carrots.mp3",
    "cauliflower": "../subcat_pronun/recordingfruit/recordingveggies/cauliflower.mp3",
    "celeriac": "../subcat_pronun/recordingfruit/recordingveggies/celeriac.mp3",
    "celery": "../subcat_pronun/recordingfruit/recordingveggies/celery.mp3",
    "courgette": "../subcat_pronun/recordingfruit/recordingveggies/courgette.mp3",
    "cucumber": "../subcat_pronun/recordingfruit/recordingveggies/cucumber.mp3",
    "fennel": "../subcat_pronun/recordingfruit/recordingveggies/fennel.mp3",
    "garlic": "../subcat_pronun/recordingfruit/recordingveggies/garlic.mp3",
    "ginger": "../subcat_pronun/recordingfruit/recordingveggies/ginger.mp3",
    "leeks": "../subcat_pronun/recordingfruit/recordingveggies/leeks.mp3",
    "lettuce": "../subcat_pronun/recordingfruit/recordingveggies/lettuce.mp3",
    "mushrooms": "../subcat_pronun/recordingfruit/recordingveggies/mushrooms.mp3",
    "onions": "../subcat_pronun/recordingfruit/recordingveggies/onions.mp3",
    "peas": "../subcat_pronun/recordingfruit/recordingveggies/peas.mp3",
    "peppers": "../subcat_pronun/recordingfruit/recordingveggies/peppers.mp3",
    "potatoes": "../subcat_pronun/recordingfruit/recordingveggies/potatoes.mp3",
    "pumpkins": "../subcat_pronun/recordingfruit/recordingveggies/pumpkins.mp3",
    "radish": "../subcat_pronun/recordingfruit/recordingveggies/radish.mp3",
    "rhubarb": "../subcat_pronun/recordingfruit/recordingveggies/rhubarb.mp3",
    "spinach": "../subcat_pronun/recordingfruit/recordingveggies/spinach.mp3",
    "spring onions": "../subcat_pronun/recordingfruit/recordingveggies/spring onions.mp3",
    "sprouts": "../subcat_pronun/recordingfruit/recordingveggies/sprouts.mp3",
    "sweet corn": "../subcat_pronun/recordingfruit/recordingveggies/sweet corn.mp3",
    "tomato": "../subcat_pronun/recordingfruit/recordingveggies/tomato.mp3",
    
};

const retryAudio = "./retry.mp3"; // Audio file for retry message

const fruitImages = {
    "asparagus": "./images/images_legume/asparagus.png",
    "aubergine": "./images/images_legume/aubergine.png",
    "beans": "./images/images_legume/beans.png",
    "beetroot": "./images/images_legume/beetroot.png",
    "broccoli": "./images/images_legume/broccoli.png",
    "cabbages": "./images/images_legume/cabbages.png",
    "carrots": "./images/images_legume/carrots.png",
    "cauliflower": "./images/images_legume/cauliflower.png",
    "celeriac": "./images/images_legume/celeriac.png",
    "celery": "./images/images_legume/celery.png",
    "courgette": "./images/images_legume/courgette.png",
    "cucumber": "./images/images_legume/cucumber.png",
    "fennel": "./images/images_legume/fennel.png",
    "garlic": "./images/images_legume/garlic.png",
    "ginger": "./images/images_legume/ginger.png",
    "leeks": "./images/images_legume/leeks.png",
    "lettuce": "./images/images_legume/lettuce.png",
    "mushrooms": "./images/images_legume/mushrooms.png",
    "onions": "./images/images_legume/onions.png",
    "peas": "./images/images_legume/peas.png",
    "peppers": "./images/images_legume/peppers.png",
    "potatoes": "./images/images_legume/potatoes.png",
    "pumpkins": "./images/images_legume/pumpkins.png",
    "radish": "./images/images_legume/radish.png",
    "rhubarb": "./images/images_legume/rhubarb.png",
    "spinach": "./images/images_legume/spinach.png",
    "spring onions": "./images/images_legume/spring onions.png",
    "sprouts": "./images/images_legume/sprouts.png",
    "sweet corn": "./images/images_legume/sweet corn.png",
    "tomato": "./images/images_legume/tomato.png",
};

const translations = {
  "asparagus": "sparanghel",
  "aubergine":"vinete",
  "beans": "fasole",
  "beetroot": "sfeclă roșie",
  "broccoli": "broccoli",
  "cabbages": "varză",
  "carrots": "morcovi",
  "cauliflower": "conopidă",
  "celeriac": "țelină rădăcină",
  "celery": "țelină",
  "courgette": "dovlecel",
  "cucumber": "castravete",
  "fennel": "fenicul",
  "garlic": "usturoi",
  "ginger": "ghimbir",
  "leeks": "praz",
  "lettuce": "salată verde",
  "mushrooms": "ciuperci",
  "onions": "ceapă",
  "parsnip": "păstârnac",
  "peas": "mazăre",
  "peppers": "ardei",
  "potatoes": "cartofi",
  "pumpkins": "dovleci",
  "radish": "ridiche",
  "rhubarb": "rubarbă",
  "spinach": "spanac",
  "spring onions": "ceapă verde",
  "sprouts": "varză de Bruxelles",
  "sweet corn": "porumb dulce",
  "tomato": "roșie"
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