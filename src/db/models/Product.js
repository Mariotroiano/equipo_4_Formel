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

        image : {
            type : dataTypes.STRING(100)        
        },

        stock : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        category_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },

        colors_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },

        sizes_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }
    };
    
    let config = {
        tableName : 'products',
        timeStamps : true,
        underscored : true,
        paranoid: true,
        createdAt : "created_at",
        updatedAt : "updated_at",
        deletedAt : "deleted_at"

    };    
    
    
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Product_category, {
            as : 'category',
            foreignKey : 'category_id'
        })

        Product.belongsTo(models.Color, {
            as : 'color',
            foreignKey : 'colors_id'
        })

        Product.belongsTo(models.Size, {
            as : 'size',
            foreignKey : 'sizes_id'
        })

        Product.belongsToMany(models.Cart, {  
            as : 'cart',
            ondelete : 'cascade',
            through: "cart_product",
            foreignKey : 'product_id',
            otherKey : "cart_id",
            timestamps : false
        })     
    }
    return Product
}