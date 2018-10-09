let myName: string = 'Max'; //string

let myAge: number = 27; //number

let hasHobbies: boolean = false; //boolean

let myRealAge: number;
myRealAge = 27;

let hobbies: any[] = ["Cooking", "Sports"];

let address: [string, number] = ["Krakowska", 3];

enum Color {
    Gray,
    Green = 100,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

function returnMyName(): string {
    return myName;
}

function sayHello(): void {
    console.log("Hello!");
}

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;

let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
}

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
}

let myRealRealAge: number | string = 27;
myRealRealAge = "27";

let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

function neverReturns():never { //never return anything
    throw new Error('An Error!');
}

let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;