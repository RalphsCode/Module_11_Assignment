//STEP 1

function sortLetters(text) {                                                                 // CREATE A FUNCTION TO SORT THE LETTERS IN A STRING
    formattedTxt = txtString.toUpperCase();
    let charCodes = [];                                                                      // CREATE AN ARRAY 
    for (let i = 0; i < formattedTxt.length; i++) {
    charCodes.push(formattedTxt.charCodeAt(i));                                              // CHANGE THE ENTERED TEXT TO CHAR VALUES AND PUT THEM IN THE ARRAY
    }

    charCodes.sort(function(a, b) {
        return a - b;                                                                        // ASCENDING SORT THE ARRAY OF CHAR VALUES
    });

    let lettersArr = [];                                                                     // CREATE A NEW ARRAY FOR THE SORTED CHARS

    for (let i = 0; i < charCodes.length; i++) {                                             // CHANGE EACH CHAR BACK TO A LETTER & PUSH THE LETTER INTO THE NEW ARRAY
        lettersArr.push(String.fromCharCode(charCodes[i]));
    };

    sortedStr = lettersArr.join("").trim();                                                  // CHANGE THE ARRAY TO A STRING AND REMOVE BLANK SPACES
    console.log(`\nThe entered text is: "${txtString}", and`);
    console.log(`the letters in alphabetical order are: ${sortedStr}.\n`);                   // LOG THE RESULTS
};

let txtString = prompt('Enter the text here (spaces are ok, but no punctuation, and no numbers or special characters):')    // ASK THE USER TO ENTER SOME TEXT
sortLetters(txtString);                                                                                                     // CALL THE FUNCTION


// ******************************************************************************************
//STEP 2

function capitalize (text) {                                                                                        // CREATE A FUNCTION
    txtStringArr = txtString.split(' ');                                                                            // CONVERT EACH WORD TO AN ELEMENT IN AN ARRAY

    newTxtArr = [];                                                                                                 // CREATE AN ARRAY THAT WILL HOLD THE UPDATED WORDS
    for (let i = 0; i < txtStringArr.length; i++) {                                                                 // LOOP THROUGH EACH WORD SEPERATLY
        currElement = txtStringArr[i].charAt(0).toUpperCase() + txtStringArr[i].slice(1);                           // TAKE THE 1ST LETTER, CAPITALIZE, AND ADD BACK TO THE REST OF THE WORD
        newTxtArr.push(currElement);                                                                                // PUSH THE UPDATED WORD TO THE NEW ARRAY
        }
    newTxtStr = newTxtArr.join(" ")                                                                                 // CHANGE THE WORD ARRAY INTO A STRING
    console.log(`\nYou entered: "${txtString}", which is: "${newTxtStr}", with the first letters capitalized.\n`);  // LOG THE RESULT
    }

let txtString = prompt('Enter some text here (please no punctuation, and no numbers or special characters):')       // ASK THE USER TO ENTER SOME TEXT
capitalize(txtString);                                                                                              // CALL THE FUNCTION    


// ******************************************************************************************
//STEP 3

function findVowels(text){                                                                                                         // CREATE A FUNCTION                             
    console.log(`\nYou entered: "${txtString}".`)
    console.log(`${txtString.match(/[aeiouAEIOU]/g).length} instances of a vowel were found.\n`)                                   // FIND AND COUNT A,E,I,O,U MATCHES, LOG THE RESULT
    };

let txtString = prompt('Enter some text here (please no punctuation, and no numbers or special characters, uppercase ok):');       // ASK THE USER TO ENTER SOME TEXT
findVowels(txtString);                                                                                                             // CALL THE FUNCTION


// ******************************************************************************************
//STEP 4

function randomCharacters(x) {                                                                  // CREATE A FUNCTION
    charArr = [];                                                                               // CREATE AN ARRAY FOR THE RANDOM NUMBERS
    for (let i = 0; i < x; i++) {                                                               // CREATE A LOOP TO RUN 9 TIMES
        let random = Math.floor(Math.random() * (122 - 48 + 1)) + 48;                           // GENERATE A RANDOM NUMBER BETWEEN 48 AND 122
        charArr.push(String.fromCharCode(random));                                              // CHANGE THE RANDOM NUMBER TO ITS RESPECTIVE CHARACTER AND PUSH THE CHARACTER INTO THE ARRAY
    }
    randomStr = charArr.join("");                                                               // CHANGE THE CHARACTER ARRAY INTO A STRING
    console.log(`\nThe ${x} random characters are: "${randomStr}".\n`);                         // LOG THE RESULT
}
charNum = prompt('How many random characters would you like to generate? ');                    // ASK THE USER HOW MANY CHARACTERS TO GENERATE
randomCharacters(charNum);                                                                      // CALL THE FUNCTION


// ******************************************************************************************
//STEP 5

function longestName(text) {                                                                                            // CREATE A FUNCTION
    namesArr.sort((a, b) => b.length - a.length);                                                                       // SORT THE ARRAY ELEMENTS BY LENGTH
    console.log(`Sorted Countries Array: ${namesArr}`);                                                                 // LOG THE SORTED LIST
    console.log(`The longest country name in the list is: "${namesArr[0]}".`);                                          // LOG THE LONGEST NAME
}

namesArr = ["Australia", "Germany", "United States of America", "Ireland", "Peru", "Peoples Republic of China"];        // UNSORTED COUNTRY NAMES
longestName(namesArr);                                                                                                  // CALL THE FUNCTION
