const Phone = require('../../../models/phone')

function getAll(req, res) {
	Phone.find()
		.then( data => res.json(data) )
		.catch( console.log )

}
module.exports = getAll;