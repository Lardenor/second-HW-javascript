"use strict"
// *
// !
// ?
// todo
// 
// 
// 
// 
// 
// 








// *2
// let number= +prompt("Enter number 0-9:");
// switch(number){
//     case 1:
//     alert("!");
//     break;
//      case 2:
//     alert("@");
//     break;
//      case 3:
//     alert("#");
//     break;
//      case 4:
//     alert("$");
//     break;
//      case 5:
//     alert("%");
//     break;
//      case 6:
//     alert("^");
//     break;
//      case 7:
//     alert("&");
//     break;
//      case 8:
//     alert("*");
//     break;
//      case 9:
//     alert("(");
//     break;
//      case 0:
//     alert(")");
//     break;
//     default:alert("Введіть будь ласка число від 0-9");
// }
// !
// !
// !
// !
// !
// !
// !3
// let num = +prompt("Enter of third-number:");
// let firstNum, secondNum, thirdNum;

// if (num > 99 && num < 1000) {
//     firstNum = Math.trunc(num / 100);
//     secondNum = Math.trunc(num % 100 / 10);
//     thirdNum = num % 10;

//     if (firstNum === secondNum && secondNum === thirdNum && thirdNum === firstNum) {
//         alert('Всі числа однакові')
//     }
//     else if (firstNum === secondNum) {
//         alert('Перше число ' + firstNum + ' та друге ' + secondNum + ' однакові')
//     }
//     else if (secondNum === thirdNum) {
//         alert('Друге число ' + secondNum + ' та третє ' + thirdNum + ' однакові')
//     }
//     else if (thirdNum === firstNum) {
//         alert('Третє число ' + thirdNum + ' та перше ' + firstNum + ' однакові')
//     }
//     else {
//         alert('Однакових чисел не має')
//     }

// } else { alert("Введіть трьохзначне число") }
// ?
// ?
// ?
// ?
// ?
// ?
// ?4
// let year = prompt("Enter a year: ");

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   alert(year + " Високосний");
// } else {
//   alert(year + " не Високосний");
// }
// todo
// todo
// todo
// todo
// todo
// todo
// todo5
// let num = +prompt("Enter the five-number:");
// let firstNum, secondNum, fourNum, fiveNum;


// if (num > 9999 && num < 100000) {
//     firstNum = Math.trunc(num / 10000);
//     secondNum = Math.trunc(num % 10000 / 1000);
//     fourNum = Math.trunc(num % 100 / 10);
//     fiveNum = num % 10;
//     if (firstNum === fiveNum && secondNum === fourNum) {
//         alert('palindrom')
//     } else { alert('it`s not palindrom') }
// } else { alert('It`s not five number') }
// *
// *
// *
// *
// *
// *
// *6
// let amountMoney = +prompt("Enter the count money:");
// let currency = prompt('Введіть назву валюти латиницею, з великої літери: USD, UAH, AZN');

// switch (currency) {
//     case 'EUR':
//         alert(amountMoney * 0.92);
//         break;
//     case 'UAH':
//         alert(amountMoney * 41);
//         break;
//     case 'AZN':
//         alert(amountMoney * 100);
//         break;
//     default:
//         alert('Currency not found')
// }
// !
// !
// !
// !
// !
// !
// !7
// let countPrice = +prompt("Enter the count price:");
// let result;
// if (countPrice >= 200 && countPrice <= 299) {
//     result = countPrice - (countPrice * 0.03);
//     alert('Сума зі знижкою ' + result)
// }
// else if (countPrice >= 300 && countPrice <= 499) {
//     result = countPrice - (countPrice * 0.05);
//     alert('Сума зі знижкою ' + result)
// }
// else if (countPrice >= 500) {
//     result = countPrice - (countPrice * 0.07);
//     alert('Сума зі знижкою ' + result)
// } else { alert('Сума не достатня для знижки') }
// ?
// ?
// ?
// ?
// ?
// ?
// ?8
// let lengthCircle = +prompt("Enter a length circle:");
// let perimetrSquare = +prompt("Enter a perimetr square:");

// let radius = (lengthCircle / Math.PI) / 2;
// let sizeSide = perimetrSquare / 4;

// if (radius <= (sizeSide / 2)) {
//     alert('Це коло може поміститись у заданий квадрат')
// } else { alert('Це коло не може поміститись у заданий квадрат') }
// todo
// todo
// todo
// todo
// todo
// todo
// todo9
// alert('Питання номер 1: Якого числа почалась війна:\n1)24 лютого \n2)19 серпня \n3)24 листопада');
// let firstQuestion = +prompt('Відповідь вкажіть в значенні 1-3');
// alert('Питання номер 2: Якого року почалась війна:\n1)2022 \n2)2001 \n3)2014');
// let secondQuestion = +prompt('Question 1. Enter the number 1-3:');
// alert('Питання номер 3: Якого числа народився Шевченко:\n1)9 березня \n2)15 червня \n3)18 листопада');
// let thirdQuestion = +prompt('Question 1. Enter the number 1-3:');

// let res= 0;
// switch (firstQuestion) {
//     case 1:
//         res = 2;
//         break;
//         case 2:
//         break;
//         case 3:
//         break;
//         default:alert("Ви ввели не правильне значення в першому питанні")
// }
// switch (secondQuestion) {
//     case 1:
//         break;
//         case 2:
//         break;
//     case 3:
//         res += 2;
//         break;
//         default:alert("Ви ввели не правильне значення в другому питанні")
// }
// switch (thirdQuestion) {
//     case 1:
//         res += 2;
//         break;
//          case 2:
//         break;
//          case 3:
//         break;
// default:alert("Ви ввели не правильне значення в третьому питанні")
// }

// alert("Кількість зароблених балів: "+res)
// *
// *
// *
// *
// *
// *
// *10
let day = parseInt(prompt("Enter day: "));
let month = parseInt(prompt("Enter month: "));
let year = parseInt(prompt("Enter year: "));

let isLeapYear = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
let daysInMonth;
if (month === 1 ||month === 3 ||month === 5||month === 7||month === 8||month === 10||month === 12) {
daysInMonth=31;
}
else if(month === 2){
daysInMonth =(isLeapYear ? 29 : 28);
}

else if (month === 4||month ===6 ||month ===8||month ===9||month ===11) {
  daysInMonth=30;
}
if (day >= 1 && day <= daysInMonth) {
  day++;
  if (day > daysInMonth) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }
  alert("Наступна дата: " + day + "-" + month + "-" + year);
} else {
  alert("Неправильно введене значення дати, перевірте коректність написання");
}