const { DataTypes } = require("sequelize");
const db = require("./index");

const Comment = db.define(
    "Comment",
    {
        message: {
            type: DataTypes.STRING,
        },
        postID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Comment",
    }
);

module.exports = Comment;
