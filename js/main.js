let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// render components
let message_el = document.getElementById("message");
let sum_el = document.getElementById("sum");
let card_el = document.getElementById("cards");
let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function renderGame() {
  card_el.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    card_el.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    //true
    message = "Do you want to draw a new card? 🙂";
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "Woooo! You've won the game 🥳";
    hasBlackJack = true;
  } else {
    message = "You lose 😭";
    isAlive = false;
  }
  message_el.textContent = message;
  sum_el.textContent = "Sum: " + sum;
}
function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
