const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var phone_schema = new Schema({
	deviceName:String, 
	brand:String, 
	img:String, 
	dimensions:String, 
	size:String, 
	sim:String, 
	screenType:String, 
	resolution:String, 
	card_slot:String, 
	wlan:String, 
	bluetooth:String, 
	gps:String, 
	radio:String, 
	usb:String, 
	batery:String, 
	colors:String, 
	sensors:String, 
	memory:String, 
	os:String, 
	cam:String, 
	c_secondary:String, 
	c_primary:String, 
	video:String, 
	chipset:String, 
	conections:String, 

})

phone_schema.plugin(mongoosePaginate);

module.exports = mongoose.model('phone', phone_schema);