// const name = '0'; // true
// every number is true except 0 
// every string is also true except '' empty string
// if we declare a variable but not define it thn that variable will be undefined then js will give false. // undefined

// for null js also shows false. //null
// for NaN js also shows false. // NaN 
// name = false also shows false .

let name = false;

if(name){
    console.log('consition is true');
}else{
    console.log('condition is false');
}