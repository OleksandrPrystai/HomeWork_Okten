//- Знайти та вивести довжину наступних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello word';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let lengthStr = (str) => {
//     console.log(str.length);
// }
// lengthStr(str1);
// lengthStr(str2);
// lengthStr(str3);

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello word';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let upperCase = (str) => console.log(str.toUpperCase());
// upperCase(str1);
// upperCase(str2);
// upperCase(str3);

// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str1 ='HELLO WORLD';
// let str2 ='LOREM IPSUM';
// let str3 ='JAVASCRIPT IS COOL';
//
// let lowerCase = (str) => console.log(str.toLowerCase());
// lowerCase(str1);
// lowerCase(str2);
// lowerCase(str3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// let replaceAll = str
//     .replaceAll(' ','')
//     .replaceAll('dirty','dirty ')
// console.log(replaceAll);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str1 = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ');
// console.log(stringToArray(str1));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let mapStr = numbers.map((number) => String(number));
// console.log(mapStr);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
//sortNums(nums, 'ascending') // [3,11,21]
//sortNums(nums, 'descending') // [21,11,3]
////
// let array = [2, 5, 4, 6, 89, 0, 1, 3, 643, 5, 13];
//
// let sortArray = array.sort((n1,n2)=> n1 - n2);
// console.log(sortArray)
// let sortArr = array.sort((n1,n2)=> n2 - n1);
// console.log(sortArr);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let sortObj = coursesAndDurationArray.sort((m1, m2) => m2.monthDuration - m1.monthDuration);
// console.log(sortObj)
// let filterObj = coursesAndDurationArray.filter(function (month) {
//     if (month.monthDuration > 5) {
//         return true
//     }
// })
// console.log(filterObj);

// описати колоду карт
//  - знайти піковий туз - всі шістки - всі червоні карти - всі буби - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let deskOfCards = [
//     {cardSuit: 'cross', value: '6', color: 'black'},
//     {cardSuit: 'cross', value: '7', color: 'black'},
//     {cardSuit: 'cross', value: '8', color: 'black'},
//     {cardSuit: 'cross', value: '9', color: 'black'},
//     {cardSuit: 'cross', value: '10', color: 'black'},
//     {cardSuit: 'cross', value: 'jack', color: 'black'},
//     {cardSuit: 'cross', value: 'queen', color: 'black'},
//     {cardSuit: 'cross', value: 'king', color: 'black'},
//     {cardSuit: 'cross', value: 'ace', color: 'black'},
//
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
// ]
//
// let spadeAce = deskOfCards.filter(function (card) {
//     if (card.cardSuit === 'spade' && card.value === 'ace') {
//         return card
//     }
// })
// console.log(spadeAce);
//
// let allSix = deskOfCards.filter(function (six) {
//     if (six.value === '6') {
//         return six
//     }
// })
// console.log(allSix);
//
// let allRed = deskOfCards.filter((red) => {
//     if (red.color === 'red') {
//         return red
//     }
// })
// console.log(allRed);
//
// let allDiamont = deskOfCards.filter((card) => {
//     if (card.cardSuit === 'diamond') {
//         return card
//     }
// })
// console.log(allDiamont)
//
// let filterCross = deskOfCards.filter((card) => {
//     if (card.cardSuit === 'cross' && card.value > 9) {
//         return card
//     } else if (card.cardSuit === 'cross' && card.value === 'jack' || card.cardSuit === 'cross' && card.value === 'queen') {
//         return card
//     } else if (card.cardSuit === 'cross' && card.value === 'king' || card.cardSuit === 'cross' && card.value === 'ace') {
//         return card
//     }
// })
// console.log(filterCross)

// Хз чи ласт зробив правильно де знайти хрести від 9 і вище.Як є якийсь простіший приклад то скиньте будь-ласка в пп