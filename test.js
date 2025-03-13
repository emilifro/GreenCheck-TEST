/*
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


const users = Array.from({ length: 5000 }, (_, i) => ({ id: i, name: `User${i}` }));
const userNames = users.map(user => user.name); 
console.log("Processed user names");


const evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log("Filtered even numbers");

// Bad Event Loop Handling
setTimeout(() => {
    for (let i = 0; i < 1e6; i++) {
        console.log("Blocking operation", i);
    }
}, 1000);


function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
        sum += Math.sqrt(i); 
    }
    return sum;
}
console.log("Heavy computation result:", heavyComputation());

*/

