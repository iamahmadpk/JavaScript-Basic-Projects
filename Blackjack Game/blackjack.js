
let cards = [];
let sum =  0;

let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
//another way of getting element 
let sumEl = document.querySelector("#sum-el");

let player = {
    name: "Ahmad",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":$ " + player.chips

function getRandomNumbers(){
    let randomNumbers= Math.floor(Math.random()*13)+1;
    if(randomNumbers > 10){
        return 10;
    }
    else if(randomNumbers === 1){
        return 11;
    }
    else return randomNumbers;
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomNumbers();
    let secondCard = getRandomNumbers();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    //cardsEl.textContent = "Cards: " + cards[0] +" " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "waooooo, You've got a blackJack!";
        hasBlackJack = true;
        console.log(hasBlackJack);
    }
    else {
        message ="you're out of the Game";
        isAlive = false;
        console.log(isAlive);
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive===true & hasBlackJack === false){
    let card = getRandomNumbers();
    sum +=card;
    cards.push(card)
    renderGame();
    }
}

