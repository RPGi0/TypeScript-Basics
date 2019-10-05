"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "HooHaa";
console.log(message);
// ================================== //// ================================== //
// --TYPES-- //
// syntax -> let varName: type = value;
var isBegginer = true;
var total = 0;
var name = 'Gio Dude';
var sentence = "My name is " + name + "\nI'm new at this!";
console.log(sentence);
//subTypes: assignable to bool, num, str
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//array types
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
// pupil type: num of items in array are fixed to num of types declared, in order of declaration.
var person1 = ['Jimbob', 26];
// type:enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
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
var a;
a = 10;
a = true;
var b = 20;
// b = true; // throws error b/c b is declared with value type:number
// Union types
var multiType;
// no errors b/c of type declaration
multiType = 101;
multiType = true;
// ================================== //// ================================== //
// --FUNCTIONS-- //
// function funcName(arg1: type, arg2: type): returnType{...}
// params are default required; if function is called without params, throws err
function add(num1, num2) {
    return num1 + num2;
}
add(5, 11);
// optional params puncuated with question mark(?) 
//    -> function funcName(arg1: type, arg2?: type)...
//  n number of opt. params accepted; opt. params MUST come after req. params
function addOpt(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
    ;
}
addOpt(6, 10);
addOpt(10);
// default params similar to opt. params; default val instead of undefined
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
    ;
}
addDefault(6, 10);
addDefault(10);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// ================================== //// ================================== //
// --CLASSES & ACCESS MODIFIERS-- //
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morrow " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Cotton Eye Joe');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Brock');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
