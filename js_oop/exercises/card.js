
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cards = [];
		
	}
	addCard(suit,faceValue){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
			var card = new Card(suit, faceValue);
			this.cards.push(card);
			return this.cards.length;
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
		var shuffledArray = [];
		while(this.cards.length){
	var randomNumber = Math.floor(Math.random() * this.cards.length);
	var randomCard = this.cards[randomNumber];
	shuffledArray.push(randomCard);
	this.cards.splice(randomNumber,1);

}
this.cards = shuffledArray;
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor

return this.cards.length;



	}
	dealCards(cardDealt){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
var card = [];

if(cardDealt > this.cards.length){
cardDealt = this.cards.length
}
	for (var i = 0 ; i < cardDealt; i ++){
		card.push(this.cards.pop())

	}	//return this.cards.splice(-1 * desiredCard);
return card;
}


}



