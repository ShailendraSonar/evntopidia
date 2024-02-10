const { memberTable,responseTable  } = require("../models/User");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { MemberEmail, MemberPassword, MemberRole, companyName, industryType, personName, contactNumber, position, QuestionaireResponse } = req.body;
    console.log(req.body)
    // console.log(MemberEmail, MemberPassword, MemberRole, companyName, industryType, personName, contactNumber, position, QuestionaireResponse);
    // console.log("email ",MemberEmail);
    if (MemberEmail===null || MemberPassword===null || MemberRole ===null || companyName ===null || industryType === null || personName ===null || contactNumber===null || position===null || QuestionaireResponse===null) {
      return res.status(404).json({
        messgae: "please fill all the details",
      });
    }
    const isAvl = await memberTable.findOne({ where: { MemberEmail: MemberEmail } });
    if (isAvl) {
      return res.status(404).json({
        message: "email allready exits",
      });
    }
    let hashedpass;
    try {
      hashedpass=await bcrypt.hash(MemberPassword,10)
    } catch (e) {
        console.error(e);
        return res.status(404).json({
            message:"try after some time err in hashing",
            error:e
        })
    }

    console.log("result ", MemberEmail );
    const result=await memberTable.create({
      MemberEmail, MemberPassword:hashedpass, MemberRole
    })
    const result2=await responseTable.create({
      companyName, industryType, personName, email:MemberEmail, contactNumber, position, QuestionaireResponse
    })
    if(result && result2){
      const payload={
        email:result.MemberEmail,
        role:result.MemberRole,
        id:result.Memberid
      }
      let token = jwt.sign(payload, process.env.JWT_SECRET || 'fallbackSecret', { expiresIn: "2h" });
      // let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
      res.header('Authorization', `Bearer ${token}`)
      .status(200).json({
          message:"Done",
          result:result,
          token:token
      })
    }else{
      return res.status(403).json({
          sucess:false,
          message:"error in token generation",
      })
  }

  } catch (err) {
    console.error(err);
    return res.status(400).json({
        message:"error while registering"
    })
  }
};

module.exports=register;