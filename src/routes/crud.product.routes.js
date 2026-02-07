const router = require("express").Router();
const controller = require("../controllers/crud.product.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
router.post("/", controller.create);        // INSERT
router.get("/", authMiddleware , controller.getAll);         // FIND ALL
router.get("/:id", controller.getOne);      // FIND BY ID
router.put("/:id", controller.update);      // UPDATE
router.delete("/:id", controller.remove);   // DELETE

module.exports = router;