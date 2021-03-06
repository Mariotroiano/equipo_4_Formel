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
            type : dataTypes.STRING(100),
            allowNull : false,
        },

        province : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },

        postal_code : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false
        },

        user_id : {
            type : dataTypes.INTEGER.UNSIGNED,          
            allowNull : false,        
        }
      
    };
    
    config = {
        tableName : 'addresses',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updatedAt : "updated_at",
        postalCode : 'postal_code',
        paranoid : true,
        deletedAt : "deleted_at"
       
        
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