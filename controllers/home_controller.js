const passport = require('passport');

const Details = require('../models/details');

const User = require('../models/users');
const mongoose = require('mongoose');

const CustmorDetails = require('../models/custmordetails');

const ApplicationDetails = require('../models/applicationlist');
module.exports.home = function(req,res){
    return res.render('home');
} 

module.exports.page = async function(req,res){
    const details = await Details.find({domain:req.query.id});
    console.log(req.query.id);
    return res.render('layout',{
        detailsList : details
    });
}
module.exports.details = function(req,res){
    return res.render('shop_details');
}
module.exports.application = function(req,res){
    const value =req.query.id;
    const value2 =req.query.id2;
    console.log(value2);
    return res.render('application',{value,value2});
}
module.exports.applicationRequest = function(req,res){

    return res.render('applicationrequests');
}
module.exports.print = function(req,res){
    ApplicationDetails.create(req.body);
    return res.redirect('/');
}
module.exports.checkrequests = async function(req,res){
    const user = await Details.findOne({email:req.body.email,domain:req.body.domain});
    if(!user){
        return res.redirect('/');
    }
    const userId = user._id;
    console.log(user._id);
    const applicationList = await  ApplicationDetails.find({ime:userId});
    
    console.log(userId);
    return res.render('applicationrequests',{
        applicationList : applicationList,
        userId : userId
    })
    
}
module.exports.toseerequests = function(req,res){
    return res.render('toseerequests');
}
module.exports.createCustmor = async function(req,res){
    let id = req.query.id;
    let value =req.query.value;
    let col = req.query.col;
    let mail = req.query.email;
    console.log(value);
    const objectId = new mongoose.Types.ObjectId(id);
    const user = await Details.findById(objectId);
    const custmorDetails = new CustmorDetails({
        shopname: user.shop,
        shopemail: user.email,
        shopphone: user.phone,
        shopadress: user.adress,
        email: mail,
        result: value,
        color: col,
        // Add more fields as needed
    });
    await custmorDetails.save();
    console.log(user);
    return res.redirect('/');
    
}
module.exports.updates = async function(req,res){
    console.log(req.user.email);
    // console.log(req.session.userId);
    // const user = await User(req.session.userId); // Replace with your actual user retrieval logic
    const userList = await CustmorDetails.find({email:req.user.email});
    // req.session.user = user;
    // console.log(custmor);
    console.log(userList);
    if(!userList){
        return res.send('<h1>Not Yet Post One job</h1>')
    }
    return res.render('updates',{
        userList :userList,
    });
}
module.exports.distroySession=function(req, res) {
  
  
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/'); 
    });
  }