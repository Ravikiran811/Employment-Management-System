const passport = require('passport');

const LocalStartegy = require('passport-local').Strategy;

const User = require('../models/users');

passport.use(new LocalStartegy({
    passReqToCallback :true,
    usernameField: 'email'
},async  function(req,email, password, done) {
    try{
    const user=await User.findOne({ email: email });        

        if (!user || user.password !== password) {
            console.log('eweeeeeeeeeeeee')
            // req.send('invalid email/password');
            return done(null, false);
        }

        return done(null, user);
    }catch(err){
        console.log('error kin finding user');
            return done(err);
    }}
));


passport.serializeUser(function(user,done){
    console.log(user.displayName)
    done(null,user);

});

passport.deserializeUser(async function(user,done){
    try{
        // const user = await User.findById(id);
        return done(null,user);

    }catch(err){
        console.log('error kin finding user');
            return done(err);
    }

});

passport.checkAuthentication= function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('./users/sign-in');
}



passport.setAuthenticatedUser = function(req, res, next) {
    
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    next();
};

module.exports = passport;