function FizzJuice() {

};

FizzJuice.prototype.isDivisibleByThree = function(number) {
  return isDivisibleBy(number, 3);
};

FizzJuice.prototype.isDivisibleByFive = function(number) {
  return isDivisibleBy(number, 5);
};

FizzJuice.prototype.isDivisibleByFifteen = function(number) {
  return isDivisibleBy(number, 15);
};

FizzJuice.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};