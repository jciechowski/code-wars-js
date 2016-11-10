describe("Function Composition", () => {
	var composer;
	beforeEach(() => {
		composer = new Composer();
	});

	it("Should compose two functions", () => {
		var add1 = function(a){return a + 1}
		var id = function(a){return a}
		var result = composer.compose(add1, id)(0);
		expect(result).toEqual(1);
	})
})