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
  /*    // Only allow the player to get a new card 
if she IS alive and does NOT have Blackjack
 */
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
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

let course = {
  title: "React course",
  lessons: 16,
  creator: "Levis Nyingi",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.length);

/* // Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, 
one number, and one array
// Log out at least two of the keys using the dot notation
 */
let car = {
  name: "Toyota Doble cabin",
  model: "hilux",
  production: 2005,
  fuelEfficient: false,
  power: "2000hp",
};
