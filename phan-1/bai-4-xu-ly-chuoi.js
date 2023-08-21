let myName = "Teo ";

let myNameLength = myName.length;

console.log(myNameLength);

let helloPrefix = "Hello, my name is ";
let finalString = helloPrefix + myName;

console.log(finalString)

let finalString_2 = helloPrefix.concat(myName);
console.log(finalString_2)

//trim()
let myFirstName = "Nhan "
let myLastName = "Tran"
let myName2 = myFirstName + myLastName
console.log("My name is: ", myName2);

let utilizedFirstName = myFirstName.trim();
myName2 = utilizedFirstName + myLastName
console.log("My name is: ", myName2);

// cat chuoi
let helloString = "Hello"
let helloStringSplit = helloString.split("");
console.log(helloStringSplit);

let helloStringSplit2 = helloString.split("e");
console.log(helloStringSplit2);

let helloString3 = "Hello World"
let helloStringSplit3 = helloString3.split(" ");
console.log(helloStringSplit3);

// indexOf
let indexOfA = helloString3.indexOf("A")
console.log(indexOfA);

let indexOfO = helloString3.indexOf("o")
console.log(indexOfO);
