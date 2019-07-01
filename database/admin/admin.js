var mongoose = require('mongoose');

// Create Schema and Model it
mongoose.model("Admin", {
    _id: Number,
    email: String,
    password: String,
});


mongoose.model("Services", {
    _id: Number,
    name: String,
    avtar: String,
});

