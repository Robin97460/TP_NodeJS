const express = require("express");
const router = express.Router();
const publiController = require("../controller/publi.controller");
const commentController = require("../controller/comment.controller");
const auth = require("../middleware/auth");

router.get("/", publiController.getAll);
router.get("/:id", publiController.getById);
router.post("/", auth, publiController.create);
router.put("/:id", auth, publiController.update);
router.delete("/:id", auth, publiController.delete);

router.get("/:id/comments", commentController.getById);
router.post("/:id/comments", auth, commentController.create);

module.exports = router;
