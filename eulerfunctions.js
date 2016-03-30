// sum of numbers which are multiples of 3 or 5, up to 1000
var three_or_five_sum = function() {
	var total = 0;
	for (i=1; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0)
		{
			total += i;
		}
	}
	return total;
};

// sum of even terms in Fibonacci series, terms <= 4000000
var fib_sum = function() {
	var total = 0;
	var fib1 = 1;
	var fib2 = 2;

	while (fib2 <= 4000000) {
		if (fib2 % 2 === 0) {
			total += fib2;
		}
		var newfib = fib1 + fib2;
		fib1 = fib2;
		fib2 = newfib;
	}
	return total;
};

// function for testing primality
var isPrime = function(num) {
	var prime = true;
	var j = 2;
	while (j < num) {
		if (num % j === 0) { // not prime
		   prime = false;
		   break; 
		}
		j++;
	}
	return prime;
};

// find largest prime factor
var primeFactor = function(num) {
	var limit = 10000;
	if (num < limit) {
		limit = num;
	}

	var factors = [];
	for (i = 2; i < limit; i++) {
		console.log(i);
		if (isPrime(i)) {
			if (num % i === 0) {
				factors.push(i);
			}
		}
	}
	console.log(factors);
	if (factors.length < 1) { // no factors, num is prime
		return 1;
	}
	else {
		// last factor is largest
		return factors[(factors.length) - 1];
	}
}
