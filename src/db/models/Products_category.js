module.exports = (seuqlize, dataTypes)=> {
    let alias = 'Product_category';
    cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },

        name : {
            type : STRING(45),
            allowNull : false
        }    
    };
    
    config = {
        tableName : 'product_category',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"   
        
    }
    const Product_category = sequelize.define(alias, cols, config)

    Product_category.associate(function(models){
        Product_category.hasMany(models.Product, {
            as : 'Product',
            foreignKey : 'category_id'
        })
    })
    
    return Product_category
    
}