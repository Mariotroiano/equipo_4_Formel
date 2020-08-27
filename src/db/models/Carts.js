module.exports = (sequelize, dataTypes)=> {
    let alias = 'Cart';
    cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },

        total : {
            type : dataTypes.FLOAT.UNSIGNED,
            allowNull : false
        },

        shipping_address_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },

        user_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        }
    
    };
    
    config = {
        tableName : 'carts',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"   
        
    }
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = function(models){
        Cart.belongsTo(models.User, {
            as : 'User',
            foreignKey : 'user_id'
        })

        Cart.belongsToMany(models.Product, {  
            as : 'cartProduct',
            through : "cart_product",
            foreignKey : 'cart_id',
            otherKey : "product_id",
            timeStamps : false
        })     

        Cart.belongsTo(models.Address, {
            as : 'Adress',
            foreignKey : 'shipping_address_id'
        })
     }

    return Cart
    
}