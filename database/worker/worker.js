var mongoose = require('mongoose');

mongoose.model('Worker', {
    // _id: mongoose.Types.ObjectId,
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
    gender: String,
    address: String,

    work_type: mongoose.Types.ObjectId,
    date_of_birth: Date,
    registered_on: Date,
    status: Number, // 0: Not Verified , 1: Verified.
});
