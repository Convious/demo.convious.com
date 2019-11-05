function parseQuery(url) {
	// remove any preceding url and split
	url = url.substring(url.indexOf('?')+1).split('&');
	var params = {}, pair, d = decodeURIComponent;
	// march and parse
	for (var i = url.length - 1; i >= 0; i--) {
		pair = url[i].split('=');
		params[d(pair[0])] = d(pair[1] || '');
	}

	return params;
}

updateSrc(parseQuery(window.location.href).url);
//Assign the variable to the iframe src
function updateSrc(srcUrl) {
	document.querySelector('.theFrame').src = srcUrl;
};