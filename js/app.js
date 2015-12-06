var jsElement = $('#js');
for(i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
    $(jsElement).append('fizzbuzz');
  }
  else if (i % 3 === 0) {
    console.log('fizz');
    $(jsElement).append('fizz');
    }
  else if (i % 5 === 0) {
    console.log('buzz');
    $(jsElement).append('buzz');
  }
  else {
    console.log(i);
    $(jsElement).append(i);
  }
}


//separate
//var firstNumber = addNumbers(5, 10);
//var secondNumber = addNumbers(20, 50);
//function addNumbers(numberOne, numberTwo) {
//  return numberOne + numberTwo;
//}

//function logMessage(message) {
//  console.log(message);
//}

//logMessage('hello world');

//objects
//var employees = [{
 // name : 'Zack', 
  //age : '30'
//}, {
  //name : 'name'
  //age : '25'
//}];

//console.log(person.name);



