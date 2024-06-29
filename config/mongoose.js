const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pitchukularavikiran:qSvpk3wYCN47coC9@cluster0.3ged0oj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in connected to data base"));

db.once('open',function(){
    console.log('successfully connected tto the database');
})
