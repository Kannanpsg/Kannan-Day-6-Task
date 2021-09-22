// Remaining Codings>>JS


let value = Number(prompt("How many runs you scored in this ball"));
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log(`You hit ${value}`);
}

let login = "Employee";
let message =
    login == "Employee" ?
    "Welcome" :
    login == "Director" ?
    "Greetings" :
    login == "" ?
    "No login" :
    "";

console.log(message);

// You cant change the value of the msg
let message1;
if (null || 2 || undefined) {
    message1 = "welcome boss";
} else {
    message1 = "Go away";
}
console.log(message1);

let message2;
let lock = 0;
//Dont change any code below this
if (null || lock || undefined) {
    message2 = "Go away";
} else {
    message2 = "welcome";
}
console.log(message2);

let message3;
let lock1 = 0;
//Dont change any code below this
if ((lock1 && " ") || undefined) {
    message3 = "Go away";
} else {
    message3 = "welcome";
}
console.log(message3);

//You can change only 2 characters
let i = 3;
while (i > 0) {
    console.log(i--);
}

for (let num = 1; num <= 10; num++) {
    console.log(num);
}

//You are allowed to modify only one character
for (let num = 2; num <= 20; num += 2) {
    console.log(num);
}

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

let countdown = 100;
while (countdown >= 0) {
    countdown--;
    if (countdown == 0) {
        console.log("bomb triggered");
    }
}

// Message 'hi' will be printed since lemein is String and its Boolean value is True
// whereas lemeout is False
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += "Hello";
}