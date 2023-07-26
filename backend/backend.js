const express = require('express');
const app = express();
const port = 4000;

var cors = require('cors');
var bodyParser = require('body-parser');
const dataRouter = require('./routes/userroutes');
const mongoose = require('mongoose');


var dbURL = "mongodb+srv://Rama:ramapriya26@cluster0.dq0baqr.mongodb.net/Registration?retryWrites=true&w=majority";


const connectDB = mongoose.connect(dbURL, {useNewUrlParser: true})
.then((result) => {
    console.log('DB connected');
})
.catch((err)=> console.log(err));




app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/', dataRouter);


app.listen(port,() => {
    console.log(`Express listening on port ${port}!`)
});
