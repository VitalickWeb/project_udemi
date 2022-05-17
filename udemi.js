'use strict';

//Type of data
//#################################
// let number = 8; //type number
// let string = 'Vit'; //type string
// let boolean; // true or false
// let nothing;// null or undefined
// let object = {
// 	name: 'Vit',
// 	age: 41,
// 	isMarried: true
// };
// console.log(object['name']);
// console.log(object['age']);
// console.log(object['isMarried']);
// let arr = []//массив это частный случай объектов


//Простое взаимодействие с пользователем
//#########################################
// let result = confirm('Are you here? ');
// let answer = prompt('You like lesson js', 'yes');//ответ который сюда передал пользователь выводит строку
// let get = 'Hello world!';
// alert(get);

// //записываем данные пользователя  вмассив
// let arr = [];

// arr[0] = prompt('Как ваше имя', '');
// arr[1] = prompt('Как ваша фамилия', '');
// arr[2] = prompt('Сколько вам лет', '');
// console.log(arr);
// //promt, alert, confirm блокируют построение страницы до того как они будут выполнены
// console.log(typeof (null));// выведет object - официальная признанная ошибка!!!


//Интерпаляция
// let name = 'Vit';
// console.log(`Will be strong ${name}`);

// let arrHobbys = ['sport', ' programming', ' swiming', ' musik'];
// console.log(`I like this hobbys ${arrHobbys} and i also study english.`);

//Логические операторы
//#################################################
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nugets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nugets) {//приоритет здесь отдается оператору сравнение, после оператор и, и потом уже идет сравнение или
// 	console.log('Все довольны');
// } else {
// 	console.log('Мы уходим');
// }

// if (hamburger === 3 && (cola === 2 || fries === 3) && nugets) {
// 	console.log('!!!');//здесь приоритет вычислениябудет происходить изначально в скобках
// } else {
// 	console.log(!0);
// }

//Цыклы
//#######################################################################3
// let i = 1;
// while (i < 8) {//условие выполняется пока меньше 8ми
// 	console.log(i);
// 	i++;
// }

// let num = 0;
// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 8);//условие проверяется после отработки цикла

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 4) {
// 		console.log(i);
// 		break;//используем инструкцию break что бы не тратить ресурсы в пустую
// 	}
// }

// let cont = 10;
// for (let i = 0; i < cont; i++) {
// 	if (i === 5) {
// 		continue;//прекращает тот шаг который нам не нужен, но не прекращает полностью цикл
// 	}
// 	console.log(i);
// }


//Вложенные циклы
//###############################################################
for (let i = 0; i < 3; i++) {
	console.log(i);//0 перввоя прокрутка 1 вторая прокрутка 2 третья прокрутка
	for (let j = 0; j < 3; j++) {
		console.log(j);//0,1,2 перешел работать этот цикл 0,1,2 второй переход 0,1,2 третий переход и завершение работы циклов.
	}
}

// *
// **
// ***
// ****
// *****
// ******
//1 вариант
// const length = 7;
// for (let i = 0; i < length; i++) {
// 	let str = '';
// 	for (let j = 0; j < i; j++) {
// 		str += '*';
// 	}
// 	console.log(str);
// }

//2 вариант
const len = 7;
let string = '';
for (let i = 0; i < len; i++) {
	for (let j = 0; j < i; j++) {
		string += '*';
	}
	string += '\n';
}
console.log(string);