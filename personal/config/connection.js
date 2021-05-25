const Sequelize = require("sequelize");

const sequelize = new Sequelize('personal',"root","password",{
    host:'localhost',
    dialect:"mysql",
    operatorsAliases:false,
    define:{
        timestamp:false
    }
});
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = sequelize;