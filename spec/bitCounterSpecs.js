describe("BitCounter", function() {
	var bitCounter;
	beforeEach(function() {
		bitCounter = new BitCounter();
	});

	it("should counter number of bits in number", function() {
		var bits = bitCounter.countBits(3);
		expect(bits).toEqual(2);
	})

	it("should count number of bits in 7", function() {
		var bits = bitCounter.countBits(7);
		expect(bits).toEqual(3);
	})

	it("should counter number of bits in 16", function() {
		var bits = bitCounter.countBits(16);
		expect(bits).toEqual(1);
	})
})