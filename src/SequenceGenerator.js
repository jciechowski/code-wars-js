function SequenceGenerator() {

}

SequenceGenerator.prototype.sequence = (n, pattern) => {
	if(pattern == undefined)
		pattern = null;
    let result = [];
    console.log(pattern);
    if (typeof pattern === "function")
        for (var i = 0; i < n; i++) {
        	result.push(pattern(i));
        }
    else {
        for (var i = 0; i < n; i++)
            result.push(pattern);
    }
    return result;
}