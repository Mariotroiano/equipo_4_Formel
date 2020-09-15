module.exports = (sequelize, dataTypes) =>{

    let alias = "Size" ;

    let cols = {
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

       
    };

    config = {
        tableName : 'sizes',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at",
    }

    const Size = sequelize.define(alias, cols, config)
        
    Size.associate = function(models){
        Size.hasMany(models.Product, {
            as : 'Product',
            foreignKey : 'sizes_id'
        })
    }
        return Size
}