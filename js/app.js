/*
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. 
It should also tell the user how much time it took to win the game, and what the star rating was.

A restart button allows the player to reset the game board, the timer, and the star rating.

The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, 
it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, 
it should change to a 1 star rating. The number of moves needed to change the rating is up to you, but it should happen at some point.

When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

Game displays the current number of moves a user has made.

*/

// Create a list that holds all of your cards
let cardStyles = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 
'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 

let openedCard = null; // initialize this to null

// timer variable is to show the time and to stop the timer when the game is finished
let timer;

// this is to count the number of matches to know if the game is finished
let matchCounter = 0;

 
function switchCard(selectedCard) {

	// update the move counter 
	document.getElementsByClassName("moves")[0].innerHTML = parseInt(document.getElementsByClassName("moves")[0].innerHTML) + 1;

	// take care of stars 
	let moves = parseInt(document.getElementsByClassName("moves")[0].innerHTML);
	if (moves === 5 || moves === 20) {
		reduceStars();		
	}
	
	// if card is not displayed 
	if (selectedCard.className === "card") { 
		// display the card
		selectedCard.className  = "card open show";
		// if a card was selected before	
		if (openedCard != null) {
			// if cards match	
			if (openedCard.firstChild.className === selectedCard.firstChild.className)	{
				// display matched cards
				openedCard.className = "card match";
				selectedCard.className = "card match";
				matchCounter += 1;
				
				// check if game is finished 
				if (matchCounter >= 8) {
					showModal();
					clearInterval(timer); // stop the timer 
				} 
				
				console.log(matchCounter);
			}
			// if cards do not match
			else {
				let prevCard = openedCard;
				window.setTimeout(function() { closeCards(selectedCard, prevCard); }, 300);
			}
			// reset opened card variable to null
			openedCard = null;			
		} // 'openedCard == null' means there was no previously opened card
		else {
			openedCard = selectedCard;
		}
	}
}


function closeCards(selectedCard, prevCard) {
	// close the selected card
	selectedCard.className = "card";
	// close the previously opened card
	prevCard.className = "card";
}


function reduceStars() {
	const stars = document.getElementsByClassName("stars")[0];
    const starHTML = '<li><i class="fa fa-star"></i></li>';
    stars.innerHTML = starHTML.repeat(stars.children.length - 1); 
}


function shuffleCards(array) {
	cardStyles = shuffle(array);
	
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].firstChild.setAttribute("class", cardStyles[i]);
    }		
}
 
 
function initGame() {
	shuffleCards(cardStyles);
	// time counter
	timer = setInterval(function() { 
		document.getElementsByClassName("timer")[0].innerHTML = parseInt(document.getElementsByClassName("moves")[0].innerHTML) + 1;
	}  , 1000);
} 


function showModal() {
	let modal = document.getElementsByClassName("modal")[0];
	modal.innerHTML = "Congratulations!<br><br>Your final score: " + document.getElementsByClassName('moves')[0].innerHTML;
	modal.className = "modal show";
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 
// initialize the game
initGame();


 
 
 
