function BitCounter() {
	
}
BitCounter.prototype.countBits = function(n) {
	var result = (n).toString(2);
	var counter = 0;
	for (var bit of result) {
		if(parseInt(bit) && 1)
			counter++;
	};
	return counter;
};