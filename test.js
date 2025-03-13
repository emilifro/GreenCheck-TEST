
const numbers = Array.from({ length: 10000 }, (_, i) => i);
const squaredNumbers = numbers.map(num => {
    return num * num; 
});


function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
for (let i = 0; i < 1000; i++) {
    let rand = getRandomNumber();
    console.log(rand + rand);
}


const fs = require("fs");
const data = fs.readFileSync("largefile.txt", "utf-8"); 
console.log("File read completed");

// Unoptimized Recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); 
}
console.log(fibonacci(30));


const bigArray = new Array(1e6).fill({ name: "Memory Leak" }); 


let str = "";
for (let i = 0; i < 10000; i++) {
    str += "a"; 
}
console.log("String built");