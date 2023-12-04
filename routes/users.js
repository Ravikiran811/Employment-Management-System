const express= require('express');

const router = express.Router();

const passport = require('passport');
const multer = require('multer');

const user_controller = require('../controllers/user_controller');

// router.post('/sign-up',user_controller.sign_up);

router.get('/sign-in',user_controller.sign_in);
router.get('/sign-up',user_controller.sign_up);
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect :  '/users/sign-up'}
),user_controller.createSession);
router.get('/details',user_controller.createDetails);
// router.post('/createShop',user_controller.createShop);
router.post('/create',user_controller.create);

const upload = multer({ dest: 'uploads' });

router.post('/createShop', upload.single('avatar'), user_controller.createShop)
module.exports = router;
