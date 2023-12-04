const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/work_management');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in connected to data base"));

db.once('open',function(){
    console.log('successfully connected tto the database');
})
