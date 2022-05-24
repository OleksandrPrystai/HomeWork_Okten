// - Создать произвольный елемент с id = text.  Используя JavaScript,
// - сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let idElement = document.getElementById('text');
// idElement.onclick = function () {
//     idElement.hidden = true;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// - інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let f1 = document.forms.f1
// f1.onsubmit = function (e) {
//     e.preventDefault()
//     let age = f1.age.value
//     if (age < 18) {
//         document.write('Ти ще малий');
//     } else {
//         document.write('Запрашаме до бару')
//     }
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку
// - на яку считується та виводиться на консоль інформація з цих 2х форм.
// - Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// - Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let userData = [];
// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
// let buttonS = document.getElementById('butt');
// buttonS.onclick = function (e) {
//     e.preventDefault()
//     let userName = form1.Username.value;
//     let userSurname = form1.surname.value;
//     let userEmail = form2.email.value;
//     let userAge = form2.age.value;
//     console.log(userName, userSurname, userEmail, userAge);
//     userData.push(userName, userSurname, userEmail, userAge);
//     console.log(userData);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let form1 = document.forms.formTab;
// let buttonCalc = document.getElementById('butt');
// buttonCalc.onclick = function (e) {
//     let inp1 = document.getElementById('xxx').value
//     let inp2 = document.getElementById('yyy').value
//     let inp3 = document.getElementById('zzz').value
//
//     function generationTab (inp1 , inp2 ,inp3){
//         let tab = document.createElement('table');
//         let divTab = document.createElement('div');
//         tab.style.border = '1px solid black'
//         divTab.appendChild(tab);
//         document.body.appendChild(divTab);
//
//
//     for (let i = 0; i < inp1; i++) {
//             let inp1 = document.createElement('inp1');
//             inp1.style.border = '1px solid black';
//             for (let p = 0; p < inp2; p++) {
//                 let inp2 = document.createElement('inp2');
//                 inp2.style.border = '1px solid green';
//                 inp2.innerText = `${inp3}`;
//                 tab.appendChild(inp1);
//                 inp1.appendChild(inp2);
//             }
//         }
//     }
//     generationTab(inp1,inp2,inp3)
//
// }