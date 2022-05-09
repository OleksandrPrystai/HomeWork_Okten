// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// - створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1, 'Oleksandr', 'Prystai', 'o.prystay13579@gmail.com', '+380636194933');
// let user2 = new User(2, 'Ctepan', 'Giga', 'giga@gmail.com', '+38093222222');
// let user3 = new User(3, 'Ivo', 'Bobul', 'bobul@gmail.com', '+380931112122');
// let user4 = new User(4, 'Andriano', 'Chelentano', 'chelentano@gmail.com', '+3809311786567');
// let user5 = new User(5, 'Merlin', 'Menson', 'menson@gmail.com', '+380931175645');
// let user6 = new User(6, 'Till', 'Lindeman', 'till@gmail.com', '+38093567545');
// let user7 = new User(7, 'Vova', 'Zilvova', 'vovan@gmail.com', '+38093534277');
// let user8 = new User(8, 'Mishel', 'Homa', 'dzidzo@gmail.com', '+3808888888');
// let user9 = new User(9, 'Dima', 'Maleev', 'maleev@gmail.com', '+380845643543');
// let user10 = new User(10, 'Zenoviy', 'Veres', 'virus.lviv@gmail.com', '+3808453423');
//
// let users = function (...user) {
//     let usersArray = [];
//     usersArray.push(...user)
//     return usersArray;
// }
// let user = users(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
//
// // - Взяти масив з  Users[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUser = user.filter(function (idFilter) {
//     if (idFilter.id % 2 === 0) {
//         return idFilter
//     }
// })
// console.log(filterUser);
//
// //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUser = user.sort((u1,u2) => u2.id - u1.id );
// console.log(sortUser);  // - відсортував по сападанню;

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
// let client1 = new Client(1, 'Oleksandr', 'Prystai', 'o.prystay13579@gmail.com', '+380636194933', 2);
// let client2 = new Client(2, 'Ctepan', 'Giga', 'giga@gmail.com', '+38093222222', 4);
// let client3 = new Client(3, 'Ivo', 'Bobul', 'bobul@gmail.com', '+380931112122', 8);
// let client4 = new Client(4, 'Andriano', 'Chelentano', 'chelentano@gmail.com', '+3809311786567', 1);
// let client5 = new Client(5, 'Merlin', 'Menson', 'menson@gmail.com', '+380931175645', 3);
// let client6 = new Client(6, 'Till', 'Lindeman', 'till@gmail.com', '+38093567545', 9);
// let client7 = new Client(7, 'Vova', 'Zilvova', 'vovan@gmail.com', '+38093534277', 9);
// let client8 = new Client(8, 'Mishel', 'Homa', 'dzidzo@gmail.com', '+3808888888', 2);
// let client9 = new Client(9, 'Dima', 'Maleev', 'maleev@gmail.com', '+380845643543', 5);
// let client10 = new Client(10, 'Zenoviy', 'Veres', 'virus.lviv@gmail.com', '+3808453423', 6);
//
// let pushClient = function (...client) {
//     let arr = [];
//     arr.push(...client);
//     return arr
// }
// let client = pushClient(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(client);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let newClient = client;
//
// let sortClient = newClient.sort((c1,c2)=> c1.order - c2.order);
// console.log(sortClient);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,' +
//' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
//
class Car {
    constructor(model, producer, year, speed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.capacity = capacity;
    }

    drive(speed) {
        console.log(`їдемо зі швидкістю ${speed}`)
    }

    info() {
        console.log(`${'model - '}${this.model}, ${'producer - '}${this.producer}, ${'year - '}${this.year}, ${'speed - '}${this.speed}, ${'capacity - '}${this.capacity}`);
    }
    increaseMaxSpeed (newSpeed){
        console.log(newSpeed+this.speed);
    }

}


// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
let bmwCar = new Car('535d', 'BMW', 2007, '240', '3.0')
console.log(bmwCar)
bmwCar.drive(bmwCar.speed)

// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
let opel = new Car('astra','opel',2008,220,1.9)
opel.info()
bmwCar.info();
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

opel.increaseMaxSpeed(25);


// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize
//     }
// }
//
// let cinderella1 = new Cinderella('Anna', 20, 36.5);
// let cinderella2 = new Cinderella('Lussi',21,37);
// let cinderella3 = new Cinderella('Larissa',19,35);
// let cinderella4 = new Cinderella('Stefaniya',24,37.5);
// let cinderella5 = new Cinderella('Maria',23,38);
// let cinderella6 = new Cinderella('Aleksandra',22,35.5);
