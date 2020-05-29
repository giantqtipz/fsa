// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  let result = false;

  for(i=0;i<str1.length;i++){
    for(j=0;j<str2.length;j++){
      if(str1[i] !== str2[j]){
        result = false;
      } else if(str1[i] === str2[j]){
        result = true;
      }
    }
  }
  return result;

  //or just

  return str1 === str2;

};

module.exports = { checkAnagrams };
