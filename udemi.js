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