var request = require('request');

var appRouter = function(app) {
	app.get("/", function(req, res){
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
		//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9876');

		request('http://api.brewerydb.com/v2/beer/random?key=797f06c23c19abc431ac733361405feb', function(error, response, body) {		
			res.send(body);
		});
	});
}

module.exports = appRouter;
