/**
//  * const prices = [97, 54, 677, 24, 10];
 *
 * Loop over the prices array and log each price to the console.
 * Do it twice, once with a for loop and once with a 'for of' loop.
 */

// const prices = [97, 54, 677, 24, 10];

// for (let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
// }

// for (const price of prices) {
//   console.log(price);
// }

/**
 * Create a function that takes two number arguments and returns their multiplication.
 * Please check if the function works with the following arguments: 3, 4
 *
 * Bonus: assign a default value to the second parameter
 */

// function multi(num1, num2 = 5) {
//   return num1 * num2;
// }
// console.log(multi(3, 4));
// console.log(multi(3));

/**
 * const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
 *
 * Add your name to the names array
 * Check if the array contains the name 'Alice'.
 * Get a filtered array with all the names containing the letter 'a'.
 *
 * Bonus: check if some of the names have a length of 5 characters
 */

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// names.push("Oren");
// console.log(names);

// console.log(names.includes("Alice"));

// const aName = names.filter((name) => {
//   return name.includes("a");
// });
// console.log(aName);

/**
 * Create a button in the HTML with class of 'btn' and text 'Click me'.
 * Add a click event listener to the button that logs 'Button clicked' to the console.
 *
 * Bonus: style the button*/

//  ONE

// const button = document.querySelector("btn");
// console.log(button);
