const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
/*
 Initialized by shuffling and attaching the 'colors' array,
  this 'cards' array holds the color values for the cards
   in the game. The shuffle function employs the Fisher-Yates 
   algorithm to randomize the order of the colors and then 
   duplicates these colors to create pairs, forming the set of cards for gameplay.
*/
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
/*
This variable manages the game timer. It's utilized to
 control the countdown mechanism for the game's duration. 
 The interval continuously decrements the 'timeLeft' variable, 
 updating the displayed time and triggering the game's end when the time expires.
*/
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of colors) {
        const card = document.createElement('div');
        card.classList.add('card');
        /**
         dataset is an object that allows you to access and manipulate custom data-* attributes of an element.
         card.dataset.color = color; sets a custom attribute data-color on each card element.
         This attribute helps store the color information for each card without displaying it immediately.
         <div class="card" data-color="red">?</div>
        <div class="card" data-color="blue">?</div>
         */
        card.dataset.color = color;
        card.textContent =  '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 The handleCardClick(event) function manages the logic when a user clicks the card in the memory match game.
  Include given code after shuffle() function. Let's break down each step within this function:
*/
function handleCardClick(event) {
    const card = event.target;
    /*
    This 'if' statement checks whether the clicked element is a card and if it's already matched. If either condition is true:
    If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
    */
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent =  card.dataset.color;
    card.style.backgroundcolor = card.dataset.color;
    selectedCards.push(card);
    /**
     Checks if two cards have been selected. If two cards have been chosen,
      it uses 'setTimeout()' to delay the execution of the 'checkMatch()' function by 500 milliseconds.
       This brief delay allows the player to see both selected cards before their comparison briefly.
     */
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

