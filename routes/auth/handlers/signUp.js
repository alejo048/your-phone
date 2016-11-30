var mongoose = require('mongoose'); 
var User = require('../../../models/user') 
var jwt = require('jsonwebtoken') 

function signUp (req, res) {  
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                var addUser = new User(req.body);
                console.log(req.body)
                console.log(process.env.JWT_SECRET)
                addUser.save(function(err, user) {
                    user.token = jwt.sign(user, process.env.JWT_SECRET);
                    user.save(function(err, user1) {
                        console.log(user1.token)
                        res.json({
                            type: true,
                            data: user1,
                            token: user1.token
                        });
                    });
                })
            }
        }
    });
};

module.exports = signUp;