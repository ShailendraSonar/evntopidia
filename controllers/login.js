const { user } = require("../models/User");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
require('dotenv').config();


exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if (!email || !password) {
            return res.status(400).json({
                sucess:false,
                message:"please fill all the details"
            })
        }
        const Isuser = await user.findOne({ where: { email: email } });
        if (!Isuser) {
            return res.status(404).json({
                sucess:false,
                message:"user not found"
            })
        }
        console.log("user found good to go");
        if(await bcrypt.compare(password,Isuser.password)){
            Isuser.password=undefined
            const payload={
                email:Isuser.email,
                role:Isuser.role,
                id:Isuser._id
            }
            let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            return res.header('Authorization', `Bearer ${token}`).cookie("token",token,{expires:new Date(Date.now()+3*24*60*60*1000),httpOnly:true}).status(200).json({
                token:token,
                sucess:true,
                message:"ok",
                user:Isuser
            })
        }else{
            return res.status(403).json({
                sucess:false,
                message:"invelid password",
            })
        }
    } catch (e) {
        console.error(e);
        return res.status(404).json({
            sucess:false,
            message:"error in login",
            error:e
        })
    }
}