const moveZeroes = (arr) => {
  //YOUR CODE HERE
  
  let zeroes = 0;
  
  for(i=0;i<=arr.length;i++){
    if(arr[i] === 0){
      arr.splice(i, 1);
      zeroes++;
      i--;
    }
  }
      
  while(zeroes > 0){
    arr.push(0);
    zeroes--;
  }
        
  return arr;
        
  // arr.sort((a, b) => {
  //   if (a !== 0 && b === 0) return -1;
  //   if (a === 0 && b !== 0) return 1;
  //   return 0;
  // })

  // return arr;
};

module.exports = { moveZeroes };
