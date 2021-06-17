function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours / 60;
}
var convert = convertHoursToMinutes(5);
console.log('convert', convert);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greet = getGreeting('wurld');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  var sum = num1 + num2;
  return sum * 5;
}
var add = addAndMultiplyBy5(5, 5);
console.log('Add ', add);

function multiplyAndDivideBy5(num1, num2) {
  var sum = num1 * num2;
  return sum / 5;
}
var mult = multiplyAndDivideBy5(5, 5);
console.log('Mult', mult);

function subtractTwoNumbers(num1, num2) {
  var sub = num1 - num2;
  return sub;
}
var sub = subtractTwoNumbers(10, 5);
console.log('Sub', sub);

function getCircleCircumference(radius) {
  var diameter = radius * 2;
  var circ = diameter * 3.14;
  return circ;
}
var circ = getCircleCircumference(10);
console.log('Circ', circ);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}
var name = getFullName('Johnny', 'daRocket');
console.log('Name', name);

function cube(number) {
  var cub = number * number * number;
  return cub;
}
var cubeVar = cube(7);
console.log('CUbe', cubeVar);
