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
var parsed = parseQuery(window.location.href)
if(parsed.url){
	updateSrc(parsed.url);
}
insertLoader(parsed.slug);

function updateSrc(srcUrl) {
	document.querySelector('.theFrame').src = srcUrl;
}

function insertLoader(slug) {
	if (!slug){
		slug='fort_fun'
	}
	var script = document.createElement("script")
	script.type = "text/javascript";
	script.id = "convious_loader"
	script.src = 'https://client.convious-app.com/loader.js?k='+slug;
	document.getElementsByTagName("head")[0].appendChild(script);
}
