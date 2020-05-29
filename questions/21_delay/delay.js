const delay = (str, time) => {
  //Your code here
  if(typeof str !== 'string' && typeof time !== 'number'){
    throw new Error();
  }
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str);
    }, time);
  }); 
};

module.exports = { delay };
