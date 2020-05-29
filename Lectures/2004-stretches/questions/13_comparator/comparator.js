//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, Obj) => {
    if(!Object.keys(...Obj).includes(selectKey)){
        return 'incorrect key';
    }
    
    return Obj.sort((a,b) => {
        if(typeof a[selectKey] === 'number'){
          return a[selectKey] - b[selectKey];
        } else {
          if(typeof a[selectKey] === 'string'){
            const aLastName = a[selectKey].split(' ')[1];
            const bLastName = b[selectKey].split(' ')[1];
            if(aLastName < bLastName){
              return -1;
            }
          }
        }
      })
};

module.exports = { comparator };
