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
//Установка свойства в объект текущей даты
const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt, // addedAt: addedAt,
})
const firstPost = {
	id: 1,
	author: 'Max',
}
newPost(firstPost)
console.log(newPost(firstPost));
console.log(newPost);