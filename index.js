const express = require('express');
const cookieParser = require('cookie-parser');


const path = require('path');

const port = 9000;

const app = express();

const multer =require('multer');

const db = require('./config/mongoose');

const session = require('express-session');
const authMiddleware = require('./config/authMiddleware');

const passport = require('passport');


const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo');
const User = require('./models/users');
const Details = require('./models/details');
const ApplicationDetails = require('./models/applicationlist');
const CustmorDetails = require('./models/custmordetails');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.static('./assets'));
// Assuming your images are stored in the 'uploads' folder
app.use('/uploads', express.static('uploads'));

// app.use(express.static(path.join(__dirname, 'assets'));
app.use(cookieParser());


app.use(express.urlencoded({extended:true}));
// app.use(express.json());

app.use(session({
    name:'employment',
    //TODO CHANGE THE SECRET BEFORE DEPLOYMENT IN PRODUCTION MODE
    secret: 'blahsomething',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: (1000 * 60 *100)
    } ,store: MongoStore.create(
        {
        //   mongoUrl: 'mongodb://127.0.0.1:27017/insta_talk',
        mongoUrl :'mongodb://127.0.0.1/work_management',
        mongooseConnection: db,

     },
     function(err){
         console.log(err || 'connect-mongodb setup ok');
     })
}));



app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.use(authMiddleware);



   

app.listen(port,function(err){
    if(err){
        console.log("error occured");
        return;
    }
    console.log('server runs ok');
})
