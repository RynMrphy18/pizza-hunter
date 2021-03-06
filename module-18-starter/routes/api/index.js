const router = require("express").Router();
const commentRoutes = require("./comment-routes");
const pizzaRoutes = require("./pizza-route");

router.use("/comments", commentRoutes);
router.use("/pizzas", pizzaRoutes);

module.exports = router;