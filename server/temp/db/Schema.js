var AdminSchema = new Schema({
    _id: Number,
    email: String,
    password: String,
});

var ClientSchema = new Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    address:String,
    date_of_birth:String,
    status: Number,
});

var WorkerSchema = new Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    address:String,
    date_of_birth:String,
    work_type: Number,
    status: Number,
});

var ServicesSchema = new Schema({
    _id: Number,
    name: String,
    avtar: String,
  });

var BookingSchema = new Schema({
    _id: Number,
    client_id:Number,
    worker_id:Number,
    date_time:String,
    address:String,
    status:Number,
  });