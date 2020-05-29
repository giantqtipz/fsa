// Initial Attempt
// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if(arguments.length !== 2 || typeof arguments !== 'number'){
        throw 'error';
    } else {
        return num1 * num2;
    }
};

// module.exports = { multiply };

// Take 2
// This stretch requires you to write your own test cases

// const multiply = (num1, num2) => {
//     if(arguments.length < 2 || typeof num1 !== 'number'){
//         throw 'error';
//     } else {
//         return num1 * num2;
//     }
// };

// module.exports = { multiply };