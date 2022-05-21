'use strict';

//function declaration
// function first() {
// 	console.log('Hello incubator');
// }

// first();


//parameters function
// function firstParam(text, num) {
// 	console.log(text, num);
// }
// firstParam('hi i am Vit', 19);


//function and variables
let num = 20;

function func(test) {
	num = test;
}
console.log(func(30));// == undefined
console.log(num);// == 30
