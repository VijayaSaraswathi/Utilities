// input [ 1, 2, 3, [3, 4], 'a', 'b', 1 ]


function recursiveArraySum(arr) {
	let sum = 0;
	if (Math.round(arr) === arr) {
		return arr;
	}

	if (!Array.isArray(arr)) {
		throw Error('should be a number or an array');
	}

	return arr.reduce((prev, current) => {
		if (Array.isArray(current)) {
			prev += arrSum(current);
		}

		if (Math.round(current) === current) {
			prev += current;
		}

		return prev;
	}, 0);
}
