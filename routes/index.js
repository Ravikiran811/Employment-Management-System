const express = require('express');

const router = express.Router();

const passport = require('passport')

const home_controller = require('../controllers/home_controller');

const userRoute = require('./users');
router.get('/',home_controller.home);
router.get('/page',home_controller.page);
router.get('/details',home_controller.details);
router.use('/users',userRoute);

router.get('/application',home_controller.application);
router.get('/applicationrequest',home_controller.applicationRequest);
router.post('/print',home_controller.print);
router.post('/checkrequests',home_controller.checkrequests);
router.get('/toseerequests',home_controller.toseerequests);
router.get('/createCustmor',home_controller.createCustmor);
const checkAuthentication = require('../config/passport-local-strategy').checkAuthentication;

router.get('/updates',passport.checkAuthentication,home_controller.updates);

router.get('/destroySession',home_controller.distroySession);
// router.post('/createSession',passport.authenticate(
//     'local',
//     {failureRedirect :  '/users/sign-in'}
// ),user_controller.createSession);

module.exports=router;