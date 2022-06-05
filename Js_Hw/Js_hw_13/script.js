function firstMonth(goWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goWork) {
                resolve(prompt('Enter your balance'));
            } else {
                reject('No work no car')
            }
        }, 400)
    })
}

function newCar(moneyForCar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForCar < 2000) {
                console.log('Not a money for this car');
            } else {
                console.log('Welcome, you have money for your new car');
                resolve(moneyForCar - 2000);
            }
        }, 800)
    })
}

function tires(remain) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (remain <= 350) {
                console.log('You dont have money for a new tires');
            } else {
                console.log('And you have money for new tires for 350 $ ');
                resolve(remain - 350);
            }
        }, 600)
    })
}

firstMonth(true)
    .then(firstMonthMoney => {
        console.log('Good job. You got', firstMonthMoney, '$ for a new car');
        return newCar(firstMonthMoney);
    })
    .then(remainder => {
        console.log('Your balance is :', remainder);
        return tires(remainder);
    })
    .then(balance => {
        setTimeout(() => {
            console.log(`You have ${balance}$ to accessories`)
        }, 500)
    })
    .catch(reason => {
        console.log('No money, no car');
    })