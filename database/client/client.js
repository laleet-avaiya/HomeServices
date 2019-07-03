var mongoose = require('mongoose');

mongoose.model('Client', {
    // _id: Number,
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: String,
    phone: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    image:String,
    gender: String,
    address: String,
    date_of_birth: Date,
    registered_on:Date,
    status: Number, // 0: Not Verified , 1: Verified.
});
