const Sequelize = require('sequelize')
const connection = require('../database/database')

// model é uma representação do seu banco de dados no código. 
// sequelize serve pra criar esses models
const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// método sync mais o force:true vai criar uma tabela sempre que a app for executada

// Category.sync({force: true})

module.exports = Category