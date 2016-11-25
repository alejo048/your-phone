const fonoapi = require('fonoapi-nodejs')
fonoapi.token= '7a5c8479953d1b4dca58d0465f14224a1d639cc38a1ee3dc';

function getSearch (req,res){

	var name = req.query.name;

	var printNames = (queryString,data) => {
		res.json(data)
	}

	fonoapi.getDevices(printNames,name);
}


/*var testModelStrings = [
	'galaxy s 5',	// returns empty
	'galaxy s5',
	'iphone', ' iphone', 'apple iphone'
	];

	testModelStrings.forEach(function (modelStr) {
		fonoapi.getDevices(fonoapi.printCount, modelStr);
	});

	fonoapi.getLatest(fonoapi.printAllNames, 5, 'apple');*/

	
module.exports = getSearch;