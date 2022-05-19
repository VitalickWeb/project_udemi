'use strict';

//execises cycles
//вывести числа от 5 до 10
// for (let i = 5; i <= 10; i++) {
// 	console.log(i);
// }

//вывести числа в обатном порядке и остаовить если число равно 13
// for (let i = 20; i > 10; i--) {
// 	console.log(i);
// 	if (i < 14) {
// 		break;
// 	}
// }

//even nums
// for (let i = 2; i <= 10; i += 2) {
// 	console.log(i);
// }

//continiue for
// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

//continiue while
// let j = 2;
// while (j < 16) {
// 	j++;
// 	if (j % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(j);
// 	}
// }

//заполнить массив от 5 до 10
// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
// 	arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);


//arrays
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }
// console.log(result);


//обходим строки увеличивая числа в 2 раза
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
// 	if (typeof data[i] === 'string') {
// 		data[i] += ' - done';
// 	} else {
// 		data[i] = +data[i] * 2;
// 	}
// }
// console.log(data);


//revers array, two options
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
// 	result.push(data[i]);
// }

// for (let i = 1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - i];
// }
// console.log(result);



//figure building
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result)