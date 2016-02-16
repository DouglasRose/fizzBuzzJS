function FizzJuice() {

};

FizzJuice.prototype.isDivisibleByThree = function(number) {
  return this.isDivisibleBy(number, 3);
};

FizzJuice.prototype.isDivisibleByFive = function(number) {
  return this.isDivisibleBy(number, 5);
};

FizzJuice.prototype.isDivisibleByFifteen = function(number) {
  return this.isDivisibleBy(number, 15);
};

FizzJuice.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

FizzJuice.prototype.response = function(number) {
  if (this.isDivisibleByFifteen(number))
  return "FizzJuice";

  else if (this.isDivisibleByFive(number))
  return "Juice";

  else if (this.isDivisibleByThree(number))
    return "Fizz";

  else
    return String(number);
};
