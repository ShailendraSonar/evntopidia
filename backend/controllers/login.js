const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { memberTable } = require('../models/User');
require('dotenv').config();

exports.login = async (req, res) => {
  try {
    const { MemberEmail, MemberPassword } = req.body;

    if (!MemberEmail || !MemberPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    const existingUser = await memberTable.findOne({ where: { MemberEmail } });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // isAproved or not  


    if (!existingUser.isAproved) {
      return res.status(404).json({
        success: false,
        message: "User not permited",
      });
    }


    const isPasswordValid = await bcrypt.compare(MemberPassword, existingUser.MemberPassword);

    if (isPasswordValid) {
      existingUser.MemberPassword = undefined;

      const payload = {
        email: existingUser.MemberEmail,
        role: existingUser.MemberRole,
        id: existingUser.MemberId,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallbackSecret', { expiresIn: "2h" });

      // Add secure and HTTP-only flags for cookies
      const cookieOptions = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
      };

      res.header('Authorization', `Bearer ${token}`);
      res.cookie("token", token, cookieOptions);

      return res.status(200).json({
        token,
        success: true,
        message: "Login successful",
        user: existingUser,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};
