const express = require('express');
const { register, verifyEmail, login} = require('../controllers/authController');
const authenticateJWT = require("../config/authenticateJWT");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify/:token', verifyEmail);
router.get('/profile',authenticateJWT,(req,res)=>{
    res.json({ message: 'This is a protected route', user: req.user });
})
module.exports = router;
