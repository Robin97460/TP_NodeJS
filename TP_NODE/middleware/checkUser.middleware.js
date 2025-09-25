const User = require("../model/user.model");

exports.checkUser = async (req, res, next) => {
    let user = await User.findOne({ where: { id: req.params.id } });
    if (user) {
        next();
    } else {
        res.status(404).json({
            message: "Utilisateur non trouvé ou n'existe pas",
        });
    }
};
