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

class WAR {
    constructor () {
        this.round = [];
    }


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
      

    startGame() {
         let turn = this.NewTurn(); 
         do {
            turn
        } while ((player1.length !== 0) && (player2.length !== 0));
         
          
        
        if (player1Point > player2Point) {
        return `Player 1 wins with ${player1Point} points!`;
       } else {
        return `Player 2 wins with ${player2Point} points!`;
       }
    }
}

let game = new WAR();
shuffleAndDeal(masterDeck);
game.NewTurn();
console.log(startGame());
