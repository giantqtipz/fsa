/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  if(Array.isArray(rooms)){
    return true;
  }
  
  // try with recursion later, or reduce..
  for(i=0;i<rooms.length;i++){
    for(j=0;j<rooms[i].length;j++){
      let firstRoom = rooms[i];
      let secondRoom = rooms[i][j];
      if(secondRoom.includes(firstRoom)) {
        return true;
      } else {
        return false;
      }
    }
  }

};

module.exports = { keysToRooms };

// //SOLUTION
// const keysToRooms = (rooms) => {
//   let keyRing = {0: true};

//   for(let i=0;i<rooms.length;i++){
//     if(keyRing[i]){
//       rooms[0].forEach((index) => {
//         keyRing[index] = true;
//       })} else {
//         return false;
//       }
//     }
//   }
//   return true
// };