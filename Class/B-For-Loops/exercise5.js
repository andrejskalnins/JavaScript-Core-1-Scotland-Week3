// In this exercise we want to create a NEW array with only numbers less than 18

let numbersList = [4, 10, 22, 34, 16, 18];

// Here we declare an empty array
let newArray = [];

// Write a "for" loop to ITERATE through the numbersList array

// Inside the "for" loop, write an "if" statement to
// add the number to the new array only if it is less than 18
// Remember the "push" command
for (let counter = 0; counter < numbersList.length; counter++) {
  if (numbersList[counter] < 18) {
    newArray.push(numbersList[counter]);
  }
}

console.log(newArray);
