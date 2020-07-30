const { unsubscribe } = require("../../app");

module.exports = (sequelize, dataTypes)=>{
    
    let alias = "User";

    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : false
        },

        first_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        
        last_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },

        email : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },

        password : {
            type : dataTypes.STRING,
            allowNull : false,
        },
        image : {
            type : dataTypes.STRING(100)        
        },

        permissions : {
            type : dataTypes.INTEGER.UNSIGNED,
        }
    };

    let config = {
        tableName : 'users',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"    
    }


    const User = sequelize.define(alias, cols, config);

     User.associate = function(models){
        User.hasMany(models.Address, {
            as : 'Address',
            foreignKey : 'user_id'
        }),

        User.hasMany(models.Cart, {
            as : 'Cart',
            foreignKey : 'user_id'
        })
     }
  

    return User
}