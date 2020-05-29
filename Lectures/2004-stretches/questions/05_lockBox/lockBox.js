// const lockBox = (code, message) => {
//   // write code here

//   if(typeof code !== 'number' || typeof message !== 'string'){
//     throw new Error();
//   }

//   // let accessCode = code;
//   let secretMessage = message;

//   return {
//     modCode: function(){
//       let code = 456; // put this outside the scope
//       return code;
//     },
//     modMessage: function(){
//       let newMessage = `new ${message}`;
//       return newMessage;
//     },
//     revealMessage: function(){
//       if(message === code && typeof message === 'number'){
//         return this.secretMessage;
//       } else {
//         throw new Error();
//       }
//     }
//   }

// };

// module.exports = { lockBox };


// solution

const lockBox = (code, message) => {
  // write code here

  if(typeof code !== 'number' || typeof message !== 'string'){
    throw new Error();
  }
  let accessCode = code;
  let secretMessage = message;
  
  return {
    modCode: function(prevCode, newCode){
      if(prevCode !== newCode){
        throw new Error();
      } else {
        accessCode = newCode;
      }
      return accessCode
    },
    modMessage: function(passCode, newMessage){
      if(passCode !== accessCode){
        throw new Error('access denied');
      } else {
        secretMessage = newMessage;
        return secretMessage;
      }
    },
    revealMessage: function(passCode){
      if(passCode !== accessCode){
        throw new Error('access denied');
      } else {
        return secretMessage;
      }
    }
  }

};

module.exports = { lockBox };

