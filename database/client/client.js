var mongoose = require('mongoose');

mongoose.model('Client', {
    _id: Number,
    name: String,
    email: String,
    password: String,
    phone: String,
    gender: String,
    address: String,
    date_of_birth: String,
    status: Number,
});
