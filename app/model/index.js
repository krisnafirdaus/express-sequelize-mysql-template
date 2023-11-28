const sequelize = require('sequelize')
const mysql = require('mysql2')

// connect database local
const connection = new sequelize.Sequelize('krisna_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection