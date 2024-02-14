const express=require('express');
const register = require('../controllers/resgister');
const { login } = require('../controllers/login');
const router=express.Router();
 
router.post("/register",register)
router.post("/login",login)


module.exports=router;




