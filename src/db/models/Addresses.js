module.exports = (sequelize, dataTypes)=> {
    let alias = 'Address';
    cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },

        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        city : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },

        province : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },

        postal_code : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false
        }
    };
    
    config = {
        tableName : 'Addresses',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at",
        postalCode : 'postal_code'
        
    }
    const Addresses = sequelize.define(alias, cols, config)
    
    Addresses.associate = function(models){
        Addresses.belongsTo(models.User, {
            as : 'User',
            foreignKey : 'user_id'
        })

        Addresses.hasMany(models.Cart, {
            as : 'Cart',
            foreignKey : 'shipping_address_id'
        })
     }
    return Addresses
    
}