const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

// url create : POST (/api/user)
router.post("/", userController.register);
// url read all  : GET (/api/user)
router.get("/", userController.getAllUsers);
// url read one : detail = GET (/api/user/:id)
router.get("/:id", userController.getUserById);
// url update : PUT (/api/user/:id)
router.put("/:id", userController.updateUSer);
// url delete : DELETE (/api/user/:id)
router.delete("/:id", userController.deleteUser);

module.exports = router;