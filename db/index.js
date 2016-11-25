const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

var url = 'mongodb://admin:admin12345@ds161487.mlab.com:61487/your-phone'
mongoose.connect(url)

const db = mongoose.connection;
db.on("error", () => console.log("connection error"))
db.once("open", ()=> console.log("We're connected"))

//If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
   db.close(() => {
     console.log('Mongoose default connection disconnected through app termination');
     process.exit(0);
   });
 });

// When the connection is disconnected
db.on('disconnected', () => {
	console.log('Mongoose default connection disconnected');
});

// When the connection to DB is done
db.on('connected', () => console.log(`Mongoose default connection open to ${url}`));



module.exports= mongoose;