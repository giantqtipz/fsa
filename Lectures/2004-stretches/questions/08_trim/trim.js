// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // let newObj = {};

  // for(let property in obj){
  //   // console.log(obj[property]);
  //   if(typeof obj[property] !== 'undefined' && obj[property] !== null) {
  //     newObj[property] = obj[property];
  //   } 
  // }
  // return newObj;

  return Object.keys(obj).reduce((current, next)=>{
    if(obj[next] !== 'undefined' && obj[next] !== null){
      current[next] = obj[next];
    };
    return current;
  }, {});


};

module.exports = { trim };
