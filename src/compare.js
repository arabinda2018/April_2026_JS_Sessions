//== vs ===
//== loole equality : it will check only the value
//=== strict equality: it will check value + type
console.log(10==10);

console.log(10=="10");
console.log("10"==10);

console.log("*********");
console.log(10===10);

console.log(10==="10");
console.log("10"===10);
console.log("_______________");
//true =1
//false =0
console.log(true==1);
console.log(true===1);

console.log(false==0);
console.log(false===0);
console.log(""==0);
console.log(""===0);
console.log([]==0);
console.log([]===0);


let n1=10;
let n2 ="10";

console.log(n1==n2);
console.log(n1===n2);
console.log(null==undefined);
console.log(null===undefined);
console.log(typeof null);
console.log(typeof undefined);
console.log([]=="");
console.log([]==="");

console.log([]==[]); //121212==342424 compare memory address


