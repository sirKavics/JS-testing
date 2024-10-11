// DRY = Don't repeat yourself

// LOOPS

// let count = 1
// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

/**
 *
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
}
*
*/

/**
 *  
const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
}
*
*/

// FUNCTIONS

/* 

function convertCelsiusToFahrenheit(celsius) {
    return fahrenheit = celsius * 1.8 + 32
    }
    
    console.log(convertCelsiusToFahrenheit(0))
    console.log(convertCelsiusToFahrenheit(10))
    console.log(convertCelsiusToFahrenheit(30))
    
*/

// ARAYS

/* 
let arr = [20 ,30, 40, 50, 100]

// First element of array:
console.log(arr[0])

//Last element of array:
console.log(arr[arr.length - 1])

//Add element onto end of array:
arr.push(200)
console.log(arr);

//Filter array
let newArr = arr.filter((element) => {
    if (element < 50) {
        return true;
    }
})
console.log(newArr);

//Simplified version of above

let newCart = cart.filter(element => element < 50)
console.log(newCart)

*/

/**
//EXERCISE

let grades = ['A+', 'A', 'FAIL']

// With Filter Method
 let goodGrades = grades.filter((element) => {
    if (element !== 'FAIL')
    return true;
})
console.log(goodGrades)

// Simplified solution
let goodGrades = grades.filter(element => element !== 'FAIL')
console.log(goodGrades)

// Solution with a For Loop
let goodGrades = []

for (let i = 0; i < grades.length; ++i){
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}
console.log(goodGrades)
*/

/**
let dollars = [1, 5, 10, 3];
// With Array Map Method
let cents = dollars.map((element) => {
    return element * 100
})

let cents = dollars.map(element => element * 100)

console.log(cents)
let cents = [];

for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100)
}
console.log(cents)
*/

// OBJECTS
/**
 
let users = [
    {
        username: "Francisco",
        email: "falf555@gmail.com",
        password: 'test3210',
        discordId: "Kavics#0246",
        lessonsCompleted: [0, 1, 2],
    },
    {
        username: "David",
        email: "david@frontendsimplified.com",
        password: 'test0123',
        discordId: "David Bragg#0001",
        lessonsCompleted: [0, 1, 2, 3],
    },
    {
        username: "Zen",
        email: "Zen@frontendsimplified.com",
        password: 'Zen123',
        discordId: "Zen#0002",
        lessonsCompleted: [0, 1, 2, 3, 4],
    },
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
        }
        return;
    }
}
console.log('could not find an email that matches')
}

login('falf555@gmail.com', 'test3210');

//EXERCISE

let users = []

function register(user) {
    users.push(user);
}

register({
    username: "Zen",
    email: "zen@frontendsimplified.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0002",
    lessonsCompleted: [0, 1],
});

console.log(users); 
*/

/**  

// First way of accessing an element
document.querySelector('#title')

// Second way of accessing an elemnt
document.getElementById('title')

// Change HTML
document.querySelector('.title').innerHTML = 'Frontend Simplified'

// Add HTML
document.querySelector('.title').innerHTML += 'Frontend Simplified'

// Change CSS
document.querySelector('.title').style.color = 'red'

*/
// Click Listeners
function changeTitleToRed() {
    document.querySelector('.title').style.color = 'red'; 
    console.log('clicked');
}