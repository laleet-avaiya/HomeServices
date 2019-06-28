

const addAdmin = new Admin({
    _id:1,
    email:"admin@homeservice.com",
    password:"123456",
});
addAdmin.save();

const addClient = new Client({
    _id:"1",
    name:"Johan Martin",
    email:"johanmartin@gmail.com",
    password:"123456",
    phone:"+91-7874353439",
    gender:"male",
    address:"25737 US Rt 11, Evans Mills NY 13637",
    date_of_birth:"25-05-1990",
    status:1,
  });
  addClient.save();

const addWorker = new Worker({
    _id:1,
    name:"Raju Painter",
    email:"raju974@gmail.com",
    password:"123456",
    phone:"+91-xxxxx-xxxxx",
    gender:"male",
    address:"Near Reliance Chowkdi, DA IICT Road, Gandhinagar, Gujarat 382007",
    date_of_birth:"12-02-1980",
    work_type:1,
    status:1,
  });
addWorker.save();

const addService = new Services({
    _id: 1,
    name: 'AC Service and Repair',
    avtar: '',
  });
addService.save();

const addBooking = new Booking({
    _id:1,
    client_id:1,
    worker_id:1,
    date_time:"15-05-2019 : 10:20 AM",
    address:"Near Reliance Chowkdi, DA IICT Road, Gandhinagar, Gujarat 382007",
    status:0,
  });
addBooking.save();