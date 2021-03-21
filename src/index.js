const express = require('express')
require('./db/mongoose')
userRouter=require("./router/UserRouter").router;
const path = require('path');

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


//old ways //Its not required to install body-parser npm
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

//new ways    //https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use(userRouter);



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})








