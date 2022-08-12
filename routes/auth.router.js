const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

const {
  registerUser,
  userLogin,
  isVerified,
  getUsers,
  getUserById,
  // renderLogin,
  // userLogout
} = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/is-verified", authorization, isVerified); //test if user is authorized
router.get("/users", getUsers);
router.get("/users/view/:id", authorization, getUserById);
// router.get("/logged-in", renderLogin);
// router.get("/logout", userLogout);

module.exports = router;
