let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
if(sum < 21){
    console.log("Do you want to draw a new card?");
}
else if(sum === 21){
    console.log("waooooo, You've got a blackJack!")
}
else console.log("you're out of the Game")
