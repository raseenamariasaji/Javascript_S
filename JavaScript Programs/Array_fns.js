let fruits = ["Apple", "Banana", "Orange"];

// Add to the end
fruits.push("Mango");
console.log(fruits); 
// Remove from the end
fruits.pop();
console.log(fruits); 

// Add to the beginning
fruits.unshift("Grapes");
console.log(fruits); 

// Remove from the beginning
fruits.shift();
console.log(fruits); 

// Remove and add elements in the middle
fruits.splice(1, 1, "Peach", "Pineapple");
console.log(fruits); 
// Copy a portion of the array
let newFruits = fruits.slice(1, 3);
console.log(newFruits); 

// Combine arrays
let veggies = ["Carrot", "Potato"];
let food = fruits.concat(veggies);
console.log(food); 

// Check if an element exists
console.log(fruits.indexOf("Banana")); 
console.log(fruits.includes("Grapes")); 