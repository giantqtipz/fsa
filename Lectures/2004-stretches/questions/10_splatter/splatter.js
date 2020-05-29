//write the splatter function

const splatter = (arguments) => {
  const arr = [arguments];
  console.log(arr);

  let sum = {};

  arr.forEach(object => {
    for(let property in object) {
      if (sum[property] === undefined) {
        sum[property] = object[property];
      } 
    }
  });
  console.log(Object.values(sum));
};

module.exports = { splatter };
