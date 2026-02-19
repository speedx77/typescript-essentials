//define type after var
let msg: string = "Hello World";
console.log(msg)

//define params and return type of the func
function double(x: number): number{
    return x * 2

}

function sayMessage(): void{
    console.log(msg)
}

const triple = (x : number) : number => { 
    return x * 3
}

const triple2ndMethod = (x : number) => x * 3;

//function type declaration
let quadruple: (x: number) => number;

//function definition
quadruple = (y : number) => y * 4;

//array types
let names: string[] = ["Ryan", "Ham", "Jean", "Troy"]
let numbers: number[] = [1,2,3,4]

// never type highlights the lack of the type declaration
// let peoepl = []