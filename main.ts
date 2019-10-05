export {}; // lets compiler see file as a module instead of a script

let message = "HooHaa";
console.log(message);

// ================================== //// ================================== //

// --TYPES-- //
// syntax -> let varName: type = value;
let isBegginer: boolean = true;
let total: number = 0;
let name: string = 'Gio Dude';

let sentence: string = `My name is ${name}
I'm new at this!`;
console.log(sentence);

//subTypes: assignable to bool, num, str
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

//array types
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];

// pupil type: num of items in array are fixed to num of types declared, in order of declaration.
let person1: [string, number] = ['Jimbob', 26];

// type:enum
enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green;
// returns arrPosition of property based on default value (ie. Red=5, Green=6, Blue=7)
console.log(c); // 6

/*
// type:any
// (access properties of / can call or construct) all types
let randVal: any = 10;
randVal = true; // no error b/c type=any
randVal = 'GI Joe'; // no error b/c type=any

let myVar: any = 10;
console.log(myVar); 
*/
/*
// type:unknown 
// similar to type:any, but can't access properties nor call or construct 
let myVar2: unknown = 10;
// checks if obj has property `name`
function hasName(obj: any): obj is {name: string} {
  return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasName(myVar2)) {
  console.log(myVar2.name);
};

myVar(); 
(myVar2 as string).toUpperCase(); // 'as' to caste myVar2 as type:string
*/

// --TYPE INFERENCE-- //
// takes place when initalizing variables
// provides static type checking and IntelliSense support
let a;
a = 10;
a = true;

let b = 20;
// b = true; // throws error b/c b is declared with value type:number

// Union types
let multiType: number | boolean;
// no errors b/c of type declaration
multiType = 101; 
multiType = true;

// ================================== //// ================================== //

// --FUNCTIONS-- //
// function funcName(arg1: type, arg2: type): returnType{...}
// params are default required; if function is called without params, throws err
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(5, 11);

// optional params puncuated with question mark(?) 
//    -> function funcName(arg1: type, arg2?: type)...
//  n number of opt. params accepted; opt. params MUST come after req. params
function addOpt(num1: number, num2?: number): number {
  if (num2) {return num1 + num2;}
  else {return num1};
}
addOpt(6, 10);
addOpt(10);

// default params similar to opt. params; default val instead of undefined
function addDefault(num1: number, num2: number = 10): number {
  if (num2) {return num1 + num2;}
  else {return num1};
}
addDefault(6, 10);
addDefault(10);

// ================================== //// ================================== //

//  --INTERFACES-- //

//used as type; keys can be optional
interface Person {
  firstName: string;
  lastName?: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);

// ================================== //// ================================== //
// --CLASSES & ACCESS MODIFIERS-- //

class Employee { // has 3 members
  employeeName: string; // member1

  constructor(name: string) { // member2
    this.employeeName = name;
  }

  greet() { // member3
    console.log(`Good Morrow ${this.employeeName}`)
  }
}

let emp1 = new Employee('Cotton Eye Joe');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager delegating task`);
  }
}

let m1 = new Manager('Brock');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);