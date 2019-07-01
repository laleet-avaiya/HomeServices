const express = require('express')
var mongoose = require('mongoose');
const PORT = process.env.PORT || 4002
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var url = "mongodb+srv://lmavaiya:111996A@M@cluster0-ivhjb.mongodb.net/HomeServices?retryWrites=true";
mongoose.connect(url, { useNewUrlParser: true },() => console.log("Database Connected."));


require('./booking')
const Booking = mongoose.model('Booking');


app.get('/booking/', (req,res) => {
    
    var query = Booking.find({});
    query.exec(function (err, docs) {
      if (err)
        res.send({ "msg": "Not Found" });
        console.log(docs);
      res.json(docs);
    });
})

app.get('/booking/:id', (req,res) => {
    var query = Booking.findById(req.params.id);
    query.exec(function (err, docs) {
      if (err)
        res.send({ "msg": "Not Found" });
        console.log(docs);
      res.json(docs);
    });
})



app.get('/', (req, res) => res.send('booking service on...'))

app.listen(PORT, () => console.log("server Started"))