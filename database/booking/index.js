const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt-nodejs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var url = "mongodb+srv://lmavaiya:111996A@M@cluster0-ivhjb.mongodb.net/HomeServices?retryWrites=true";
mongoose.connect(url, { useNewUrlParser: true }, () => console.log("Database Connected."));
require('./booking')
const Booking = mongoose.model('Booking');


//-----------------------------------------------------------------------------------------------
// ------------------------------------------Home------------------------------------------------
//-----------------------------------------------------------------------------------------------
app.get('/', (req, res) => res.send('booking service on...'))


//------------------------------------------------------------------------------------------------
// -------------------------------------- Insert New Request from client -------------------------
//------------------------------------------------------------------------------------------------
app.post('/add_service_request/', (req, res) => {

  var new_service_request = new Booking();

  new_service_request.client_id = mongoose.Types.ObjectId(req.body.client_id);
  new_service_request.service_type = mongoose.Types.ObjectId(req.body.service_type);
  new_service_request.worker_id = null;

  new_service_request.address = req.body.address;
  new_service_request.status = 3;
  new_service_request.total_amount = 100;

  new_service_request.request_date_time = Date.now();
  new_service_request.date_time = Date.now();
  new_service_request.close_date_time = null;

  new_service_request.save()
    .then(() => res.send("Request Added Successfully"))
    .catch((err) => {
      res.send("Something wrong happened Try Again.")
    }
    );
})


//------------------------------------------------------------------------------------------------
// -----------------------  Update booking ( Assign worker, status update etc...) ----------------
//------------------------------------------------------------------------------------------------

app.post('/update_request/', (req, res) => {
  res.send("Updated");
})



//------------------------------------------------------------------------------------------------
// -------------------------------------- Find All -----------------------------------------------
//------------------------------------------------------------------------------------------------
app.get('/booking/', (req, res) => {
  var query = Booking.find({});
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})


//------------------------------------------------------------------------------------------------
// -------------------------------------- find by Id----------------------------------------------
//------------------------------------------------------------------------------------------------
app.get('/by_id/:id', (req, res) => {
  var query = Booking.findById(req.params.id);
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})


//------------------------------------------------------------------------------------------------
// ---------------------------- find by client_id ------------------------------------------------
//------------------------------------------------------------------------------------------------
app.get('/by_client_id/:client_id', (req, res) => {
  var query = Booking.find({ client_id: req.params.client_id });
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})



//------------------------------------------------------------------------------------------------
// ---------------------------- find by worker_id -- ---------------------------------------------
//------------------------------------------------------------------------------------------------
app.get('/by_worker_id/:worker_id', (req, res) => {
  var query = Booking.find({ worker_id: req.params.worker_id });
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})


//------------------------------------------------------------------------------------------------
// ---------------------------- find by service_type ---------------------------------------------
//------------------------------------------------------------------------------------------------
app.get('/by_service_type/:service_type', (req, res) => {
  var query = Booking.find({ service_type: req.params.service_type });
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})



//------------------------------------------------------------------------------------------------
// ---------------------------- Port Config-------------------------------------------------------
//------------------------------------------------------------------------------------------------

// const PORT = process.env.PORT || 4002
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server Started"))