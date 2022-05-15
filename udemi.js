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
let result = confirm('Are you here? ');
let answer = prompt('You like lesson js', 'yes');//ответ который сюда передал пользователь выводит строку
let get = 'Hello world!';
alert(get);

//записываем данные пользователя  вмассив
let arr = [];

arr[0] = prompt('Как ваше имя', '');
arr[1] = prompt('Как ваша фамилия', '');
arr[2] = prompt('Сколько вам лет', '');
console.log(arr);
//promt, alert, confirm блокируют построение страницы до того как они будут выполнены
console.log(typeof (null));// выведет object - официальная признанная ошибка!!!