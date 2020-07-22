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
            allowNull : true,
        },
        
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        
        size : {
            type : dataTypes.STRING,
            allowNull : false
        },
        
        color : {
            type : dataTypes.STRING,
            allowNull : false
        },
        
        description : {
            type : dataTypes.STRING,
            allowNull : false
        }
    };
    
    let config = {
        tableName : 'Users',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updatedAt : "updated_at"

    };    
    
    
    const Product = sequelize.define(alias, cols, config)
    
    return Product
}