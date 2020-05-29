//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (a, b) => {
    if(!Array.isArray(a) || !Array.isArray(b)){
        throw new Error();
    }

    let reverseA = b.reduce((current, next) => {
        return [next].concat(current); // .push doesn't work
    }, []);
 
    let reverseB = a.reduce((current, next) => {
        return [next].concat(current); 
    }, []);

    // for(i=b.length-1;i>=0;i--){
    //     reverseA.push(b[i]); // .push will work here
    // }

    // for(i=a.length-1;i>=0;i--){
    //     reverseB.push(a[i]);
    // }


    a.splice(0, a.length); // removes all items from array, from index 0 to end (length)
    b.splice(0, b.length);
    
    for(i=0;i<reverseA.length;i++){
        a.push(reverseA[i]);
    }

    for(i=0;i<reverseB.length;i++){
        b.push(reverseB[i]);
    }

    // create temporary variables, then loop through them to reassign
    // to the original variables to avoid mutating the original (deep equality)
};

module.exports = { arrayexchange };
