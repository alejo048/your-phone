const bodyparser = require('body-parser')
const express = require('express')
const db = require('./db')
const _ = require("underscore")
const fs = require('fs');


//si existe el archivo .env lee las variables de entorno del archivo
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').load()


//configuracionde express y puertos (local/produccion)
const app= express()
const PORT = process.env.PORT || 3000;


//require de los routes 
const routerPhones = require('./routes/phones');
const routerS3 = require('./routes/s3');
const routerAuth = require('./routes/auth');


// envio de los archivos estaticos de la carpeta public
app.use( express.static('public') )
// configuracion por defecto del body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



app.use( routerPhones )
app.use( routerS3 )
app.use ( routerAuth )



app.listen(PORT, () => console.log("Listen on PORT 3000..."))



