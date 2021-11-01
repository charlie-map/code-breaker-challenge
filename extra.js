let time;

module.exports = {
	// this will give you a 1 million digit code to try
	// and break
	randomString: function() {
		let string = "";

		for (let i = 0; i < 1000; i++) {
			string += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
		}

		time = Date.now();
		return string;
	},

	// swaps two values in a string at positions
	// v1 and v2, remember that strings are
	// immutable, which means that have to set
	// your previous string equal to this new
	// string:
	swap: function(string, v1, v2) {

		// if the positions are the same,
		// we don't want to swap anything
		if (v1 == v2)
			return string;

		// decide which position is lower
		// this is needed to correctly splice
		// the string
		let low = v1 < v2 ? v1 : v2;
		let high = v1 > v2 ? v1 : v2;

		// get the string to the left of the low value
		let left = low > 0 ? string.substring(0, low) : "";
		// get the string in between low and high (if there is one)
		let mid = string.substring(low + 1, high);
		// get the string to the right of the high value
		let right = string.substring(high + 1);

		// get the values at low and high
		low = string[low];
		high = string[high];

		// combine all the strings and swap the positoin
		// of low and high:
		return left + high + mid + low + right;
	},

	// this function will check if any given
	// input of array is sorted or not
	isSorted: function(arr) {
		let endTime = Date.now();

		let low = arr[0];

		for (let i = 1; i < arr.length; i++) {

			if (low > arr[i]) {
				console.log("Your code breaking skills have failed. Try again.");
				process.exit();
			}

			low = arr[i];
		}

		endTime = endTime - time;
		if (endTime < 20)
			console.log("Sucess! You have gained access!");
		else
			console.log("Your code breaking skills were too slow.");
		process.exit();
	}
}