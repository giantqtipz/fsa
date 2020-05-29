const fizzBuzz = (arg) => {
  //YOUR CODE HERE
  if(typeof arg === 'string' || arg < 1){
    throw new Error();
  }
  const result = [];

  for(i=1;i<=arg;i++){
    if(i % 15 === 0){
      result.push('FizzBuzz')
    } else if(i % 3 === 0){
      result.push('Fizz');
    } else if(i % 5 === 0){
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
};
module.exports = { fizzBuzz };
