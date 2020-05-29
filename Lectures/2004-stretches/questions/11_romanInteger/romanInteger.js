//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (arg) => {
  if(typeof arg !== 'number' || arg <= 0 || arg >= 4000){
    throw new Error();
  } 
  
  let result = '';

  const symbols = [
    {number: 1000, value:'M'},
    {number: 900, value:'CM'},
    {number: 500, value:'D'},
    {number: 400, value:'CD'},
    {number: 100, value:'C'},
    {number: 90, value:'XC'},
    {number: 50, value:'L'},
    {number: 40, value:'XL'},
    {number: 10, value:'X'},
    {number: 9, value:'IX'},
    {number: 5, value:'V'},
    {number: 4, value:'IV'},
    {number: 1, value:'I'}
  ];


  for(let i=0;i<symbols.length;i++){
    if(symbols[i].number === arg ){
      // arg = arg - symbols[i].value;
      result = result + symbols[i].number;
    }
  }


  console.log(result);
};

module.exports = { romanInteger };
