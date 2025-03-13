function sayHello(name) {
    return `Hello, ${name}!`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const randomNumbers = Array.from({ length: 10 }, () => getRandomInt(100));
console.log("Random numbers:", randomNumbers);


const user = {
    name: "John Doe",
    age: getRandomInt(50) + 20,
    city: "Randomville"
};
console.log("User info:", user);


for (let i = 1; i <= 5; i++) {
    console.log(`Counting: ${i}`);
}
