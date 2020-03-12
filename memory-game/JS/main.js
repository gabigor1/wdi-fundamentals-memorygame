console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree;
var cardFour;
const cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
}
}

function flipCard(cardId){
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}

    else{
    	alert("Sorry, try again");
    }
}

flipCard(0);
flipCard(2);
checkForMatch();
