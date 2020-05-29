//Given an object of likely nested objects, where the final element is an array containing positive integers
//write a function that returns the name of the root property that a particular integer lives in.
//ie:
// object = {
//   "one": {
//       "l1": {
//           "val1": [40, 65, 113, 200]
//        }
//   },
//   "two": {
//       "l1": [45, 1, 75, 80],
//       "l2": [12, 38, 2, 15]
//   },
//   "three": {
//       "l1": [10, 92, 53, 71],
//       "l2": [82, 34, 6, 19]
//   }
// }
//getrootvalue(object,40)=>'one'
//returns -1 if value isn't found

const getrootvalue = (obj, val) => {
    let result ='';

    const test = values.map((value) => {
        if(val === value) {
            return Object.keys(value);
        }
        return Object.values(value);
    }).map((nestedValue) => {
        console.log(nestedValue)
    });

    // const iterate = (arg) => { // did try recursion but failed..
    //     for(let key in arg){
    //         let currentElement = arg[key];
    //         if (typeof currentElement === 'object'){
    //             iterate(currentElement)
    //         }
    //         if (Array.isArray(currentElement)){
    //             for(let i=0;i<currentElement.length;i++){
    //                 if(currentElement[i] === val) {
    //                     result = Object.key
    //                 }
    //             }
    //         }
    //     }
    // }
    return result;
};

module.exports = { getrootvalue };
