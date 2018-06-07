function template(str, { open = '*(', close = ')*'} = {}) {

	//escape function via MDN
	const escapeRegEx = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	//let re = new RegExp('(' + escapeRegEx(open) + ')(.*?)(' + escapeRegEx(close) + ')', 'g');
	let re = new RegExp(`${escapeRegEx(open)}(.*?)${escapeRegEx(close)}`, 'g');

	return function (...params) {

		let str2 = str;

		n = params[params.length-1];

		let matches = str2.match(re); //2. get the matches

		if (matches) { 
			matches.forEach(function(match, index){ //for each match find the corresponding key and replace
				
				str2 = str2.replace(match, params[index]);
				

			});
		}

		for (let i = 0; i < n; i++){
			console.log(str2)
		}
		// remember console.log

	    return str2; // template renderer usually returns a str

	}
 };




	// let delimiters = {
	// 	open: "<<!",
	// 	close: "!>>"
	// }



var string = "Is <<! thing !>> healthy to <<! action !>>?";
var logResult = template( string, {open: '<<!', close: '!>>'} );
logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times

 var t = template('Hello, world!');
t(2);