describe('FizzJuice', function() {
  var fizzjuice;

  describe('knows when a number is', function() {

    beforeEach(function() {
      fizzjuice = new FizzJuice();
    });

    it('divisible by 3', function() {
      expect(fizzjuice.isDivisibleByThree(9)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzjuice.isDivisibleByFive(15)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzjuice.isDivisibleByFifteen(45)).toBe(true);
    });
  });
});
