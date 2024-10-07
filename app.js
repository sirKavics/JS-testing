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



/** 
 *  
function convertCelsiusToFahrenheit(celsius) {
    return fahrenheit = celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(10))
console.log(convertCelsiusToFahrenheit(30))
*
*/



let arr = [20 ,30, 40, 50, 100]

// First element of array:
console.log(arr[0])

//Last element of array:
console.log(arr[arr.length - 1])

//Add element onto end of array:
arr.push(200)

console.log(arr)