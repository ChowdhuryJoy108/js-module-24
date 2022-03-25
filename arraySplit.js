const numbers = [1,2,3,4,5,6,7,8];

const part = numbers.slice(2,5);

const removed = numbers.splice(2,5,77,88,99);

console.log(part);
console.log(removed);
console.log(numbers);

const together = numbers.join('ami');
console.log(together);

