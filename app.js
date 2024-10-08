// DRY = Don't repeat yourself

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



/* 

function convertCelsiusToFahrenheit(celsius) {
    return fahrenheit = celsius * 1.8 + 32
    }
    
    console.log(convertCelsiusToFahrenheit(0))
    console.log(convertCelsiusToFahrenheit(10))
    console.log(convertCelsiusToFahrenheit(30))
    
*/




let arr = [20 ,30, 40, 50, 100]
/* 

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

//EXERCISE

/**
let grades = ['A+', 'A', 'FAIL']

 let goodGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL')
    return true;
})
console.log(goodGrades)

let goodGrades = grades.filter(element => element !== 'FAIL')
console.log(goodGrades)

*/
let grades = ['A+', 'A', 'FAIL']
let goodGrades = []

for (let i = 0; i < grades.length; ++i){
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}
console.log(goodGrades);