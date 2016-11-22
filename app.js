const bodyparser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const fonoapi = require('fonoapi-nodejs')
const app= express()
const _ = require("underscore")
fonoapi.token= '7a5c8479953d1b4dca58d0465f14224a1d639cc38a1ee3dc';
const PORT = process.env.PORT || 3000;

var url = 'mongodb://admin:admin12345@ds161487.mlab.com:61487/your-phone'



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

MongoClient.connect(url, (err,db)=>{
	if (err) throw("There werw problems connecting to the DB server...")

	app.post('/add', (req,res) =>{

		var deviceName = req.body.deviceName;
		var brand = req.body.brand;
		var img = req.body.img;
		var dimensions = req.body.dimensions;
		var size = req.body.size;
		var sim = req.body.sim;
		var scrrenType = req.body.scrrenType;
		var resolution = req.body.resolution;
		var card_slot = req.body.card_slot;
		var wlan = req.body.wlan;
		var blutooth = req.body.blutooth;
		var gps = req.body.gps;
		var radio = req.body.radio;
		var usb = req.body.usb;
		var batery = req.body.batery;
		var colors= req.body.colors
		var sensors = req.body.sensors;
		var memory = req.body.memory;
		var os = req.body.os;
		var cam = req.body.cam;
		var c_secondary = req.body.c_secondary;
		var c_primary = req.body.c_primary;
		var video = req.body.video;
		var chipset = req.body.chipset;
		var conections = req.body.conections;

		var myObject = {};

		myObject.deviceName = deviceName;
		myObject.brand = brand;
		myObject.img = img;
		myObject.dimensions = dimensions;
		myObject.size = size;
		myObject.sim = sim;
		myObject.scrrenType = scrrenType;
		myObject.resolution = resolution;
		myObject.card_slot = card_slot;
		myObject.wlan = wlan;
		myObject.blutooth = blutooth;
		myObject.gps = gps;
		myObject.radio = radio;
		myObject.usb = usb;
		myObject.batery = batery;
		myObject.colors= colors
		myObject.sensors = sensors;
		myObject.memory = memory;
		myObject.os = os;
		myObject.cam = cam;
		myObject.c_secondary = c_secondary;
		myObject.c_primary = c_primary;
		myObject.video = video;
		myObject.chipset = chipset;
		myObject.conections = conections;

		db.collection('phones')
			.insert(myObject)
			.then(console.log("VERYYYYY GOOODDD!!!!!!!!!!!!!!!!!!!!!"))
			.then(res.redirect('/#/add'))


	})
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