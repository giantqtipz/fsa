//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  //YOUR CODE HERE
  constructor(playerOne, playerTwo){
    this.players = [ { name: playerOne, score: 0 }, { name: playerTwo, score: 0 }]
    this.choices = { Rock: 'Scissors', Paper: 'Rock', Scissors: 'Paper' };
  }

  play(inputOne, inputTwo){
    const choices = Object.keys(this.choices);
    const winningConditions = Object.values(this.choices);
    
    if(inputOne === inputTwo) return `It's a tie!!!`; 
    
    if (choices.indexOf(inputOne) === winningConditions.indexOf(inputTwo)){
      this.players[0].score++;
      return `${inputOne} defeats ${inputTwo}, ${this.players[0].name} wins this round.`;
    } else {
      this.players[1].score++;
      return `${inputTwo} defeats ${inputOne}, ${this.players[1].name} wins this round.`;
    }
  }

  winner(){
    if(this.players[0].score === this.players[1].score) `It's a tie!!!`
    
    if (this.players[0].score > this.players[1].score){
      return `The victor is ${this.players[0].name} with ${this.players[0].score} points.`
    } else {
      return `The victor is ${this.players[1].name} with ${this.players[1].score} points.`
    }
  }
}

module.exports = { RPS };
