const accountID = 1236654 //Cant change the value  it is constant
let accountEmail = "priya@gmail.com" //
var accountPassword = "12345" //We not use this cause scope
accountCity = "Kolkata" // We ca also declare a variable without using const or let or var
let accountState; // It will give output as undefined

//accountId = 2 //Not allowed cause already we have declared the account id as constant
//console.log(accountID);

accountEmail = "priya@gmail"
accountPassword = "123456"
accountCity = "Delhi" 

//Used to print all variables at once in tabular format and all the new changed values will be displayed for the let variables
console.table([accountID,accountEmail,accountPassword,accountState])  

// Prefer not to use var because of issue in block scope and functional scope 