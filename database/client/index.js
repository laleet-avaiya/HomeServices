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



require('./client')
const Client = mongoose.model('Client');


//-----------------------------------------------------------------------------------------------
// ------------------------------------------Home------------------------------------------------
//-----------------------------------------------------------------------------------------------
app.get('/', (req, res) => res.send('Client service on...'))



//------------------------------------------------------------------------------------------------
// -------------------------------------- Login --------------------------------------------------
//------------------------------------------------------------------------------------------------
app.post('/login', function (req, res) {
  var query = Client.findOne({ email: req.body.email });
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


//------------------------------------------------------------------------------------------------
// -------------------------------------- Registration -------------------------------------------
//------------------------------------------------------------------------------------------------
app.post('/register', function (req, res) {
  var new_user = new Client();
  new_user.name = req.body.name;
  new_user.email = req.body.email;
  new_user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  new_user.phone = req.body.phone;
  new_user.gender = req.body.gender;
  new_user.address = req.body.address;
  new_user.date_of_birth = req.body.date_of_birth;
  new_user.registered_on = Date.now();
  new_user.status = 1; //0: Not Verified , 1: Verified

  new_user.save()
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


//------------------------------------------------------------------------------------------------
// -------------------------------------- Update Profile -----------------------------------------
//------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------
// -------------------------------------- Find All -----------------------------------------------
//------------------------------------------------------------------------------------------------


app.get('/client/', (req, res) => {

  var query = Client.find({});
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
app.get('/client/:id', (req, res) => {
  var query = Client.findById(req.params.id);
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

// const PORT = process.env.PORT || 4003
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server Started"))