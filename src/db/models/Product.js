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
            type : dataTypes.STRING,
            allowNull : false,
        },
        
        price : {
            type : dataTypes.FLOAT.UNSIGNED,
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
        category_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }
    };
    
    let config = {
        tableName : 'products',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updatedAt : "updated_at",
      

    };    
    
    
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Product_category, {
            as : 'category',
            foreignKey : 'category_id'
        })

        Product.belongsToMany(models.Cart, {  
            through : models.Cart_product,
            as : 'cartProduct',
            foreignKey : 'product_id',
            otherKey : "cart_id",
            timestamps : false
        })     
    }
    return Product
}