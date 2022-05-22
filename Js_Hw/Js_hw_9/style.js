// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// const block = document.createElement('div');
// block.className = 'wrap collapse alpha beta'
// document.body.appendChild(block);
// block.style.margin = '50px'
// block.style.width = '200px';
// block.style.height = '200px';
// block.style.background = 'purple'
// block.innerText = 'Hello Okten';
// block.style.fontSize = '25px'
// document.body.appendChild(block.cloneNode(true))

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let arr = ['Main','Products','About us','Contacts'];
//
// for (const element of arr) {
//
//     let liAdd = document.createElement('li');
//     liAdd.innerText = element
//     let menuElement = document.getElementsByClassName('menu')[0];
//     menuElement.appendChild(liAdd);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const elements of coursesAndDurationArray) {
//
//     let block = document.createElement('div');
//     let title = document.createElement('p');
//     title.innerText = `${elements.title}`;
//     let month = document.createElement('p');
//     month.innerText = `${elements.monthDuration}`
//     block.appendChild(title);
//     block.appendChild(month);
//     block.style.display = 'flex'
//     title.style.marginRight = '20px'
//     document.body.appendChild(block);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const obj of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.className = 'item'
//     block.style.display = 'flex'
//     document.body.appendChild(block);
//     let title = document.createElement('h1');
//     title.className = 'heading'
//     title.innerText = `${obj.title}`
//     title.style.marginRight = '20px'
//     let month = document.createElement('p');
//     month.className = 'description';
//     month.innerText = `${obj.monthDuration}`
//     month.style.fontSize = '27px'
//     block.appendChild(title);
//     block.appendChild(month);
// }



