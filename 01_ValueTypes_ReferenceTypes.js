//Value types (primive types)
//[Number, String, Boolean, Symbol, Null, Undefined]
let x = 10;
let y = x;
console.log(x, y);

x = 20;
console.log(x, y);

//Reference Types [Object, Array]
let a = { valeur : 10};
let b = a;
console.log(a, b);

a.valeur = 20;
console.log(a, b);