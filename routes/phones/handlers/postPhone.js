const Phone = require('../../../models/phone')


function postPhone (req,res) {

		var addPhone = new Phone (req.body);
		
		addPhone.save (( err, addPhone ) => {
			if (err) return console.error(err)
			console.log("saved succesfully")
		})

		res.redirect('/#/add')


}

module.exports = postPhone;