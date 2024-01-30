const { DataTypes } = require("sequelize");
const sequelize = require("../config/Dbconnect");

exports.user=sequelize.define('User',{
    firstname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    roles: {
        type: DataTypes.ENUM,
        values: ['Delegates', 'Sponser', 'Speaker']
    }    
});


