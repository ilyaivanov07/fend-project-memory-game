# Memory Game Project

## How It Works
If you're unfamiliar with the game, the rules are very simple; flip over two hidden cards at a time to locate the ones that match!

The game board consists of sixteen cards arranged randomly in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. Each turn:

* A player flips one card over to reveal its underlying symbol
* The player then turns over a second card, trying to find the corresponding card with the same symbol
* If the cards match, both cards stay flipped over
* If the cards do not match, both cards are returned to their initial hidden state

The game ends once all cards have been correctly matched.

## What Will I Learn?


## Hints
* We recommend starting off working on a very simple grid of cards. Don't worry about styling, just get something clickable on the page
* Figure out how each card is structured. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
* Once you have a grid, add in the click logic to reveal the hidden side of each card
* Next, work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
* We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.


It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

* Start by building a very simple grid of cards. Don't worry about styling, just get something clickable on the page.
* Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
* Add the functionality to handle clicks. This should reveal the hidden side of each card.
* Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
* Work on the winning condition. How does your game “know” if a player has won?
We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.  

How the game will be evaluated: https://review.udacity.com/#!/rubrics/591/view

1. The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

2. When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

3. A restart button allows the player to reset the game board, the timer, and the star rating.

4. The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating.

5. The number of moves needed to change the rating is up to you, but it should happen at some point.

6. When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

7. Game displays the current number of moves a user has made.



## Project Submission

### Submission Instructions
1. Before submitting, make sure your code follows our style guidelines:
  1. [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
  2. [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
  3. [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
  4. [Git Style Guide](https://udacity.github.io/git-styleguide/)
2. Create a new repository on GitHub and push your code up to it, making sure to push your `master` branch.
3. Connect your GitHub account and select your Memory Game project's repository.
4. If you are having any problems submitting your project or wish to check on the status of your submission, please email us at fend-support@udacity.com or visit us in the [discussion forums](http://discussions.udacity.com/).

