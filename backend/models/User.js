const { DataTypes } = require('sequelize');
const sequelize = require('../config/Dbconnect');

const memberTable=sequelize.define("Members",{
  MemberId:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull : false
  },
  MemberEmail:{
    type:DataTypes.STRING,
    allowNull : false,
    unique:true
  },
  MemberPassword:{
    type:DataTypes.STRING,
    allowNull : false
  },
  MemberRole:{
    type: DataTypes.ENUM,
    values: ['Delegates', 'Sponser', 'Speaker', 'Admin', 'Partner'],
    allowNull : false
  },
  isAproved:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
  }
})

const responseTable=sequelize.define("Response",{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey:true
  },
  companyName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  industryType:{
    type:DataTypes.STRING,
    allowNull:false
  },
  personName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  contactNumber:{
    type:DataTypes.BIGINT,
    allowNull:false
  },
  position:{
    type: DataTypes.STRING,
    allowNull : false
  },
  QuestionaireResponse:{
    type:DataTypes.JSON,
    allowNull:false
  }
})

module.exports = {memberTable,responseTable };