module.exports = (sequelize, dataTypes)=>{
    
    let alias = 'Product';
    
    let cols = {
        id : {
            type :  dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        
        name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        
        
        description : {
            type : dataTypes.STRING(255),
            allowNull : false
        },

        size : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        
        color : {
            type : dataTypes.STRING(45),
            allowNull : false
        },

        image : {
            type : dataTypes.STRING(100)        
        },
    };
    
    let config = {
        tableName : 'Users',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updatedAt : "updated_at"

    };    
    
    
    const Product = sequelize.define(alias, cols, config)

    Product.associate(function(models){
        Product.belongsTo(models.Product_category, {
            as : 'category',
            foreignKey : 'category_id'
        })

        Product.belongsToMany(models.Cart, {  
            as : 'productCart',
            through : "cart_product",
            foreignKey : 'product_id',
            otherKey : "cart_id",
            timeStamps : false
        })     
    })
    return Product
}