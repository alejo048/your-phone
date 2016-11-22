const bodyparser = require('body-parser')
const express = require('express')
const fonoapi = require('fonoapi-nodejs')
const app= express()
const _ = require("underscore")
fonoapi.token= '7a5c8479953d1b4dca58d0465f14224a1d639cc38a1ee3dc';
const PORT = process.env.PORT || 3000;



app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )



app.get('/data', (req,res) => {

	var printNames = (queryString,data) => {
		var brands = data.map((item)=> {
			newItem =[]
			newItem = item.Brand;
			return newItem
		})

		brands = _.uniq(brands)
		data.push(brands)
		console.log(data);

		res.json(data)
	}
	
	fonoapi.getLatest(printNames,100);
})

app.get('/search', (req,res) => {

	var name = req.query.name;

	var printNames = (queryString,data) => {

		res.json(data)
	}
	
	fonoapi.getDevices(printNames,name);
})

app.listen(PORT, () => console.log("Listen on PORT 3000..."))



/*var testModelStrings = [
	'galaxy s 5',	// returns empty
	'galaxy s5',
	'iphone', ' iphone', 'apple iphone'
	];

	testModelStrings.forEach(function (modelStr) {
		fonoapi.getDevices(fonoapi.printCount, modelStr);
	});

	fonoapi.getLatest(fonoapi.printAllNames, 5, 'apple');*/