// // Initial Attempt
// const { multiply } = require('./multiply');

// describe('multiply testing', () => {
//   test('it should ensure it receives two numbers', () => {
//     // test some values that should fail

//     expect(() => multiply(arguments.length < 2).toThrow('arguments less than 2'));

//     expect(() => multiply(typeof arguments !== 'number').toThrow('arguments must be numeric'));
//   });

//   test('it returns the product of two numbers', () => {
//     // test the type of the returned value
//     expect(() => multiply(2,2)).toBe(4);

//     // test that the returned value is correct
//     expect(/*fill this in*/).toBe(/*fill this in*/);

//     // test some other values
//     expect(() => multiply(4,20)).toBe(80);
//   });

//   test('it is not hardcoded (hint: use random numbers)', () => {
//     // test some random values
//     let randomNumber = Math.floor(Math.random() * Math.floor(100));
//     // const result = multiply(Math.ceil(Math.random*10)), multiply(Math.ceil(Math.random*10));
//     // expect(result4).toBeLessThan(101);
//     expect(multiply(randomNumber, randomNumber)).toBe(randomNumber * randomNumber);
//   });
// });


// // Take 2
// // const { multiply } = require('./multiply');

// // describe('multiply testing', () => {
// //   test('it should ensure it receives two numbers', () => {
// //     // test some values that should fail

// //     expect(() => multiply(1).toThrow());

// //     expect(() => multiply('random', 2).toThrow());
// //   });

// //   test('it returns the product of two numbers', () => {
// //     // test the type of the returned value
// //     expect(multiply(2,2)).toBe(4);

// //     // test that the returned value is correct
// //     expect(multiply(3,4)).toBe(12);

// //     // test some other values
// //     expect(multiply(4,20)).toBe(80);
// //   });

// //   test('it is not hardcoded (hint: use random numbers)', () => {
// //     // test some random values
// //     let randomNumber = Math.ceil(Math.random() * 10);
// //     expect(multiply(randomNumber, randomNumber)).toBeLessThan(101);
// //   });
// // });

