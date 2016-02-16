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

    it('returns "Fizz" if number is divisible by three', function() {
      expect(fizzjuice.response(3)).toBe("Fizz");
    });

    it('returns "Juice" if number is divisible by five', function() {
      expect(fizzjuice.response(5)).toBe("Juice");
    });

    it('returns "FizzJuice" if number is divisible by fifteen', function() {
      expect(fizzjuice.response(15)).toBe("FizzJuice");
    });

    it('returns itself if number is not divisible by 3, 5, 15', function() {
      expect(fizzjuice.response(4)).toBe("4");
    });
  });
});
