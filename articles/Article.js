const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require ('../categories/Category')

// model é uma representação do seu banco de dados no código. 
// sequelize serve pra criar esses models
const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// método hasMany() é responsável pelo relacionamento 1-p-N entre os models.
Category.hasMany(Article)

// método belongsTo() é responsável pelo relacionamento 1-p-1 entre os models.
Article.belongsTo(Category)

// método sync mais o force:true vai criar uma tabela sempre que a app for executada
// Article.sync({force: true}) foi rodado somente para criar a tabela no banco
 

module.exports = Article