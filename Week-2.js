//-----------JavaScript Practical Assessment Week 2

// // 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.
//
// var originalArray = [1, 2, 3, 4, 5, 6, 7]
//
// reverseIt = (array) => {
// 	return array.reverse()
// }
//
// console.log(reverseIt(originalArray))
// // 2. Given the object below, complete the console.log to find specific information:
//
// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }
//
// // Log the type of bicycle:
// console.log(bicycle.type)
//
// // Log the bell:
// console.log(bicycle.gear[2])
//
// // Log the PSI:
// console.log(biycle.specs[2])
//

// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"
//
// const letterCounter = (string) => {
// 	let newArray = []
// 	let newWord = string.toLowerCase().split("")
//
// 	for(let i = 0; i < newWord.length; i++) {
// 		if (newWord[i] === 'l'){
// 			newArray.push(newWord[i])
// 		}
// 	}
//
// 	return newArray.length
// }
//
// console.log(letterCounter(ourString))


// 4. Write a function called getFib that returns the first 10 numbers of the
//Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//
// getFib = []
// for(i = 0; getFib.length <= 9; i++) {
//   getFib.length <= 1 ? getFib.push(1) : getFib.push(getFib[getFib.length - 1] + getFib[getFib.length - 2])
// }
//
// console.log(getFib)

//5. Write a function called oddChecker that takes in the fullArr and uses a
//for loop to return a new array of only odd numbers.
//Copy and paste your code and refactor using ES6 syntax.

// var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//
// var oddChecker = (array) => {
// 	let finalArr =[]
// 	for(let i = 0; i < array.length; i++){
// 		if(typeof array[i] !== 'number'){
// 		}else if(array[i] % 2 !== 0){
// 			finalArr.push(array[i])
// 		}
// 	}
// 	return finalArr
// }
// //with ES6 syntax
// const checkOdds = (array) => {
// 	return array.filter(x => x % 2 !== 0 && typeof x === 'number')
// }
// console.log(oddChecker(fullArr));
// console.log(checkOdds(fullArr));
