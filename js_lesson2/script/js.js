// if (greet){
//     [hello];
//     [goodbye];
// }
//
// False:
// false
// 0
// 0n
// ""
// null
// undefined
// NaN
//
// Оператори порівняння:
// let a = 2, b = 3, c = "3";
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); // < >= <=
//
// console.log(b === c); // !==
//
//
// let a = 2, b = 3, c;
//
// if (a > b){
//     c = 'a > b'
// } else{
//     c = 'a < b'
// }
// console.log(c)

// if (a > b){
//     c = "a > b"
// } else{
//     if (a < b){
//         c = "a < b"
//     } else{
//         c = "a === b"
//     }
// }
//
// if (a > b){
//     c = "a > b"
// } else if (a < b){
//     c = "a < b"
// } else{
//     c = "a === b"
// }
//
// if (a > b)c = 'a > b';
// else if (a < b)c = 'a < b';
// else c = "a === b";
//
// Switch
// let course = 'javascript', title;
// let course, title;
// course = prompt('What is your name?');
//
// switch (course) {
//     case 'javascript':
//         title = 'Language JavaScript';
//         break;
//
//     case 'Figma':
//         title = 'Basics Figma';
//         break;
//
//     case 'France':
//     case 'Germany':
//     case 'Spain':
//         title = 'Europe';
//         break;
//
//     default:
//         title = course
//         break;
// }
// console.log(title);
// alert(title);
//
// Logistics No
// let a = false;
// console.log(!a);
// let b = 'text'
// console.log(!!b);
//
// Logistics I
// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
// Logistics Or
// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
// console.log(b || b);
//
// let age = prompt("How old do you want?"), info;
// if (age >= 18 && age <= 35){
//     info = 'Her age is 18 to 35 years'
// }
// else if (age > 35){
//     info = 'Her age is more than 35 years'
// } else{
//     info = 'Her age is lees than 18 years'
// }
// alert(info);