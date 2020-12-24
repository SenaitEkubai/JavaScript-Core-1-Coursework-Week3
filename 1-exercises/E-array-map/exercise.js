// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// one way is by declaring a function and passing the function as an argument to the map method
function multipliedBy100(num) {
  console.log(num * 100);
}
numbers.map(multipliedBy100);
//using arrow function
console.log((multipleOf100 = numbers.map((number) => number * 100)));
//removing function name
var numbersmultipliedBy100 = numbers.map(function (number) {
  console.log(number * 100);
});
