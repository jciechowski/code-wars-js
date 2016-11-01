describe("UniqueInOrder", function() {
	var uniqueOrder;
	beforeEach(function() {
		uniqueOrder = new UniqueOrder();
	});

	it('AAAABBBCCDAABBB', function() {
		expect(uniqueOrder.uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A','B','C','D','A','B']);
	})

	it("ABBCcAD", function() {
		expect(uniqueOrder.uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
	})

	it("[1,2,2,3,3]", function (){
		expect(uniqueOrder.uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
	}) 
});