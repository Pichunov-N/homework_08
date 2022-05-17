// TASK 1
let Data = new Date(Date.UTC(1999, 3, 30))

console.log(Data.toLocaleDateString())

// TASK 2
function getDiffDays(firstDate, lastDate) {
    const dateOne = new Date(firstDate);
    const dateTwo = new Date(lastDate);
    const timeDifference = dateTwo.getTime() - dateOne.getTime();
    const dayLength = 1000 * 60 * 60 * 24;
    const result = timeDifference / dayLength;

    if (dateOne.toString() === "Invalid Date" || dateTwo.toString() === "Invalid Date") {
        console.error('Error: invalid date');
    } else if (dateTwo < dateOne) {
        console.error('Error: your start date is later than end');
    } else {
        return result
    }
}

console.log(getDiffDays('2020-01-01', '2020-01-17'));
console.log(getDiffDays('2020-01-01', '2020-03-15'));
console.log(getDiffDays('2222222222', '2020-03-15'));
console.log(getDiffDays('2021-01-02', '2020-03-15'));

// TASK 3 
function isWeekend(selectedDay) {
    const date = new Date(selectedDay)
    if (date.getDay() == 6 || date.getDay() == 0) {
        return true
    } else {
        return false
    }
}

console.log(isWeekend('2022-02-12'));
console.log(isWeekend('2022-02-13'));
console.log(isWeekend('2022-02-09'));

//TASK 4
const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
}

const toJson = JSON.stringify(person);
console.log(toJson)

const toObj = JSON.parse(toJson);
console.log(toObj)

const { fullName, address: { street, city, house } } = person;

console.log(fullName)
console.log(street)
console.log(city)
console.log(house) 