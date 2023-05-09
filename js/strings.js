//STEP 1

userName = prompt('Please enter your name here: ');
alert(`You entered - ${userName} - which contains ${userName.length} characters.`);

//STEP 2

userName = prompt('Please enter your name/text here: ');
charNum = prompt(`Pick a position between 1 and ${userName.length}: `);
userNameArr = userName.split("");
alert(`You entered: ${userName}.\nThe character at position ${charNum} is:   ${userNameArr[charNum -1]}.`);

//STEP 3

firstName = prompt('Please enter your first name: ');
lastName = prompt('Now, please enter your last name: ');
alert(`Great. Your full name is ${firstName + " " + lastName}.`);

//STEP 4

txtString = 'The quick brown fox jumps over the lazy dog';
txtStringArr = (txtString.split(' '));
alert(`"fox" is located at index number: ${txtString.indexOf('fox')}, \nwhich is word number ${txtStringArr.indexOf('fox') + 1} of the text string.`); 

//STEP 5

txtString = 'The quick brown fox jumps over the lazy fox';
txtStringArr = (txtString.split(' '));
alert(`The last instance of the word "fox" begins at index number: ${txtString.lastIndexOf('fox')}.`);

//STEP 6

txtString = 'The quick brown fox jumped over the lazy dog';
fullName = prompt('Please enter your name here: ');
alert(`${(txtString.replace('the lazy dog', fullName))}`);

//STEP 7

txtString = 'The quick brown fox jumps over the lazy dog';
userWord = prompt('Please enter your word here: ');
present = txtString.search(userWord);
if (present != -1) {
    alert(`"${userWord}" was found at position: ${present}.`)
    }
else {
    alert(`"${userWord}" was not found.`);
}

//STEP 8

old_string = 'The quick brown fox jumps over the lazy dog';
new_string = old_string.slice(-12)
alert(`This is the new string: "${new_string.toUpperCase()}".`)

//STEP 9

txtString = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(`${txtString.toLowerCase().trim()}`);

//STEP 10

txtString = 'the quick brown fox jumps over the lazy dog';
alert(`${txtString.charAt(0).toUpperCase() + txtString.slice(1)}`);