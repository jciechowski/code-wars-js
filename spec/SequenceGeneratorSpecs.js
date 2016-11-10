describe('Sequence generator', () => {
    var generator;
    beforeEach(() => {
        generator = new SequenceGenerator();
    });

    it("Should generate three elements array of 4's", () => {
        var sequence = generator.sequence(3, 4);
        expect(sequence).toEqual([4, 4, 4]);
    })

    it("Should generate five elements array of empty arrays", () => {
        var sequence = generator.sequence(5, []);
        expect(sequence).toEqual([[], [], [], [], []])
    })

    it("Should generate 2 elements array of string", () => {
    	var sequence = generator.sequence(2, "s");
    	expect(sequence).toEqual(["s", "s"]);
    })

    it("Should generate array with result of applying function", () => {
    	var sequence = generator.sequence(5, (x, idx) => idx%2);
    	expect(sequence).toEqual([0,1,0,1,0]);
    })
	
	it("Should generate array with result of applying function", () => {
    	var sequence = generator.sequence(10, (x, idx) => idx+1);
    	expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })
    
})