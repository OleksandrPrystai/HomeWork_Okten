// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
//
// let tabsBlockObj = document.createElement('div');
// tabsBlockObj.classList.add('container')
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(resp => resp.json())
//     .then(postList => {
//         for (const postElement of postList) {
//             let box = document.createElement('div');
//             box.classList.add('postElement');
//             box.innerHTML = `
//         <li>ID - ${postElement.id}</li>
//         <li>Title - ${postElement.title}</li>
//         <li>Body - ${postElement.body}</li>`
//             tabsBlockObj.appendChild(box);
//         }
//     })
// document.body.appendChild(tabsBlockObj);

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// let tabsBlockObj = document.createElement('div');
// tabsBlockObj.classList.add('container')
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(resp => resp.json())
//     .then(postList => {
//         for (const postElement of postList) {
//             let box = document.createElement('div');
//             box.classList.add('postElement');
//             box.innerHTML = `
//             <li>Id: ${postElement.id}</li>
//             <li>Name: ${postElement.name}</li>
//             <li>Email: ${postElement.email}</li>
//             <li>Body: ${postElement.body}</li>
//             `
//             tabsBlockObj.appendChild(box)
//         }
//     })
// document.body.appendChild(tabsBlockObj);




