const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const phone = mongoose.model('phone')

var user_schema = new Schema ({
	name: String,
	email: String,
	password: String,
	fav: { type: Schema.ObjectId, ref: 'phone' } 
})

module.exports = mongoose.model('user', user_schema);