const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')


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


app.get('/', (req, res) => res.send('booking service on...'))

app.post('/add_service_request/', (req, res) => {

  var new_service_request = new Booking();
  new_service_request.client_id = mongoose.Types.ObjectId(req.body.client_id);
  // new_service_request.worker_id = mongoose.Types.ObjectId(req.body.worker_id);
  new_service_request.worker_id = null;
  new_service_request.service_type = mongoose.Types.ObjectId(req.body.service_type);
  new_service_request.date_time = Date.now();
  new_service_request.address = req.body.address;
  new_service_request.status = req.body.status;

  new_service_request.save()
    .then(() => res.send("Request Added Successfully"))
    .catch((err) => {
      res.send("Something wrong happened Try Again.")
    }
    );
})


app.get('/booking/', (req, res) => {
  var query = Booking.find({});
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})

app.get('/booking/:id', (req, res) => {
  var query = Booking.findById(req.params.id);
  query.exec(function (err, docs) {
    if (err)
      res.send({ "msg": "Not Found" });
    console.log(docs);
    res.json(docs);
  });
})


const PORT = process.env.PORT || 4002
app.listen(PORT, () => console.log("server Started"))