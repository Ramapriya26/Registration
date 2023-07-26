
var express = require('express');
// const mongoose = require('./db/db');
var mongoose = require("mongoose")
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
const PORT = 5005;

var mongoClient = require("mongodb").MongoClient;
var dburl ="mongodb+srv://Rama:ramapriya26@cluster0.dq0baqr.mongodb.net/EmployeeDetails?retryWrites=true&w=majority";

//connects
let db;

// let userCollection;
mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log("err while connecting db");
  } else {
    db = client.db("Authentication");
    app.set('db',db)
    // const locationdet = req.app.get('locationCollection')
    console.log("connected to db");
  }
});

mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology: true,autoIndex: true,},
  (err) => { 
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.get("/", function (req, res) {
    console.log("some thing");

    res.send("Welcome to my Home page.")
})

const locationRoutes= require("./routes/loginRoutes")
// app.use(require('./routes/loginRoutes'));
app.use("/routes", locationRoutes);
// const bookRoutes= require("./routes/book")
// app.use("/api", bookRoutes);
// let favlist;
// app.post("/favlist", function (req,res) {
//   favlist = db.collection("favlist")
//   favlist.findOne({_id:req.body._id},function (err,result){
//     if (result==null){
//       favlist.insert(req.body);
//       res.send("added to fav list");
//     }
//     else
//     res.send("already added");
//   })
  
  
// })
// app.get("/favlist",function (req,res) {
//   favlist = db.collection("favlist")
//   favlist.find({}).toArray(function(err,result){
//     if (err) throw err;
//     // console.log("favbooklist:::",result);
//     res.send(result);

//   })})



//.........................................................
app.listen(PORT, function (err, res) {
    if (err)
        throw err;
    console.log(`Application is started successfull and running on port: ${PORT}`);
});




