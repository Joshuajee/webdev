//1 Area of circle

// const areaOfCircle = Math.PI * (10 ** 2)

// console.log(areaOfCircle)

//2

// let result2 = 0;
// let num1 = 2;
// let num2 = 2;

// if (num1 === num2) {
//     result2 = (num1 + num2) * 3
// } else {
//     result2 = num1 + num2
// }

// console.log(result2)


// 3

// const fahrenint  = 140;

// const celsuis = (fahrenint - 32) * 5 / 9

// console.log(celsuis)


// 4
// let result3;
// const CONSTANT = 19
// let givenNumber = 20

// const diff = 19 - givenNumber

// const absDiff = Math.abs(diff)

// if (givenNumber > CONSTANT) {
//     result3 = absDiff * 3
// } else {
//     result3 = absDiff
// }

// console.log(result3)


// 5

// let num1 = 40
// let num2 = 54

// if (num1 === 50) {
//     console.log(true)
// } else if (num2 === 50) {
//     console.log(true)
// } else if (num1 + num2 === 50) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// function isEqualFifthy(num1, num2) {
//     if (num1 === 50) {
//         return true
//     } else if (num2 === 50) {
//         return true
//     } else if (num1 + num2 ===  50) {
//         return true
//     } 
//     return false
// }

// console.log(isEqualFifthy(10, 50))

// console.log(isEqualFifthy(10, 60))

// console.log(isEqualFifthy(10, 70))

// console.log(isEqualFifthy(-10, 60))

// console.log(isEqualFifthy(10, 20))


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// let count = 10

// while (count < 20) {
//     console.log(count)
//     if ( count == 16) break
//     count++
// }


// let condition = true

// while (condition) {
//     console.log("YES")
//     condition = false
// }


// const array = [10, 20, 30, 80, 20, 60, 78, 90]


// for (let i = 0; i < array.length - 1; i++) {
//     let result3;
//     const CONSTANT = 19
//     let givenNumber = array[i]
//     const diff = 19 - givenNumber
//     const absDiff = Math.abs(diff)
//     if (givenNumber > CONSTANT) {
//         result3 = absDiff * 3
//     } else {
//         result3 = absDiff
//     }
//     console.log(result3)
// }

// let str = "Hello World"

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// const person = {
//     name: "John Doe",
//     age: 60,
//     cars: ["toyota", "land rover", "Maybach"]
// }



// console.log(person.cars[1])

// console.log([person, person, 10])


//1. write a function that checks if a number is odd or even, 
// return true if it is old or false it is even

//2. Write a function that returns the length of a string

//3. Write a function that accepts two numbers 
//as parameters and return their sum

//Note they should accept a parameter as input


function strLength(str) {
    return str.length
}

console.log(strLength("hello"))

console.log(strLength("Hi"))