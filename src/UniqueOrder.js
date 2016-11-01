function UniqueOrder() {
	
}

UniqueOrder.prototype.uniqueInOrder = function(iterable) {
	if(iterable == undefined)
		return [];
	var result = [iterable[0]];
	for(var i of iterable){
		if(result[result.length - 1] !== i)
			result.push(i)
	}
	return result;
};