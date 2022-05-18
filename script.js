// TASK 1
let myBirth = {
    year: 1999,
    month: 03,
    day: 30,
    getBirthDate() {
        const date = new Date(this.year, this.month, this.day);
        const output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
        console.log(output)
    }
}

myBirth.getBirthDate()

// TASK 2
// function getDiffDays(firstDate, lastDate) {
//     const dateOne = new Date(firstDate);
//     const dateTwo = new Date(lastDate);
//     const timeDifference = dateTwo.getTime() - dateOne.getTime();
//     const dayLength = 1000 * 60 * 60 * 24;
//     const result = timeDifference / dayLength;

//     if (dateOne.toString() === "Invalid Date" || dateTwo.toString() === "Invalid Date") {
//         console.error('Error: invalid date');
//     } else if (dateTwo < dateOne) {
//         console.error('Error: your start date is later than end');
//     } else {
//         return result
//     }
// }

// console.log(getDiffDays('2020-01-01', '2020-01-17'));
// console.log(getDiffDays('2020-01-01', '2020-03-15'));
// console.log(getDiffDays('2222222222', '2020-03-15'));
// console.log(getDiffDays('2021-01-02', '2020-03-15'));

// TASK 3
function isWeekend(selectedDay) {
    const date = new Date(selectedDay);
    const weekendDay = date.getDay();
    return weekendDay == 6 || weekendDay == 0
}

console.log(isWeekend('2022-02-12'));
console.log(isWeekend('2022-02-13'));
console.log(isWeekend('2022-02-09'));

//TASK 4
// const person = {
//     fullName: 'Sherlock Holmes',
//     address: {
//         street: "Baker Street",
//         city: "London",
//         house: "221b"
//     }
// }

// const toJson = JSON.stringify(person);
// console.log(toJson)

// const toObj = JSON.parse(toJson);
// console.log(toObj)

// const { fullName, address: { street, city, house } } = person;

// console.log(fullName)
// console.log(street)
// console.log(city)
// console.log(house) 