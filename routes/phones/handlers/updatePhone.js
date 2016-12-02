const Phone = require('../../../models/phone')

function updatePhone(req, res) {
	var data = req.body;
	Phone.findOneAndUpdate({_id: req.params.id},{$set:data})
	.then(data => res.json ({data: data , status: "Successful"}))
}
module.exports = updatePhone;