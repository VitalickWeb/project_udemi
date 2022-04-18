'use strict';

// let numberOfFilms = prompt('Сколько всего вы посмотрели фильмов?', '');

// let personalMoviesDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// let i = 0;

// while (i < 2) {
// 	let lastFilm = prompt('Какой из последних фильмов вам понравился больше?', '');
// 	let evalFilm = prompt('Как оцените его?', '');

// 	if (lastFilm != null && evalFilm != null && lastFilm != '' && evalFilm != '' && lastFilm.length < 10) {
// 		personalMoviesDB['movies'][lastFilm] = evalFilm;
// 		console.log('done');
// 	} else {
// numberOfFilms = prompt('Сколько всего вы посмотрели фильмов?', '');
// lastFilm = prompt('Какой из последних фильмов вам понравился больше?', '');
// evalFilm = prompt('Как оцените его?', '');
// 		console.log('dundon)))');
// 		i--;
// 	}
// 	i++;
// }

// console.log(personalMoviesDB);

//ПЕРЕДАЧА ОБЪЕКТА ПО ССЫЛКЕ
// let obj = {
// 	a: 5,
// 	B: 2
// }

//const copy = obj; //в переменную copy кладется ссылка на уже существующий объект!

//copy.a = 10;// здесь модифицируем переданный объект

//console.log(copy);
//console.log(obj);

//КОПИРОВАНИЕ ОБЪЕКТОВ
// function copyObj(mainObj) {
// 	let copyObj2 = {};

// 	for (let key in mainObj) {
// 		copyObj2[key] = mainObj[key];
// 	}

// 	return copyObj2;
// }

// const numbers = {
// 	a: 3,
// 	b: 5,
// 	c: 8,
// 	x: {
// 		numOne: 1,
// 		numTwo: 4
// 	}
// }

// const newNum = copyObj(numbers);

// newNum.a = 10;
// newNum.x.numOne = 10;

//console.log(newNum);
//console.log(numbers);
//При клонировании объектов есть 2 очень важных понятия - это глубокие и поверхностные копии объекта!

//Добавляем объект к объекту с омощью метода Object.assing();
// let addObj = {
// 	i: 22,
// 	k: 88
// }

//console.log(Object.assign(numbers, addObj));// создана независимоя копия объекта

//Вариан клонирования к пустому объекту
// const clone = Object.assign({}, addObj);
// clone.i = 28;
// console.log(addObj);
// console.log(clone);

//РАБОТА С МАССИВАМИ - КОПИРУЕМ МАССИВЫ
//const oldArr = ['a', 'b', 'c'];
//const newArr = oldArr;//так мы передаем массив по ссылке

// console.log(oldArr);
// console.log(newArr);

//const oldArr2 = ['a', 'b', 'c'];
//const newArr2 = oldArr2.slice();//так мы копируем массив

// newArr2[1] = 'changeElem';
// console.log(oldArr2);
// console.log(newArr2);


//В es-6 оператор разворота (...spred) появился для массивов,ав es-8 для объектов
// let video = ['yotube', 'vimeo', 'kiwi'];
// let blogs = ['wordpress', 'livejournal', 'bloger'];
// let internet = [...video, ...blogs, 'vk', 'telegram'];
// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// let num = [2, 4, 8];

// log(...num);

//СОЗДАНИЕ ПОВЕРХНОСТНЫХ КОПИЙ ОБЪЕКТОВ
// let arr = ['a', 'c'];
// let newArr = [...arr];
// newArr[1] = 'change';
// console.log(newArr);

// let spredObj = {
// 	one: 1,
// 	two: 2
// }
// let newObj = { ...spredObj };
// newObj.one = 3;
//console.log(newObj);//перезаписали объект с помощью оператора spred!



//Прототипноориентированное программирование
//смысл ООП заключается в том что мы представляем любую вещь как объект с набором свойств и методов!
// let str = 'some';
// let strObj = new String(str);

//console.log(typeof (str));
//console.log(typeof (strObj));//обернулистроку в какой то объект



//РЕФАКТОРИНГ КОДА
// let personalMovieDB = {
// 	count: 0,//свойства, которые описывают базу данных
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {//методы, которые модифицируют базу данных
// 		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');//записываем в count число просмотров

// 		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		}
// 	},
// 	questionOfMovies: function () {//записываем ответы от пользователя в movies
// 		for (let i = 0; i < 2; i++) {
// 			let lastMovie1 = prompt('Один из последних просмотренных фильмов', '');
// 			let evalMovie1 = prompt('На сколько оцените его?', '');

// 			if (lastMovie1 != null && evalMovie1 != null && lastMovie1 != '' && evalMovie1 != '' && lastMovie1.length < 10) {
// 				personalMovieDB['movies'][lastMovie1] = evalMovie1;
// 				console.log('done');
// 			} else {
// 				i--;
// 				console.log('donedon');
// 			}
// 		}
// 	},
// 	writeYourGenres: function () {//записываем ответы от пользователя в массив genres
// 		for (let i = 0, num = 1; i < 3; i++, num++) {
// 			console.log(personalMovieDB['genres'][i] = prompt(`Ваш любимый жанр ${num}`, ''));
// 		}
// 	},
// 	showMyDB: function () {
// 		if (personalMovieDB['privat'] != false) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	toggleVissibleMyDB: function () {// тоглим privat
// 		if (personalMovieDB['privat'] === false) {
// 			personalMovieDB['privat'] = false;
// 		} else {
// 			personalMovieDB['privat'] = true;
// 		}
// 	}
// };

// personalMovieDB.start();
// personalMovieDB.questionOfMovies();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVissibleMyDB();

// personalMovieDB['genres'].forEach(function (elem, index) {
// 	console.log(`Любимый жанр ${index += 1} - 'это ${elem}`);
// });

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sum = 0;

// arr.forEach(function (elem, index) {
// 	console.log(elem, index += 1);
// });




