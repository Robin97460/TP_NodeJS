const Publi = require("./../model/publi.model");

exports.getAll = async (req, res) => {
    try {
        let publiList = await Publi.findAll();
        res.status(200).json(publiList);
    } catch (e) {
        res.status(400).json({
            error: "Impossible de récupérer les publications",
        });
    }
};

exports.getById = async (req, res) => {
    try {
        let produit = await Publi.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(produit);
    } catch (e) {
        res.status(400).json({
            error: "Impossible de récupérer les publications",
        });
    }
};

exports.create = async (req, res, next) => {
    try {
        let publi = await Publi.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.token.id,
        });
        res.status(201).json(publi);
    } catch (e) {
        res.status(400).json({ error: "Impossible de créer la publication!" });
    }
};

exports.update = async (req, res, next) => {
    try {
        let publi = await Publi.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (req.token.id !== publi.userId) {
            return res
                .status(403)
                .json(
                    "Vous n'avez pas les droits pour modifier cette publication"
                );
        }
        if (req.body.title) {
            publi.title = req.body.title;
        }
        if (req.body.description) {
            publi.description = req.body.description;
        }
        publi.save();
        res.status(201).json(publi);
    } catch (e) {
        res.status(400).json({
            error: "Impossible de modifier cette publication",
        });
    }
};

exports.delete = async (req, res) => {
    try {
        let publi = await Publi.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(publi);
    } catch (e) {
        res.status(400).json({
            error: "Impossible de supprimer cette publication",
        });
    }
};
