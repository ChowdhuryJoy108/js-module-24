let bonus = 20; // global scope 

function sum( first, second){
    let result = first + second + bonus; // function scope
    // console.log(result);
    // console.log('bonus ' + bonus);
    if(result > 9){
        let mood = 'happy';
        mood = 'fishy';
        mood = 'funky';
        mood = 'cranky';
        // console.log(mood);
    }
    // console.log(mood); // cannot access with let and const coz they are block scope, but with var it will be accessable.
    console.log(day); // undefined
    var day = "friday";
    //-----------//
    var day = "friday";
    console.log(day); // shows friday

    //---------------//
    console.log(day); // gives error " cannot access day before initialization "
    let day = 'friday';

    //--------//
    let  day = "friday";
    console.log(day); // gives no error

    return result;
}

const output = sum (3,7);
//console.log(result); // can't access 
// console.log(bonus);
// console.log(output);