// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//=============================================
const myFu = (value, c = 1) => {
	return value * c
}
//console.log(myFu(3, 9));
var str = 'fgfggg';
//console.log(str[0]);
//=============================================
//Установка свойства в объект, текущей даты создания обЪекта post
const newPost = (post, addedAt = Date()) => {
	// ...post, //если использовать ({тело функции без return})
	// addedAt, // addedAt: addedAt,
	const addDate = {
		...post,
		addedAt,
	}
	return addDate
}
const firstPost = {
	id: 1,
	author: 'Max',
}
newPost(firstPost)
// console.log(newPost(firstPost));
// console.table(newPost(firstPost));
//=============================================
//Отлов ошибки
const fnWithError = () => {
	throw new Error('Some error')
}
try {
	fnWithError()
} catch (error) {
	//console.error(error);
	//console.log(error.message);
}

//console.log('Contone...');
//=============================================
const myArr = [1, 2, 3,]

const newArr = myArr.map(e => {
	return e * 5
})
//console.log(newArr);
//=============================================
const sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number'
	}

	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive'
	}

	return a + b
}
//console.log(sumPositiveNumbers(2, -4));
//=============================================
// const val1 = 11
// const val2 = 15
// val1 && val2
// 	? myFu1(val1, val2)
// 	: myFu2()
let value = -5
const res = value >= 0 ? value : -value
//console.log(res);
//=============================================
const myObject = {
	x: 10,
	y: true,
	z: 'abc'
}
Object.values(myObject).forEach(key => {
	console.log(key, myObject[key]);
})
console.log(Object.keys(myObject));
console.log(Object.values({
	x: 10000,
	y: true,
	z: 'abcasdasda'
})); 