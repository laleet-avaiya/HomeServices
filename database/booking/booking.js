var mongoose = require('mongoose');

mongoose.model('Booking',{
    // _id: Number,
<<<<<<< HEAD
    client_id: Number,
    worker_id: Number,
    date_time: String,
=======
    client_id: mongoose.Types.ObjectId,
    worker_id: mongoose.Types.ObjectId,
    service_type: mongoose.Types.ObjectId,
>>>>>>> 3be78c71f978476cbe755ae0dbce6c6e26afa87a
    address: String,
    status: Number,
    amount:Number,
    request_date_time:Date,
    date_time: Date,
    close_date_time:Date,
});

