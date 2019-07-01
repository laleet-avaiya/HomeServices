const express = require('express');
const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var mongoose = require('mongoose');
var url = "mongodb+srv://lmavaiya:111996A@M@cluster0-ivhjb.mongodb.net/HomeServices?retryWrites=true";
// var url = "mongodb://localhost:27017/test";
mongoose.connect(url, { useNewUrlParser: true });
var Schema = mongoose.Schema;

// Create Schema and Model it
var AdminSchema = new Schema({
    _id: Number,
    email: String,
    password: String,
});

var ClientSchema = new Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    address:String,
    date_of_birth:String,
    status: Number,
});

var WorkerSchema = new Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    address:String,
    date_of_birth:String,
    work_type: Number,
    status: Number,
});

var ServicesSchema = new Schema({
    _id: Number,
    name: String,
    avtar: String,
  });

var BookingSchema = new Schema({
    _id: Number,
    client_id:Number,
    worker_id:Number,
    date_time:String,
    address:String,
    status:Number,
  });


const Admin = mongoose.model('Admin', AdminSchema);
const Client = mongoose.model('Client', ClientSchema);
const Worker = mongoose.model('Worker', WorkerSchema);
const Services = mongoose.model('Services', ServicesSchema);
const Booking = mongoose.model('Booking', BookingSchema);


app.get('/api/services/', (req,res) => {
    var query = Services.find({});
    query.exec(function (err, docs) {
      if (err)
        res.send({ "msg": "Not Found" });
        console.log(docs);
      res.json(docs);
    });
})


app.get('/api/worker/', (req,res) => {
    var query = Worker.find({});
    query.exec(function (err, docs) {
      if (err)
        res.send({ "msg": "Not Found" });
        console.log(docs);
      res.json(docs);
    });
})
const port = 5000
app.listen(port,() => console.log("server Started"))