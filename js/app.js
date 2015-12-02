// Fizzbuzz Refactor

var number = parseInt(prompt("Please enter a number:"));
  while (isNaN(number)) {
    number = parseInt(prompt("Please try again:"));
  } 

function fizzbuzz(num) {

  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz!");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
        console.log(i);
      }
  }
}

fizzbuzz(number);

// Multiple Fizzbuzz Printers



/* Original Fizzbuzz

for (i = 1; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
     console.log("Fizzbuzz!");
   }
   else if (i % 3 == 0) {
     console.log("Fizz");
   }
   else if (i % 5 == 0) {
     console.log("Buzz");
   } else {
       console.log(i);
      }
  }
*/