function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function map (array, callback) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray[i] = callback(array[i]);
	}
	return newArray;
}

function reduce (array, callback) {
	var result = array[0];
	for (var i = 1; i < array.length; i++) {
		result = callback(result, array[i]);
	}
	return result;
}

function filter (array, callback) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			newArray[newArray.length] = array[i];
			// newArray.push(array[i]);
		}
	}
	return newArray;
}

var books = [
    {
    	title: "Cymbeline",
    	author: "Shakespeare",
    	year: 1623
    },
    {
    	title: "The Tempest",
    	author: "Shakespeare",
    	year: 1623
    },
    {
    	title: "Hamlet",
    	author: "Shakespeare",
    	year: 1603
    },
    {
    	title: "A Midsummer Night's Dream",
    	author: "Shakespeare",
    	year: 1600
    },
    {
    	title: "Macbeth",
    	author: "Shakespeare",
    	year: 1620
    },
    {
    	title: "Death of a Salesman",
    	author: "Arthur Miller",
    	year: 1949
    },
    {
    	title: "Two Blind Mice",
    	author: "Samuel and Bella Spewack",
    	year: 1949
    }
];

// Exercise 1
// The pluck function should take an array of objects and a property name (string). It should return a new array containing the values of that specific property at each object.

function pluck (array, string) {
	var newArray = map(array, function (x) {
		return x[string];
	});
	return newArray;
}

pluck(books, 'year');

console.log(pluck(books, 'year'));
// console.assert(pluck(books, 'author'));



// Exercise 2
// The reject function should take an array and a callback function. It should do the opposite of filter, that is, if the callback returns a "truthy" value, that item is not inserted into the new array. Otherwise it is.

function reject (array, callback) {
	var newArray = filter(array, function (x) {
		return !callback(x);
	});
	return newArray;
}

var res = reject(books, function (x) {
	return x.year > 1900;
});

console.assert(res.length === 5);

var res = reject(books, function (x) {
	return x.author === 'Shakespeare';
});

console.assert(res.length === 2);



// Exercise 3
// The find function should take an array and a callback function. It should return the first value in an array that returns true when executed with the callback.

function find (array, callback) {
	return reject(array, callback)[0];
}


var please = find(books, function (x) {
	return x.year > 1900;
});

console.assert(please = { title: 'Cymbeline', author: 'Shakespeare', year: 1623 });



// Exercise 4
// The where function should take an array of objects and an criteria object. It should return a new array containing the objects from the original array that have identical values as the criteria object.

function where (array, criteria) {
	return filter(array, function (x) {
		for (var prop in criteria) {
			if (criteria[prop] !== x[prop]) {
				return false;
			}
		}
		return true;
	});
}

var tryIt = where(books, {
	author: 'Shakespeare',
	year: 1623
});

console.assert(tryIt.length === 2);
console.assert(tryIt[0].title === "Cymbeline");

























