let namesList = ["Sundar", "Reshma", "Shantanu", "Arvind"];

// 1. Write a function called capitaliseName
// It should have one input parameter called theName
// It should return the name in capitals - do an internet search for javascript toUpperCase

// 2. Use array.map to create a new array with all the values in namesList converted to capitals
let shoutyNames = namesList.map((name) => name.toUpperCase());

// 3. Print the new array to the screen
console.log(shoutyNames);
