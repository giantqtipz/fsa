//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arg) => {
  if(arg.length === 0){
    throw new Error();
  }

  return arg.map((string) => {
    string = '* ' + string + ' *';
    result.push(string);
  })

  // const longestWord = arr.reduce((a,b) => {
  //   if(b.length > a){
  //     a = b.length;
  //   }
  // }, 0); to find the longest word in an array of strings
};

module.exports = { movieposter };
