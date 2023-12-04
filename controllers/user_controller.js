const User = require('../models/users');
const Details = require('../models/details');
module.exports.sign_in = function(req,res){
    if(req.isAuthenticated()){
        console.log("yess");
        return res.redirect('/');
    }
    return res.render('sign-in');
}
module.exports.sign_up = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('sign-up');
}


module.exports.createSession = function(req,res){
    return res.redirect('/');
}
module.exports.create = async function(req,res){
    try{
        if(req.body.password!=req.body.confirmPassword){
            return res.redirect('back');
        }
        const user = await User.findOne({email:req.body.email});
        if(!user){
            User.create(req.body);
            return res.redirect('/users/sign-in');
        }
        return res.redirect('back');
    }catch(err){
        console.log('error in sign up bro');
    }

}
module.exports.createDetails = function(req,res){
    return res.render('shop_details');
}
// const upload = multer({ dest: './uploads' });

module.exports.createShop = function(req,res){
    try {
        console.log(req.query.id);
        console.log(req.body.name);
        const newDetail = new Details({
            ...req.body,
            avatar: req.file ? req.file.filename : undefined,
        });

        newDetail.save()
            .then(() => res.redirect('/page'))
            .catch(err => console.log(err));
    } catch (err) {
        console.log("Error in creating detail:", err);
        res.status(500).send("Internal Server Error");
    }
};