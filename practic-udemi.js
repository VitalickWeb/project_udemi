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
const numberOfFilms = +prompt('Сколькл фильмов вы уже посмотрели?', '');

let personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

for (let i = 0; i < 2; i++) {
	const LastFilm1 = prompt('Один из последних просмотренных фильмов', '');
	const lastWotchOfFilms1 = prompt('На сколько оцените его?', '');

	personalMoviesDB['movies'][LastFilm1] = lastWotchOfFilms1;
}

console.log(personalMoviesDB);