'use strict';

//практика часть 1
//####################################################################
// const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

// let personalMoviesDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }

// const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
// const lastWotchOfFilms1 = prompt('Один из последних просмотренных фильмов', '');
// const LastFilm2 = prompt('Один из последних просмотренных фильмов', '');
// const lastWotchOfFilms2 = prompt('Один из последних просмотренных фильмов', '');

// personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
// personalMoviesDB['movies'][LastFilm2] = lastWotchOfFilms2;

// console.log(personalMoviesDB);



//Практика часть 2
//########################################################################
// const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

// let personalMoviesDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }

// for (let i = 0; i < 2; i++) {
// 	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
// 	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');

// 	if (LastFilm1 != null && LastFilm1 != '' && lastWotchOfFilms1 != null && lastWotchOfFilms1 != '' && LastFilm1.length <= 12) {
// 		personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
// 	} else {
// 		i--;
// 	}
// }

// console.log(personalMoviesDB);


//Практика часть 3 checked count
//########################################################################
// const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

// let personalMoviesDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }

// for (let i = 0; i < 2; i++) {
// 	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
// 	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');

// 	if (LastFilm1 != null && LastFilm1 != '' && lastWotchOfFilms1 != null && lastWotchOfFilms1 != '' && LastFilm1.length <= 12) {
// 		personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
// 	} else {
// 		i--;
// 	}
// }

// if (numberOfFilms < 10 && numberOfFilms > 0) {
// 	console.log('Просмотренно очень мало фильмов');
// } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
// 	console.log('Вы отличный зритель!');
// } else if (numberOfFilms > 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('unknowch type error');
// }

// console.log(personalMoviesDB);



//Практика часть 3 checked count
//########################################################################
// const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

// let personalMoviesDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }

// for (let i = 0; i < 2; i++) {
// 	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
// 	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');

// 	if (LastFilm1 != null && LastFilm1 != '' && lastWotchOfFilms1 != null && lastWotchOfFilms1 != '' && LastFilm1.length <= 12) {
// 		personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
// 	} else {
// 		i--;
// 	}
// }

// if (numberOfFilms < 10 && numberOfFilms > 0) {
// 	console.log('Просмотренно очень мало фильмов');
// } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
// 	console.log('Вы отличный зритель!');
// } else if (numberOfFilms > 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('unknowch type error');
// }

// console.log(personalMoviesDB);




//Практика часть 4 cycles while and do while
//########################################################################
const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

let personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

// let i = 0
// while (i < 2) {
// 	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
// 	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');
// 	i++;

// 	if (LastFilm1 != null && LastFilm1 != '' && lastWotchOfFilms1 != null && lastWotchOfFilms1 != '' && LastFilm1.length <= 12) {
// 		personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
// 	} else {
// 		i--;
// 	}
// }

let i = 0
do {
	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');
	i++;

	if (LastFilm1 != null && LastFilm1 != '' && lastWotchOfFilms1 != null && lastWotchOfFilms1 != '' && LastFilm1.length <= 12) {
		personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
	} else {
		i--;
	}
}
while (i < 2);

if (numberOfFilms < 10 && numberOfFilms > 0) {
	console.log('Просмотренно очень мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
	console.log('Вы отличный зритель!');
} else if (numberOfFilms > 30) {
	console.log('Вы киноман');
} else {
	console.log('unknowch type error');
}

console.log(personalMoviesDB);


