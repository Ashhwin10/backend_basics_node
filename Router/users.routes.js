const router = require("express").Router();

const {
  getUsers,
  searchUsers,
  searchUUID,
} = require("../controller/controller.users");

router.get("/", getUsers);
router.get("/search", searchUsers);
router.get("/:uuid", searchUUID);

module.exports = router;
