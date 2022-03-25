const numbers = [3,4,5,6,7,8,9];

// const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output)

// function Square(element){
//     return element * element;
// }


// map 
// const result = numbers.map(function(element){
//     return element * element;
//     // console.log(element,index,array);
// });

// console.log(result);



//filter 

const res = numbers.filter(x => x < 5);
console.log(res); // gives an array [with number less than 5]

const isThere  = numbers.find(x => x > 5);
console.log(isThere); // find gives first match