/*
This is WAR! In my code, I'm going to create a game of basic WAR between two players. I'll use an assumption of a 52 card deck (Ace thru King of 4 suits). 
26 cards will be randomly selected and dealt to 2 players, each player having 13 cards.
Every turn consists of each player pulling one of their cards out and putting it on the table. Of the two cards, whomever's card is higher gets 1 point. 
If there is a tie, neither player gets a point. There is no special rules for this scenario.
Once both players exhaust their cards, whomever has the more points wins. 
*/

//To start, I need a deck of cards. So hand me a deck of cards now.
let masterDeck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];


//Now, I need two players

let player1 = [];
let player1Point = 0;
let player2 = [];
let player2Point = 0;


//Let's shuffle the cards and deal them out to the two players

function shuffleAndDeal() {
    masterDeck.sort(() => Math.random() - 0.5);
    player1.push(masterDeck.slice(0,25));
    player2.push(masterDeck.slice(26,51));
}
//At this point, I have to admit defeat. Every code I have below is my attempt at making this game. I've gotten it to a point where a console.log is not showing any syntax errors. But I can't seem to get it to go
//I understand the assignment is incomplete. I'd rather turn something in than nothing at all. But my understanding of Objects and Classes and when to use those vs Functions is just not good. 
//I will try to comment my logic behind things in the white spaces between the code blocks. 
class WAR {
    constructor () {
        this.round = [];
    }
//Here I just wasn't sure what to build in the constructor part. I didn't really feel like I needed anything, but had to put something. 

    NewTurn() {
        this.round.push(player1.shift());
        this.round.push(player2.shift());

        if (this.round[0] > this.round[1]) {
            player1Point++;
            return `Player 1 wins the round!`;
        } else if (this.round[0] < this.round[1]) {
            player2Point++;
            return `Player 2 wins the round!`;
        }
        this.round = [];
    }
      
//In the code above, my reasoning was that I made an array "this.round". After calling the shuffleAndDeal function above, the arrays of player1 and player2 should have all the cards. So then I wanted to 
//take off the first index of those player arrays and put them into the "this.round" array. I assumed that if I did that for player1 first and then player2, we can assume the first index or card in the
//array would have come from player1. So then I tried to compare the two items in the index and award a point based off the result of the if/then statement. 
    startGame() {
         let turn = this.NewTurn(); 
         do {
            turn
        } while ((player1.length !== 0) && (player2.length !== 0));
         
          
      //Above, I was trying to define turn as the method I build above. And have the method work while the arrays of each player were not empty.   
        if (player1Point > player2Point) {
        return `Player 1 wins with ${player1Point} points!`;
       } else {
        return `Player 2 wins with ${player2Point} points!`;
       }
    }
}
//Above, I figured that if at the end of the do/while statement, we do a comparison on the points and award a winner. 
let game = new WAR();
shuffleAndDeal(masterDeck);
game.NewTurn();
console.log(startGame());
//Here is where I can't seem to make anything come up

//Finally, as I can't seem to make the game work, I didn't build a Unit Test for it. So I'll take responsibility for points lost on that. 
