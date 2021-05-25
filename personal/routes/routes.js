const router = require("express").Router();

function routes() {
  const users = require("./users");

  router.use("/users", users);

  return router;
}
module.exports = routes();
