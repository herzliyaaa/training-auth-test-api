const router = require("express").Router();

const {
registerUser,
userLogin
// renderLogin,
// userLogout
} = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.post("/login", userLogin);
// router.get("/logged-in", renderLogin);
// router.get("/logout", userLogout);

module.exports = router;
