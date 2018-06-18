'use strict';

//COUNTING SHEEP
// the input: the number to countdown from
// the output: the counting downs themselves (a string)
// input to rc: current count number
// output of rc: function itself, w/ decrement input


// function countSheep(flockSize) {
// //Base case
//   if (flockSize === 0) {
//     return 'zzzzzzzz';
//   }

//   //General case
//   console.log(`${flockSize} - Another sheep jump over the fence`);
//   return (countSheep(flockSize -1));

// }

// console.log(countSheep(5));


// ARRAY DOUBLE
// the input: an array
// the output: the array doubled
// input to rc: array[0]
// output of rc: pushing to a new array, array.slice(1)


function doubleArray(holder, array) {
  //Base case
  if (array.length === 0) {
    return holder;
  }
    
  //General case
  holder = [(array[0]*2), ...holder  ];
  return doubleArray(holder, array.slice(1));

}

const myArray = [1, 3, 5, 7];
// const myholder = [];
console.log(doubleArray([], myArray));