const User = require("./user.model");
const Publi = require("./publi.model");
const Comment = require("./comment.model");

const relate = async () => {
    await Publi.belongsTo(User, { foreignKey: "userId" });
    await Comment.belongsTo(User, { foreignKey: "userId" });
    await Comment.belongsTo(Publi, { foreignKey: "postID" });
};

module.exports = relate;
