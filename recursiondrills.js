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

// function stringSplitter(separator, str){
//   let indexofSeparator = str.indexOf(separator);

//   if(indexofSeparator < 0) {
//     return [str];
//   }

//   return  [str.slice(0,indexofSeparator),  ...stringSplitter(separator, str.slice(indexofSeparator+separator.length))];

// }

// // let myString="foo/bar"
// let myString = 'the  quick brown  fox jumps  over the  lazy dog';
// console.log(stringSplitter(' fox ', myString));

// BINARY REPRESENTATION
// input to the program --  decimal number
// output of the program --  binary  version of that number
// input to each recursive calls  -- Math.floor(num/2)
// output of each recursive calls -- num%2

//   5/2 = 2     5%2=1
//   2/2 = 1     2%2=0
//   1/2 = 0     1%2=1

// function binaryRep(num){
//   if(num/2 === 0){
//     return '';
//   }
//   let binary = Math.floor(num%2) // 1
//   return binaryRep(Math.floor(num/2)) + binary

// }
// console.log(binaryRep(5));

//FACTORIAL
// input to the program --  num
// output of the program --  fact(num)
// input to each recursive calls  -- num - 1
// output of each recursive calls -- num*num-2

// function factorial(num){
//   if(num === 1){
//     return 1;
//   }
//   return num * factorial(num-1);
// }


// function binaryMaker(num){
//   if(num/2 === 0) {
//     return ' ';
//   }

//   let quotient = Math.floor (num/2);
//   return num%2 + '' + binaryMaker(quotient);
// }

// console.log(binaryMaker(5));

//FIBONACCI
// input to the program --  num (number of times to do the operation)
// output of the program --  an array of the Fib sequence up to, num
// input to each recursive calls  -- array
// output of each recursive calls -- [...array, (array[array.length-2]+array[array.length-1])]

function fibonacci(num){
  if(num < 1){
    return [];
  }  
  if(num === 1){
    return [1]
  }
  if(num === 2){
    return [1,1]
  }
  let baseFib  = fibonacci(num-1);
  return [...baseFib, baseFib[num-3] + baseFib[num-2] ]
}

console.log(fibonacci(7)); // 1 1 2 3 5 8 13.