const express=require('express');
const register = require('../controllers/resgister');
const { login } = require('../controllers/login');
const { AprovedUsers, notAprovedUsers } = require('../controllers/admindashboard');
const router=express.Router();
 
router.post("/register",register)
router.post("/login",login)
router.get("/aprovedusers",AprovedUsers)
router.get("/notaprovedusers",notAprovedUsers)


module.exports=router;




