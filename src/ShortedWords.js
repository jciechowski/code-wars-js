function ShortWord() {
	
}
ShortWord.prototype.findShort = function(input) {
	var words = input.split(' ');
	words.sort(function(a, b) { 
		return a.length - b.length; 
	});
	return words[0].length;
};