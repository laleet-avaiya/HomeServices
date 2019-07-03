var mongoose = require('mongoose');

mongoose.model('Booking',{
    // _id: Number,
    client_id: mongoose.Types.ObjectId,
    worker_id: mongoose.Types.ObjectId,
    service_type: mongoose.Types.ObjectId,

    address: String,
    status: Number,     // 3: Not Accepted , 2: Accepted but Pending , 1 : Done
    total_amount:Number,

    request_date_time:Date,
    date_time: Date,
    close_date_time:Date,
});

