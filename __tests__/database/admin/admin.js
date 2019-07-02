var mongoose = require('mongoose');

// Create Schema and Model it
mongoose.model("Admin", {
    // _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true,
    }
});


mongoose.model("Services", {
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    avatar: String,
});