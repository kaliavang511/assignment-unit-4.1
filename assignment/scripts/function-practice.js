console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
console.log(helloName('Joe'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
  // return firstNumber + secondNumber;
}
console.log(addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3
}
  console.log(multiplyThree(95000,56000,52000))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

console.log('positive number should equal true',isPositive(2));
// Call the function to test each outcome (true & false) 
console.log('Negative number should equal false',isPositive(-1))
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


function getLast(array) {
  if(array.length > 0){
    return array[array.length-1];
  } else {
    return 'undefined'
  }
}
console.log('Last number is', getLast([8,4,5]))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      return true;
    } 
    
  }
    return  false;
}

console.log(find((3),([2,3,4])))



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
   for (let i =0; i < string.length; i++){
    if (string[i] === letter){
      return true
    }
   } return false
}

console.log(isFirstLetter(('K'),('Kalia Vang')))


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
for (let i = 0; i < array.length; i++){
  // TODO: loop to add items
 sum += array[i];
  } 
return sum;
// TODO: return the sum
   }
console.log(sumAll([1,2,3,4,5]))



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(inputArray) {
    let positive = []
  for (i = 0; i < inputArray.length; i++){
    if ( inputArray[i] > 0) {
      positive.push(inputArray[i])
    }
    
    else{
      inputArray[i] = []
    }
   
  }
  return positive
}

console.log(allPositive([-1,-2,-3,-4,-5]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes an array as an argument and returns true or false 
//depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(array) {
  //creating a function 
	let sum = 0;
  //creating a var. for sum
	for (let i = 0; i < array.length; i++){
    //creating a loop to go through the array 
		sum = sum + array[i];
    //sum equals the sum of the array
	}
  
	return Number.isInteger(sum / array.length);
  //diving sum into how many items are in the array to get the Avg
  //return true or false rather it's a whole number or not 
}
console.log(isAvgWhole([5,5,5,5,5]))
//console.log to double check our work

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
