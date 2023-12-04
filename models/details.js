const mongoose = require('mongoose');

const path = require('path');
const multer = require('multer');


const detailSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    shop:{
        type:String,
        // required:true
    },
    salary:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        // required:true
    },
    age:{
        type:String,
        // required:true
    },
    hours:{
        type:String,
        // required:true
    },
    ime:{
        type:String,
        // required:true
    },
    adress:{
        type:String,
        // required:true
    },
    avatar:{
        // data: Buffer,
        type:String,
    },
},{
    timestamps :true
})

const Storage = multer.diskStorage({
    destination : "uploads",
    filename: function(req,file,cb){
        cb(null,file.originalname);
    },
}) 


const Details = mongoose.model('Details',detailSchema);
module.exports = Details;