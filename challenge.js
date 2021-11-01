const fs = require('fs');
const extra = require('./extra');

function beatChallenge() {
	let bigString = extra.randomString();

	// sort bigString:
	// use extra.swap(string, pos1, pos2);
	// YOUR CODE HERE...

	extra.isSorted(bigString);
}

beatChallenge();