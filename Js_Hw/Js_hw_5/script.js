// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNumb = [2,10,6,4];
//
// let foo = (array) => {
//     let sum = 0;
//     for (let i = 0;i<array.length;i++){
//         sum += array[i]
//     }
//     return sum / array.length
// }
//
// console.log(foo(arrNumb));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let arr = [3, 6, 8, 3, 1, 0, 4, -3, 75, 2];
//
// let minMaxArray = (array) => {
//
//     let min = 0;
//     let max = 0;
//     for (const iter of array) {
//         if (iter < min) {
//             min = iter
//         } else if (iter > max) {
//             max = iter
//         }
//
//     }
//     console.log(max);
//     return min;
// };
//
// console.log(minMaxArray(arr));

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let randomArray = (arr  ) => {
//     let array = [];
//     for (let i = 0; i < arr ; i++){
//         array.push(Math.round(Math.random()*100))
//     }
//     return array
// }
// console.log(randomArray(15,));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let randomArray = (length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*limit));
//
//     }
//     return array
// }
// console.log(randomArray(20, 40));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let sortArray = (arr) => {
//     let array = [];
//     debugger;
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = arr[(arr.length - 1) - i]
//     }
//     return array
// }
// let array = [1,2,3,4,5];
// console.log(sortArray(array));

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let s = (a,b) => a*b;
// console.log(s(10, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let s = (r, p) => 2 * p * r * r;
// console.log(s(10, 3.14));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let s = (h, r) => 2 * 3.14 * r * h;
// console.log(s(10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let data = (arr) => {
//     for (const iter of arr) {
//         console.log(iter)
//     }
// }
// let array = [2,1,5,23,42];
// data(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let pText = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// pText('hallo')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let ulText = (text) => {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// ulText("hallo");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let ulText = (text, length) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < length; i++){
//         document.write(`<li>${text}</li>`)
//     }
//         document.write(`</ul>`)
// }
// ulText('hallo' , 50);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let bdArray = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// let array = [10,`qwerty`,true];
// bdArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let user = [
//     {id: 1, name: 'Oleksandr', age: 20},
//     {id: 2, name: 'Nastia', age: 21},
//     {id: 3, name: 'Oleg', age: 22},
//     {id: 4, name: 'Oleksa', age: 24},
// ]
//
// let arrayUser = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// arrayUser(user);

// - створити функцію яка повертає найменьше число з масиву
//
// let array = [4, 3, 6, 32, 7, 9, 4, 3, 6]
//
// let minNumber = (arr) => {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min
// }
// console.log(minNumber(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sumArray = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+=arrElement
//     }
//     return sum
// }
// console.log(sumArray([2, 4, 1, 5, 7, 8]));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями
//
// let sortArray = (arr) =>{
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = arr[(arr.length - 1) - i]
//     }
//     return array
//
// }
// let array = [2,1];
// console.log(sortArray(array));