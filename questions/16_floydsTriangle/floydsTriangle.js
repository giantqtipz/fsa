// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let output = '';

    let counter = 1;

    for(let i=0;i<=n;i++){
        for(let j=0;j<i;j++){
            output = output + counter;
            counter++;
        }
        output = output + '\n'
    }

    console.log(output);
};

module.exports = { floydsTriangle };
