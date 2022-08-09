const router = require("express").Router();

const {
registerUser,
userLogin,
getUsers,
getUserById
// renderLogin,
// userLogout
} = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/users", getUsers);
router.get("/users/view/:id", getUserById);
// router.get("/logged-in", renderLogin);
// router.get("/logout", userLogout);

module.exports = router;
