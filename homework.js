// 1. Set the variable `givenName` to the string "Addison".

const givenName = "Addison"

// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.

const candies = 20
const people = 6
const leftover = 20 % 6

// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.

function greeting(name){
    return `Hello, ${name}!`
}

// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.

function isOdd(number){
    if (number % 2 === 1 || number % 2 === -1){
        return true
    }else {
        return false 
    }
}

// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.

function isEven(number){
    if (number % 2 === 0 ){
        return true
    }else {
        return false
    }

}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.

function fahrenheitToCelsius(temp){
    return (temp - 32) * 5/9
}

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.

function celsiusToFahrenheit(temp){
    return (temp * 9/5) + 32
}
// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.

function fahrenheitToKelvin(temp) {
    return fahrenheitToCelsius(temp) + 273.15
}

// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

function lesser(num1, num2) {
    if (num1 < num2) {
    return num1 
    } else {
       return num2
    }
}

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.

function multigreeting(name, language) {
    if (language === 'en'){
        return `Hello, ${name}!`
    } else if (language === 'es') {
        return `¡Hola, ${name}!` 
    } else if (language === 'fr') {
        return `Bonjour, ${name}!` 
    } else if (language === 'eo') {
        return `Saluton, ${name}!`
    } else {
    }
}

// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

// One way of doing it...
// function sum(array) {
//     return array.reduce(function(a,b){
//         return a + b 
//     }, 0);
// }

function sum (array){
    let total = 0;
    for (let number of array){
        total += number;
    }
    return total
}

// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// One way of doing it...
// function average(array) {
//     if (array.length > 0) {
//         let total = array.reduce((a,b) => a + b, 0)
//         return total / array.length;
//     } 
// }

function average (array){
    let total = 0;
    let totalnums = 0;

    for (let number of array){
        total += number;
        totalnums+= 1;
    } if (totalnums > 0) {
        return total / totalnums
    }
}


// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

// make another one using for and if statements to understand the logic

// One way of doing in...
// function minimum(array) {
//     if (array.length > 0) {
//         return Math.min(...array);
//     }
// }

function minimum (array){
    let min = 0;
    let totalnums = 0;

    for (let number of array){
        totalnums += 1
        if (min === 0){
            min = number
        } else if (number < min){
            min = number
        }
    } if (array.length > 0) {
        return min
    }    
}

// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(array){
    let arrayCopy = array.slice(0)
    let sorted = []

    while (array.length > 0){
        let min = minimum(array);
        let x = array.indexOf(min);
        array.splice(x,1)
        sorted.push(min)
    }
    return sorted
}
