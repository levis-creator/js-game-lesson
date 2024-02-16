let firstCard = 9;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
console.log(isAlive);
let message_el = document.getElementById("message");
let sum_el = document.getElementById("sum");
let card_el = document.getElementById("cards");
let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function renderGame() {
  card_el.textContent = "Card: " + cards[0] + " " + cards[1];
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
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 4;

  // 2. Add the new card to the sum variable
  sum += card;

  // 3. Call startGame()
  renderGame();
}
