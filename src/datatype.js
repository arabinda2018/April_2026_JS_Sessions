//data types: type of data
//1.Primitive e Data type: memory is fixed  - pre defined data types

//number
//string
//boolean  true or false
//bigint
//undefined
//null
//2. Non-primitive data type: Reference type memory is not fixed - user defined data types
//Array
//object
//functions
//map/list/set

//3 identifiers: var,let,const
//1.number:
//size : 8 bytes=8*8=64 bits
//1 byte=8 bits

let x=10;
console.log(x);
let y=20.5;
console.log(y);
let i =-123
console.log(typeof x);
console.log(typeof y);
console.log(typeof i);


//2.string/characters:
let name="John";
console.log(name);
console.log(typeof name);

let m1='$';
console.log(m1);
console.log(typeof m1);


let p;
console.log(p);
console.log(typeof p);

//3.boolean:true or false
//4 bytes
let flag=true;

console.log(flag);

console.log(typeof flag);

let isElementExist=true;
console.log(isElementExist);
console.log(typeof isElementExist);

//4.undefined: when we declare a variable but do not assign any value to it, it is undefined
//size:0 bytes
let firstname= undefined;
console.log(firstname);
console.log(typeof firstname);

//null: when we want to assign a variable with no value, we can assign null to it
//size:0 bytes
let lastname=null;
console.log(lastname);
console.log(typeof lastname);// exisiting bug in js it should return null but it returns object

//re-initialization of variable
let c =10;
c=20;
c=30;
c=1000;
c="naveen"; 
console.log(c);

//var  --old js way of decalring the varaibles.

var lastname ="arabinda";
var toolname ="playwright";
var toolname="selenium";
console.log(toolname);



//const==fixed value

// const title;
// console.log(title);
const title ="Loginpage";
console.log(title);

//const:
//redeclaration no
//reassignment no

//let
//redeclaration  :no
//reassignment : Yes

let l =5;
let l =9;
console.log(l);

// let l =25;
// l=92;
// console.log(l);


//var is not a good practice
//redeclartion :yes
//reassignment :yes

var l =35;
var l=39;
console.log(l);
