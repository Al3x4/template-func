function template(str, delims = {}) {
  // Fill this in
  	if (Object.keys(delims).length === 0) {
  		delims = { 
  			open : '*(', 
  			close : ')*' 
  		};
  	};

	let re = new RegExp(`${delims.open}(.*?)${delims.close}`, 'g');

	return function (filler, n) {
				
		let keys = Object.keys(filler); //1. get the object keys 

		let matches = str.match(re); //2. get the matches

		if (matches) { 
			matches.forEach(function(match, index){ //for each match find the corresponding key and replace
				
				let i = keys.indexOf(match.substr(0, match.length - delims.close.length).substr(delims.open.length).trim()); // in the keys array, find the index of the current match
				

				if (i >= 0) {
					str = str.replace(match, filler[keys[i]]);
				};
			});
		}

		while(n--){console.log(str)};	 // remember console.log

	    return str; // template renderer usually returns a str

	}
 };




	let delimiters = {
		open: "<<!",
		close: "!>>"
	}
 	let str = "Is <<! thing !>> healthy to <<! action !>>?";
 	
 	let logResult = template( str, delimiters);
 	
 	let filler = {
 		thing : 'ice cream', 
 		action: 'consume'
 	}

 	logResult( filler, 7 ); 