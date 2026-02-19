//method 1 - general object but not defining the attributes
let me: object = {
    name: "Ryan",
    hairColor: "black",
    age: 25,
}

//method 2 - specify the types for the attributes of the object (cumbersome though)
let me2: {name: string, hairColor: string, age: number} = {
    name: "Ryan",
    hairColor: "black",
    age: 25,
}

//method 3 - custom object type, all attributes are required
type Person = {name: string, hairColor: string, age: number}

let me3: Person = {
    name: "Ryan",
    hairColor: "black",
    age: 25,
}

// optional attributes
type Person2 = {name: string, hairColor?: string, age?: number};

let me4: Person2 = {
    name: "Ryan"
}