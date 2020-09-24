module.exports = (sequelize, dataTypes) =>{

    let alias = "Color" ;

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
        tableName : 'colors',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at",
        paranoid : true,
        deletedAt : "deleted_at"
    }

    const Color = sequelize.define(alias, cols, config)

    Color.associate = function(models){
        Color.hasMany(models.Product, {
            as : 'Product',
            foreignKey : 'colors_id'
        })
    }
        return Color
}