const router = require("express").Router();

const {
  getMechanics,
  addMechanic,
  getMechanicById,
  editMechanic,
  deleteMechanic,
  deleteAllMechanics,
  getServiceMechanics,
  getServiceMechanicById,
  addServiceMechanic,
} = require("../controllers/mechanic.controller");

router.get("/mechanics", getMechanics);
router.get("/mechanics/view/:id", getMechanicById);
router.post("/mechanics/add", addMechanic);
router.put("/mechanics/edit/:id", editMechanic);
router.delete("/mechanics/delete/:id", deleteMechanic);
router.delete("/mechanics/delete-all", deleteAllMechanics);

router.get("/service_mechanics", getServiceMechanics);
router.get("/service_mechanics/view/:id", getServiceMechanicById);
router.post("/service_mechanics/add", addServiceMechanic);

module.exports = router;
