// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  // #sides;
  // #numDice;
  // #history;
  constructor(sides, numDice){
    if((sides > 0 && typeof sides === 'number') && (numDice > 0 && typeof numDice === 'number')){
      this.sides = sides;
      this.numDice = numDice;
      // this.#numDice = numDice;
      // this.#sides = sides;
    } else {
      throw new Error();
    }
    this.history = [];
    // this.#history = [];
  }

  roll(){
    let combination = [];
    
    const randomize = () => Math.ceil(Math.random() * this.sides); //tried this.#sides

    combination.push(randomize(), randomize()); //this passes the test spec too..

    // for(let i=0;i<this.numDice;i++){
    //   combination.push(randomize());
    // }

    this.history.push(combination);
    // this.#history.push(combination);
    
    return combination;
  }
}


module.exports = { DiceRoller };
