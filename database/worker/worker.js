var mongoose = require('mongoose');

mongoose.model('Worker', {
    _id: Number,
    name: String,
    email: String,
    password: String,
    phone: String,
    gender: String,
    address: String,
    date_of_birth: String,
    work_type: Number,
    status: Number,
});
