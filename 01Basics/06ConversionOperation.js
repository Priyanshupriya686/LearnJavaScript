//Conversion of string to number
let score = "33" //String data type
console.log(typeof score) //output string

// Conversion to Number 
let valueinnumber = Number(score)
console.log(typeof valueinnumber) //Output will be Number

// lets suppose a string is give like 

let string = "33abc"
console.log(typeof string)
//we will convert this string into nuber 

let StringToNumber = Number(string)
console.log(typeof StringToNumber) // Output Number
// But it is wrong we can not convert a 33abc into a number so lets print the value of StringToNumber
console.log(StringToNumber) // Output : NaN (Means not a number)

//similarly if we convert some data types to numbers it will give outputs as given below
//"33" 33
//"33abc" NaN
//true => 1; false => 0;
//undefined => undefined
//Null => 0
//"hitesh" => Nan

//Similarly we can covert any data types to any data but always we have to check the output wo sahi me convert ho bhi rha hai ki nhi 

//***********************  Operations  ********************************** *//
