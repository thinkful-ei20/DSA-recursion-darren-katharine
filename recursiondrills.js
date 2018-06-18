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


// function doubleArray(holder, array) {
//   //Base case
//   if (array.length === 0) {
//     return holder;
//   }
    
//   //General case
//   holder = [(array[0]*2), ...holder  ];
//   return doubleArray(holder, array.slice(1));

// }

// const myArray = [1, 3, 5, 7];
// // const myholder = [];
// console.log(doubleArray([], myArray));

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
// the input: string
// the output: string reversed
// input to rc: str.slice(1)
// output of rc: last letter + 
// function reverse(str){
//   if(!str.length){
//     return "";
//   }
//   return str.charAt(str.length-1) + reverse(str.slice(0,-1));
// }
// console.log(reverse('string'));

//Nth Triangluar Number
// the input: number
// the output: number of dots in triangle
// input to rc: 
// output of rc: 

// function triangular(n){
//   if(n === 0){
//     return 0;
//   }
//   return n + triangular(n-1);
// }
// //1 + 2 + 3 + 4 + 5
// console.log(triangular(6)); // ----> 15

//STRING SPLITTER
// the input: a string
// the output: an array
// input to rc: the string, mutated
// output of rc: cumulative array, modified string

function stringSplitter(separator, str){
  let indexofSeparator = str.indexOf(separator);

  if(indexofSeparator < 0) {
    return [str];
  }

  return  [str.slice(0,indexofSeparator),  ...stringSplitter(separator, str.slice(indexofSeparator+separator.length))];

}


function binaryMaker(num){
  if(num/2 === 0) {
    return ' ';
  }

  let quotient = Math.floor (num/2);
  return num%2 + '' + binaryMaker(quotient);
}

console.log(binaryMaker(8));