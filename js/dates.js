//STEP 1

let d = new Date();
let monthDays;
let monthName;
currMonth = d.getMonth();

switch (currMonth) {
    case 0:
        monthName = 'January'
        monthDays = 31
        break;
    case 1:
        monthName = 'February'
        monthDays = 28 
        break;
    case 2:
        monthName = 'March'
        monthDays = 31 
        break;
    case 3:
        monthName = 'April'
        monthDays = 30  
        break;
    case 4:
        monthName = 'May'
        monthDays = 31  
        break;
    case 5:
        monthName = 'June'
        monthDays = 31
        break;
    case 6:
        monthName = 'July'
        monthDays = 31
        break;
    case 7:
        monthName = 'August'
        monthDays = 31 
        break;
    case 8:
        monthName = 'September'
        monthDays = 30 
        break;
    case 9:
        monthName = 'October'
        monthDays = 31  
        break;
    case 10:
        monthName = 'November'
        monthDays = 30  
        break; 
    case 11:
        monthName = 'December'
        monthDays = 31
        break;
    default :
        console.log('I hope I understood this assignment correctly!');
}
console/log(`The current month is ${monthName}, and there are ${monthDays} days in ${monthName}.`);

//STEP 2

dateToUse = '10/14/2023';
monthToUse = parseInt(dateToUse.slice(0,2));

switch (monthToUse ) {
    case 1:
        monthName = 'January'
        break;
    case 2:
        monthName = 'February'
        break;
    case 3:
        monthName = 'March'
        break;
    case 4:
        monthName = 'April'
        break;
    case 5:
        monthName = 'May'
        break;   
    case 6:
        monthName = 'June'
        break;
    case 7:
        monthName = 'July'
        break;
    case 8:
        monthName = 'August'
        break;
    case 9:
        monthName = 'September'
        break; 
    case 10:
        monthName = 'October'
        break;
    case 11:
        monthName = 'November'
        break;    
    case 12:
        monthName = 'December'
        break;
    default :
        console.log('I hope I understood this assignment correctly!')
}
console.log(`The month in this date string: ${dateToUse}, is: ${monthName}.`);

//STEP 3

let d = new Date();
let currDay = d.getDay();
console.log(currDay, typeof(currDay));
if (currDay == 0 ) {
    console.log('Today is a weekend day!');
}
else if (currDay == 6 ) {
    console.log('Today is a weekend day!');
}
else {
    console.log('Today is a week day, and not a weekend day!');
}

//STEP 4

let d = new Date();
let currDay = d.getDay();
let yesterDay = currDay - 1;

switch (yesterDay ) {
    case 1:
        yesterDay = 'Monday'
        break;
    case 2:
        yesterDay = 'Tuesday'
        break;
    case 3:
        yesterDay = 'Wednesday'
        break;
    case 4:
        yesterDay = 'Thursday'
        break;
    case 5:
        yesterDay = 'Friday'
        break;
    case 6:
        yesterDay = 'Saturday'
        break;
    case 0:
        yesterDay = 'Sunday'
        break;
}
console.log(`Yesterday was ${yesterDay}.`);

//STEP 5

let d = new Date();
console.log(d.toString().slice(0,1));
