describe("Isbn Validate", function() {
	var isbnValidator;
	beforeEach(function() {
		isbnValidator = new IsbnValidator();
	});

	it("Should return true for 1112223339", function() {
		expect(isbnValidator.validISBN10('1112223339')).toEqual(true);
	});

	it("Should return true for 1234554321", function() {
		expect(isbnValidator.validISBN10('1234554321')).toEqual(true);
	});

	it("Should return false for 1234512345", function() {
		expect(isbnValidator.validISBN10('1234512345')).toEqual(false);
	});	

	it("Should return true for 048665088X", function() {
		expect(isbnValidator.validISBN10('048665088X')).toEqual(true);
	});	

	it("Should return false for too short ISBN", function() {
		expect(isbnValidator.validISBN10('1293')).toEqual(false);
	})

	it("Should return false for too long ISBN", function() {
		expect(isbnValidator.validISBN10('11122233391')).toEqual(false);
	})

	it("X can only be last digit", function() {
		expect(isbnValidator.validISBN10('X123456788')).toEqual(false);
		expect(isbnValidator.validISBN10('14X1111111')).toEqual(false);
	})
	  
})