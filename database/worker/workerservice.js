const express = require('express')
var mongoose = require('mongoose');

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

require('./worker')
const Worker = mongoose.model('Worker');


app.get('/', (req, res) => res.send('worker service on...'))

app.get('/worker/', (req, res) => {
    var query = Worker.find({});
    query.exec(function (err, docs) {
        if (err)
            res.send({ "msg": "Not Found" });
        console.log(docs);
        res.json(docs);
    });
})



app.get('/worker/:id', (req,res) => {
    var query = Worker.findById(req.params.id);
    query.exec(function (err, docs) {
      if (err)
        res.send({ "msg": "Not Found" });
        console.log(docs);
      res.json(docs);
    });
})


const PORT = process.env.PORT || 4004
app.listen(PORT, () => console.log("server Started"))