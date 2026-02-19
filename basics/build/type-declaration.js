//define type after var
let msg = "Hello World";
console.log(msg);
//define params and return type of the func
function double(x) {
    return x * 2;
}
function sayMessage() {
    console.log(msg);
}
const triple = (x) => {
    return x * 3;
};
const triple2ndMethod = (x) => x * 3;
//function type declaration
let quadruple;
//function definition
quadruple = (y) => y * 4;
//array types
let names = ["Ryan", "Ham", "Jean", "Troy"];
let numbers = [1, 2, 3, 4];
// never type highlights the lack of the type declaration
// let peoepl = []
