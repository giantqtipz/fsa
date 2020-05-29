// see test specs

function cache(arg) {
  // YOUR CODE
  if(typeof arg !== 'function') throw new Error('Input must be a function.');

  return function(input){
    let results = [];
    results.push(input);
    let output = 0;
    for(i=0;i<results.length;i++){
      output = output + results[i];
    }
    console.log(input);
  }(arg(2))
}

module.exports = { cache };
