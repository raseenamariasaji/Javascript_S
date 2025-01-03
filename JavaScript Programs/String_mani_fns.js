let sentence = "I love JavaScript";

// .includes() checks if a substring exists
console.log(sentence.includes("lost")); 

// .startsWith() checks if it starts with a substring
console.log(sentence.startsWith("I"));  
console.log(sentence.startsWith("My"));  

// .endsWith() checks if it ends with a substring
console.log(sentence.endsWith("JavaScript")); 

// .replace() replaces a substring
console.log(sentence.replace("JavaScript", "React")); 

// .split() splits a string into an array of substrings
let words = sentence.split(" ");
console.log(words); 