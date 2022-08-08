const router = require("express").Router();

const {
  getMechanics,
  addMechanic,
  getMechanicById,
  editMechanic,
  deleteMechanic,
  deleteAllMechanics,
} = require("../controllers/mechanic.controller");

router.get("/mechanics", getMechanics);
router.get("/mechanics/view/:id", getMechanicById);
router.post("/mechanics/add", addMechanic);
router.put("/mechanics/edit/:id", editMechanic);
router.delete("/mechanics/delete/:id", deleteMechanic);
router.delete("/mechanics/delete-all", deleteAllMechanics);

module.exports = router;
