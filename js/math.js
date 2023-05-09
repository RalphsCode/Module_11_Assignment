//STEP 1

enteredNum = prompt('Enter a number: ');
console.log(`The absolute value of ${enteredNum}, is: ${Math.abs(enteredNum)}`);

//STEP 2

enteredNum = prompt('Enter a decimal number (eg: 37.99): ');
console.log(`${enteredNum} rounded up is: ${Math.ceil(enteredNum)}`);

//STEP 3

enteredNum = prompt('Enter a decimal number (eg: 37.99): ');
console.log(`${enteredNum} rounded down is: ${Math.floor(enteredNum)}`);

//STEP 4

enteredNum = prompt('Enter 5 single digit numbers like this: 5,1,8,1,9');
enteredNumArr = enteredNum.match(/\d/g).map(Number);
console.log(`${Math.max(...enteredNumArr)} is the largest number, ${Math.min(...enteredNumArr)} is the smalles number in your list (${enteredNum}).`);

//STEP 5

enteredNum = prompt("Enter a number & I'll display its square root: ");
console.log(`${enteredNum}'s square root is: ${Math.sqrt(enteredNum)}`);