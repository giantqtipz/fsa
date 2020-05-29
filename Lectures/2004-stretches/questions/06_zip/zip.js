/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // YOUR CODE
  
  let newObj = {};

  objs.forEach(function(index){
    // console.log(objs[index]);
    for(let property in index){
      console.log(index[property]);
      if(newObj[property]){
        newObj[property] = newObj[property] + index[property];
      } else {
        newObj[property] = index[property];
      }
    }
  })

  return newObj;

  // return objs.reduce((a,c) => {
  //   const keys = Object.keys(c);
  //   for( let key of keys ) {
  //     if(a.hasOwnProperty(key)) {
  //       a[key] += c[key]
  //     } else {
  //       a[key] = c[key]
  //     }
  //   }
  //   return a;
  // }, {})
  

  // if(typeof objs !== 'object'){
  //   return 'undefined';
  // } else {
  //   objs.forEach((index) => {
  //     for (let key in index) {
  //       console.log(output[key]);
  //       if (output[key]) { // tests if object property exists
  //         output[key] = output[key] + index[key];
  //       } else {
  //         output[key] = index[key]; //
  //       }
  //     }
  //   })
  //   return output;
  // }
}

module.exports = { zip };
