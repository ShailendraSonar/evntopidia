const { user } = require("../models/User");
const bcrypt=require('bcrypt')

const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, roles } = req.body;
    console.log(firstname, lastname, email, password, roles);
    console.log("email ",email);
    if (firstname == null || lastname == null || email == null || password == null || roles == null) {
      return res.status(404).json({
        messgae: "please fill all the details",
      });
    }
    const isAvl = await user.findOne({ where: { email: email } });
    if (isAvl) {
      return res.status(404).json({
        message: "email allready exits",
      });
    }
    let hashedpass;
    try {
      hashedpass=await bcrypt.hash(password,10)
    } catch (e) {
        console.error(e);
        return res.status(404).json({
            message:"try after some time err in hashing",
            error:e
        })
    }
    const result=await user.create({
      firstname,lastname,email,password:hashedpass,roles
  })

  res.status(200).json({
      message:"Done",
      result:result
  })

  } catch (err) {
    console.error(err);
    return res.status(400).json({
        message:"error while registering"
    })
  }
};

module.exports=register;