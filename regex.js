/*****************
 * Author: Simeon Udoh
 */

/* A collection of regular expressions for form validation */

function validateName() {
	const re = /^([a-zA-Z|-]{2,}\s){1,6}$/i;

	return re.test(string); // returns true if matched and false if wrong
}

function validateZip(string) {
	const re = /^[0-9]{6}|([0-9\-]{6})$/i;

	return re.test(string); // returns true if matched and false if wrong
}

//

function validateEmail(string) {
	// TEST EMAILS
	let email = "seyi@hng.tech"; //True
	email = "simeon.udoh45@gmail.com"; //True
	email = "simeon.udoh45@yahoo.com"; //True
	email = "simeon.udoh45@yandex.com"; //True
	email = "seyi-something@protonmail.com"; //True
	email = "seyi@hng.tech"; //True

	// Regex for email
	const re = /^\s?(([\w+_\.\-]+)@([\w+_\.\-]+)\.([a-zA-Z]{2,5}))/i;

	return re.test(string); // returns true if matched and false if wrong
}

function validatePhone(string) {
	// Matches Nigerian numbers with starting with +234, 234 or 0 followed by any 10 digit number
	const re = /^((\+?234)|0)(\d{10})$/;

	// Regex for foreign numbers

	// const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

	// TESTING
	return re.test(string); // returns true if matched and false if wrong
}


// NOTES 

/************************
 * Regular Expressions
 */

// let re;
// re = /hello/;
// re = /hello/i; // i FLAG means case insensitive

// re = /hello/g; //g flag means  Global search


/* REGEX FUNCTIONS */ 
//* exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result.input);

//* test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

//*** match() - Return result array or null */
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//* search() - Returns the index of the first match if not found returns -1

// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

//* replace() - returns a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

/***********************
 * 
 * Metacharacter Symbols
 */

// let re;
// //* Literal Characters
// re = /hello/;
// re = /hello/i;

//* Metacharacter Symbols

// re = /^h/i; // Must start with

// re = /world$/i; // Must end with

// re = /^hello$/i; // Must begin and end with

// re = /h.llo/i; // Matches one character
// re = /h*llo/i; // Matches any character 0 or more times.

// re = /gre?a?y/i; // Optional character

// re = /gre?a?y\?/i; // Escape character

// //* Brackets [] - character set

// re = /gr[ae]y/i; //MUST be an a or e
// re = /[GF]ray/i; //MUST G or F
// re = /[^GF]ray/i; //Match anything except a G or F
// re = /[A-Z]ray/; //Match any  uppercase letter
// re = /[a-z]ray/; //Match any  lowercase letter
// re = /[A-Za-z]ray/; //Match any letter
// re = /[0-9]ray/; //Match any digit

// //* Braces {} - Quantifiers

// re = /Hel{2}o/i; // Must occur exactly {m} amount of times.
// re = /Hel{2,4}o/i; // Must occur exactly {m-m} amount of times.
// re = /Hel{2,}o/i; // Must occur atleast {m} times

// //* Parentenses - Grouping

// re = /^([0-9]x){3}$/; // Must occur exactly {m} amount of times.

// re = /^([0-9]x){3}$/; // Must occur exactly {m} amount of times.

// //* Shorthand Character Classes
// re = /\w/; // Word character - alphanumeric
// re = /\w+/; // + means one or one character
// re = /\W/; // none word characters
// re = /\d/; // Match any digit
// re = /\d+/; // Match any digit one or more times

// re = /\D/; // Match non digit

// re = /\d/; // Match any digit
// re = /\s/ // Match whitespace char
// re = /\S/ // Match non whitespace char

// re = /Heaven\b/i;  // Word boundary

// // Assertions

// re = /x(?=y)/;  //Match x if ONLY followed by y
// re = /x(!y)/; //Match x if it is not followed by y.