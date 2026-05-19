// // Завдання 1
// for (let count = 1; count <= 10; count++) {
//     console.log(count);
// }

// // Завдання 2
// let number = Number(prompt("Введіть число N"));
// for (let even = 2; even <= number; even += 2) {
//     console.log(even);
// }

// // Завдання 3
// let number = Number(prompt("Введіть число N"));
// let total = 0;

// for (let j = 1; j <= number; j++) {
//     total += j;
// }

// console.log(total);

// // Завдання 4
// let number = Number(prompt("Введіть число N"));

// for (let k = number; k > 0; k--) {
//     console.log(k);
// }

// // Завдання 5
// let value = Number(prompt("Введіть число"));

// for (let step = 1; step <= 10; step++) {
//     console.log(`${value} x ${step} = ${value * step}`);
// }

// // Завдання 6
// let secret = "admin123";
// let userInput;

// do {
//     userInput = prompt("Введіть пароль");

//     if (userInput !== secret) {
//         console.log("Пароль невірний");
//     }

// } while (userInput !== secret);

// console.log("Доступ дозволено");

// // Завдання 7
// let secret = "admin123";
// let tries = 0;
// let userInput;

// do {
//     userInput = prompt("Введіть пароль");
//     tries++;

//     if (userInput !== secret) {
//         console.log("Пароль невірний");
//     }

//     if (tries >= 3) {
//         break;
//     }

// } while (userInput !== secret);

// if (userInput === secret) {
//     console.log("Пароль правильний");
// }

// // Завдання 8
// for (let num = 1; num <= 20; num++) {

//     if (num % 2 === 0) {
//         continue;
//     }

//     console.log(num);
// }

// // Завдання 9
// let number = Number(prompt("Введіть число"));
// let digits = 0;

// while (number >= 1) {
//     number = number / 10;
//     digits++;
// }

// console.log(digits);

// // Завдання 10
let hiddenNumber = Number(prompt("Введіть число"));
let guess = 0;

while (guess !== hiddenNumber) {

    guess = Number(prompt("Спробуйте вгадати число"));

    if (guess < hiddenNumber) {
        alert("Загадане число більше");
    }

    if (guess > hiddenNumber) {
        alert("Загадане число менше");
    }
}

alert("Ви вгадали число");