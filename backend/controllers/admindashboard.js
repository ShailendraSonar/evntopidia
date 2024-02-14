const { where } = require('sequelize');
const { memberTable } = require('../models/User');

exports.notAprovedUsers=async(req,res)=>{
    try {
        const users = await memberTable.findAll({where:{isAproved:false}});
        res.json(users);
      } catch (error) {
        console.error('Error while fetching users:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' ,
            sucess:false
        });
      }
}
exports.AprovedUsers=async(req,res)=>{
    try {
        const users = await memberTable.findAll({where:{isAproved:true}});
        res.json(users);
      } catch (error) {
        console.error('Error while fetching users:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' ,
            sucess:false
        });
      }
}