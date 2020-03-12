console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

var cardOne;
var cardTwo;
var cardThree;
var cardFour;
var cardId;
const cardsInPlay = [];

cardId = 2;
function flipCard(){
cardsInPlay.push(cards[cardId]);

console.log("User flipped " + cards[cardId]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}

    else{
    	alert("Sorry, try again");
    }
}
}