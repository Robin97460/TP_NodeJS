const Comment = require("./../model/comment.model");

exports.getById = async (req, res) => {
    try {
        let comment = await Comment.findAll({
            where: {
                postID: req.params.id,
            },
        });
        res.status(200).json(comment);
    } catch (e) {
        res.status(400).json({ error: "Impossible de récupérer les comment" });
    }
};

exports.create = async (req, res, next) => {
    try {
        let comment = await Comment.create({
            message: req.body.message,
            userId: req.token.id,
            postID: req.params.id,
        });
        res.status(201).json(comment);
    } catch (e) {
        res.status(400).json({ error: "Impossible de créer le comment!" });
    }
};

exports.update = async (req, res, next) => {
    try {
        let comment = await Comment.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (req.token.id !== comment.userId) {
            return res
                .status(403)
                .json("Vous n'avez pas les droits pour modifier ce comment");
        }
        if (req.body.message) {
            comment.message = req.body.message;
        }
        comment.save();
        res.status(201).json(comment);
    } catch (e) {
        res.status(400).json({ error: "Impossible de modifier ce comment" });
    }
};

exports.delete = async (req, res) => {
    try {
        let comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(comment);
    } catch (e) {
        res.status(400).json({ error: "Impossible de supprimer ce comment" });
    }
};
