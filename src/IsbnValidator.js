function IsbnValidator () { 
	
}

IsbnValidator.prototype.validISBN10 = function(isbn) {
	if(isbn.length < 10 || isbn.length > 10)
		return false;
	var counter = 1;
	var sum = 0;
	for(var i=0;i<isbn.length;i++) {
		if(isbn[i] === 'X' && i == isbn.length - 1)
			sum += 10*counter;
		else
			sum += isbn[i]*counter;
		counter++;
	}
	return (sum % 11) == 0;
};