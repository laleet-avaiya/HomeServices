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

require('./worker')
const Worker = mongoose.model('Worker');


app.get('/', (req, res) => res.send('worker service on...'))





app.post('/login', function (req, res) {
    var query = Worker.findOne({ email: req.body.email });
    query.exec(function (err, user) {
        if (err)
            res.send("user not found.");
        if (bcrypt.compareSync(req.body.password, user.password)) {
            // res.send("password Match");
            res.json(user);
        } else {
            res.send("password did not Match");
        }
    });
});






app.post('/register', function (req, res) {

    var new_worker = new Worker();
    new_worker.name = req.body.name;
    new_worker.email = req.body.email;
    new_worker.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
    new_worker.phone = req.body.phone;
    new_worker.gender = req.body.gender;
    new_worker.address = req.body.address;
    new_worker.date_of_birth = req.body.date_of_birth;
    new_worker.work_type = req.body.work_type;
    new_worker.status = req.body.status;
    new_worker.save()
        .then(() => res.send("Registered Successfully"))
        .catch(
            (err) => {
                if (err.code == "11000")
                    res.send("User Already exits");
                else
                    res.send("Something wrong happened Try Again.")
            }
        );
});









app.get('/worker/', (req, res) => {
    var query = Worker.find({});
    query.exec(function (err, docs) {
        if (err)
            res.send({ "msg": "Not Found" });
        console.log(docs);
        res.json(docs);
    });
})



app.get('/worker/:id', (req, res) => {
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