const mongoose = require('mongoose')

//setup to connect to the database
//mongoose.connect('process.env.MONGO_URI', {
mongoose.connect('mongodb://127.0.0.1:27017/taskapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

