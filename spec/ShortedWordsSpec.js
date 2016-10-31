describe("ShortWord", function() {
	var shortWord;
	beforeEach(function() {
		shortWord = new ShortWord();
	});

	it("should find the shortest word", function() {
		var shortest = shortWord.findShort("turns out random test cases are easier than writing out basic ones")
		expect(shortest).toEqual(3);
	});
});