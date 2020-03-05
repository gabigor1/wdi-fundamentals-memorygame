console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree;
var cardFour;

const cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

cardsInPlay;

console.log("User flipped" + " " + cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}

    else{
    	alert("Sorry, try again");
    }
}