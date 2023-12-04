const mongoose = require('mongoose');

const CustmorSchema = new mongoose.Schema({
    shopname : {
        type : String,
        required:true
    },
    shopemail :{
        type :String,
        required :true
    },
    shopphone :{
        type :String,
        required :true
    },
    shopadress :{
        type :String,
        required :true
    },
    email :{
        type :String,
        required :true
    },
    result:{
        type :String,
        required :true
    },
    color:{
        type:String,
        required :true
    }
},{
    timestamps:true,
});

const CustmorDetails = mongoose.model('CustmorDetails',CustmorSchema);
module.exports = CustmorDetails;