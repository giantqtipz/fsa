// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.previous = initialState;
  }
  setState(arg) {
    // YOUR CODE
    let obj = {};
    const objAssign = Object.assign(obj, this.state); // target, source
    const objAssignAgain = Object.assign(obj, arg);
    
    return obj;
  }

  goBack(){ // did not pass
    this.state = this.previous;
  }
}

module.exports = { StatefulThing };
