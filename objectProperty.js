const students = [
    {id:21, name:'omor sunny'},
    {id:31, name:'manna'},
    {id:41, name: 'moyuree'},
    {id:71, name: 'dipjol'}
];

// Normal way to access property from array of object


// const namesArray = [];
// for(let i = 0; i < students.length ; i++){
//     const names = students[i].name;
//     namesArray.push(names); 
// }

// console.log(namesArray);


//Alternative way 

const names = students.map(s => s.name); // gives the all name property from the array
const id  = students.map(s => s.id); // gives all the ids from the array using arrow function
console.log(names); // printing all the names
console.log(id); // priting all the ids

// now filter " i want id's over 41" 
const idRes = students.filter(s => s.id > 40);
console.log(idRes); // shows all id above 40 
const biggerOne = students.find(s => s.id > 41);
console.log(biggerOne); // first match