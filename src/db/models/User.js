module.exports = (sequelize, dataTypes)=>{
    
    let alias = "User";

    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },

        first_name : {
            type : dataTypes.STRING,
            allowNull : true,
        },
        
        last_name : {
            type : dataTypes.STRING,
            allowNull : true,
        },

        email : {
            type : dataTypes.STRING,
            allowNull : true,
        },

        password : {
            type : dataTypes.STRING,
            allowNull : true,
        }
    };

    let config = {
        tableName : 'users',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at",
        firstName : "first_name",
        lastName : 'last_name'
    }


    const USER = sequelize.define(alias, cols, config);

    return USER
}