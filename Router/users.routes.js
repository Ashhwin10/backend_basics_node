const router = require("express").Router();

const {
  getUsers,
  searchUsers,
  searchUUID,
} = require("../controller/controller.users");
const { queryErrors } = require("../middleware/Validation.middleware");

router.get("/", getUsers);
router.get("/search", queryErrors, searchUsers);
router.get("/:uuid", searchUUID);

module.exports = router;
