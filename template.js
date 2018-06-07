var template = function(str, { open = '*(', close = ')*'} = {}) {
	const escapeRegEx = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	let re = new RegExp(`(${escapeRegEx(open)})(.*?)(${escapeRegEx(close)})`, 'g');
	
	//console.log(str2);
	return new Function ("...params", `
		let str2 = '${str}';
		let n = params[params.length-1];
		let matches = str2.match(${re});
		if (matches) {
			matches.forEach(function(match, index){
				str2 = str2.replace(match, params[index]);
			});
		}
		for (let i = 0; i < n; i++){
			console.log(str2);
		}
		return str2;`
	);
 };



t = template( " do you want form me???" );

t( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
