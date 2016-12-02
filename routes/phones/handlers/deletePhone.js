const Phone = require('../../../models/phone')

function deletePhone(req, res) {
	var data = req.body;
	Phone.findOneAndRemove({_id: req.params.id})
	.then(data => res.json ({data: data , status: "Successful"}))
}
module.exports = deletePhone;