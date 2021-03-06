module.exports = (sequelize, dataTypes)=> {
    let alias = 'Cart_product';
    cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },

        quantity : {
            type : dataTypes.TINYINT.UNSIGNED,
            allowNull : false
        },
        price : {
            type : dataTypes.FLOAT.UNSIGNED,
            allowNull : false
        },
        product_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
          
        },
        cart_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
           
        },
    
    };
    
    config = {
        tableName : 'cart_product',
        timestamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"    
        
    }
    const Cart_product = sequelize.define(alias, cols, config)
    
    return Cart_product
    
}