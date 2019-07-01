var mongoose = require('mongoose');

mongoose.model('Booking',{
    // _id: Number,
    client_id: Number,
    worker_id: Number,
    date_time: String,
    address: String,
    status: Number,
});

