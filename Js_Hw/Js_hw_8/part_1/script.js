// -- отримує текст з параграфа з id "content"
//
// const textArr = document.querySelector('#content');
// const text = textArr.textContent;
// console.log(text)

// -- отримує текст з блоку з id "rules"
//
// const elemById = document.getElementById('rules');
// console.log(elemById.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// const newText = document.getElementById('content');
// newText.innerHTML='Hallo';

// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// const textArr = document.getElementById('rules');
// textArr.innerText='World';

// -- змініть кожному елементу колір фону на червоний
//
// const allElements = document.body.children;
// for (const allElement of allElements) {
//     allElement.style.backgroundColor = 'red'
// }

// -- змініть кожному елементу колір тексту на синій
//
// let allElements = document.querySelectorAll('*');
// for (const allElement of allElements) {
//     allElement.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// const qwr = document.querySelector('#rules');
// console.log(qwr.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// const textStyle = document.getElementsByClassName('fc_rules');
// for (const textStyleElement of textStyle) {
//     textStyleElement.style.color = 'red'
// }