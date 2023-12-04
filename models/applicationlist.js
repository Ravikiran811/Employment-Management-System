const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    ime :{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
},{
    timestamps:true
})

const ApplicationDetails = mongoose.model('ApplicationDetails',applicationSchema);

module.exports = ApplicationDetails;