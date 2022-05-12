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
// const tag1 = document.getElementsByTagName('p');
// const tag2 = document.getElementsByTagName('div');
// const tag3 = document.getElementsByTagName('li');
//
// let tagArray = [tag1, tag2, tag3];
//
// for (const tagArrayElement of tagArray) {
//     for (const tagAll of tagArrayElement) {
//         tagAll.style.background='green'
//     }
//
// }

// -- змініть кожному елементу колір тексту на синій
//
// const textStyle1 = document.getElementById('content');
// textStyle1.style.color = 'blue';
// const textStyle2 = document.getElementById('rules');
// textStyle2.style.color = 'blue';
// const textStyle3 = document.getElementsByClassName('fc_rules');
// for (const textStyle3Element of textStyle3) {
//     textStyle3Element.style.color = 'blue'
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