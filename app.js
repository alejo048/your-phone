const bodyparser = require('body-parser')
const express = require('express')
const db = require('./db')
const _ = require("underscore")

const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').load()

const app= express()
const PORT = process.env.PORT || 3000;
const routerPhones = require('./routes/phones');
const routerS3 = require('./routes/s3');



app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

app.use( routerPhones )
app.use( routerS3 )



app.listen(PORT, () => console.log("Listen on PORT 3000..."))



