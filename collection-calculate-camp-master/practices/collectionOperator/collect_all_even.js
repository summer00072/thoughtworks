'use strict';

function collect_all_even(collection) {
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		if (!(collection[i] % 2)){
			result.push(collection[i]);
		}
	}
	return result;
  //在这里写入代码
}

module.exports = collect_all_even;
