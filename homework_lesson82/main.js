// =======1 ЗАДАНИЕ======

// function greeting (name) {
//   console.log(`Hello, ${name}`);
// }

// greeting('David')

// =======2 ЗАДАНИЕ======

// ===============Через forEach==================

/* 
const myArray = [12, 9, 33, 4, 59, 21, 1, 5, 17, 101]

function printNumbersGreaterThanTen (myArray) {
  myArray.forEach(number => {
    if (number > 10) {
      console.log(number);
    }
  })
}

printNumbersGreaterThanTen(myArray)

=============Через FOR================

const myArray = [12, 9, 33, 4, 59, 21, 1, 5, 17, 101]

function printNumbersGreaterThanTen (myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 10) {
      console.log(myArray[i]);
    }
  }
}
printNumbersGreaterThanTen(myArray)
*/

// ==========3 ЗАДАНИЕ=============


 function calculating(num1, num2, operator) {
  switch (operator) {
    case 'plus':
    case 'add':
      return num1 + num2;
    case 'minus':
    case 'subtract':
      return num1 - num2;
    case 'multiply':
    case 'times':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Деление на ноль невозможно'
    default:
      'Неверный оператор'
  }
}


console.log(calculating(1242352, 0, 'divide')); 