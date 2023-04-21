var isGenerating = false;
var isGenerated = false;

exports.install = function() {
	ROUTE('GET  /', view_index);
	ROUTE('FILE /sitemap.xml', file_xml);
};

function view_index() {
	var self = this;
	self.plain(self.hostname('sitemap.xml'));
}

function file_xml(req, res) {

	var options = { hostname: req.hostname(), path: PATH.public('sitemap.xml') };

	// Is processed sitemap.xml?
	if (isGenerated) {
		console.log('sitemap.xml -> cache');
		res.continue();
		return;
	}

	// Handle multiple requests
	// [isGenerating === true] the request must wait
	if (isGenerating) {
		setTimeout(file_xml, 1000, req, res);
		return;
	}

	isGenerating = true;

	console.log('sitemap.xml -> creating');
	var worker = WORKER('sitemap', 5000);

	// Send settings
	worker.send(options);

	// Handle exit
	worker.once('exit', function() {

		console.log('sitemap.xml -> created');

		isGenerating = false;
		isGenerated = true;

		res.continue();
	});

}