// int and float are the same (number)
let x: number = 7;
let y: number = 3.14159265358979323846

let greeting: string = "Hi"

let isPresent: boolean = true;

let person: object = {
    name: "Ryan",
    userName: "speedx77",
}

let numSet: Array<number> = [1,2,3];
let numbers2: number[] = [1,2,3];

// tuple -> think db row
let personTuple: [string, number, boolean] = ["Ryan", 25, false];

//any type (can be defined and changes to any type at anytime)
let something : any = "Hello";
something = 42;
something = true;

//any type useful when you want to store data that you are not sure what the type will be
let data: any[] = ["Hi", 7, true, []];

//undefined or null
let nothing: undefined = undefined;
let nothing2: null = null;

//never type
let myArr = [];
// ^ undefined array