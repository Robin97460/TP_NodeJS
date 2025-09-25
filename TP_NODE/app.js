const express = require("express");
const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/Posts.route");
const commentsRoute = require("./routes/comments.route");
const path = require("path");
const relate = require("./model/relation");
require("./model/index");
const app = express();

relate();

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentsRoute);

module.exports = app;
