const { DataTypes } = require("sequelize");
const db = require("./index");
// const { use } = require("react");

const Publi = db.define(
    "Publi",
    {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Publi",
    }
);

module.exports = Publi;
