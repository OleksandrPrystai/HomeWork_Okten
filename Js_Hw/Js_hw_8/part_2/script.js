// a) додає клас з назвою групи, елементу з ід main_header
//
// const classAdd = document.getElementById('main_header');
// classAdd.classList.add('Group')

// b) робить шириниу елементу ul 400px
//
// let ulWidth = document.getElementsByTagName('ul');
// for (const ulWidthElement of ulWidth) {
//     ulWidthElement.style.width = '400px'
//     ulWidthElement.style.background = 'red'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const classWidth = document.getElementsByClassName('linkList');
// for (const classWidthElement of classWidth) {
//     classWidthElement.style.width = '50%'
//     classWidthElement.style.background = 'blue'
//     classWidthElement.style.margin = '10px'
//
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// const textClass = document.getElementsByClassName('listElement2')[0];
// console.log(textClass.innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let liAll = document.getElementsByTagName('li');
// for (const liAllElement of liAll) {
//     liAllElement.style.backgroundColor = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// const addClass = document.getElementsByTagName('a');
// for (const addClass1 of addClass) {
//     addClass1.className = 'anchor'
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// const allA = document.getElementsByTagName('a');
// for (const allAElement of allA) {
//     if (allAElement.innerText === 'link3'){
//         allAElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// const allA = document.getElementsByTagName('a');
// for (const allAElement of allA) {
//     allAElement.className = `element_${allAElement.innerText}`
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Enter your color');
// const subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = `${color}`
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let color = prompt('Enter your color');
// const subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText === 'content 2 segment'){
//         subHeaderElement.style.color = `${color}`
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let text = prompt('Enter your text');
// const content = document.getElementsByClassName('content_1');
// for (const contentElement of content) {
//     contentElement.innerText = text
// }

// l) отримати елементи p та змінити їм padding на 20px
//
// const allP = document.getElementsByTagName('p');
// for (const allPElement of allP) {
//     allPElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// const text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'March-2022'
// }