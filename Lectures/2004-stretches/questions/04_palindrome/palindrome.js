/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (arg) => {
  let test = String(arg);
  const split = test.toLowerCase();
  const reverse = test.split('').reverse().join('');

  return split === reverse;
};

// use String() to convert into a string

module.exports = { validPalindrome };


const play = true;

const test = function(){
  
}