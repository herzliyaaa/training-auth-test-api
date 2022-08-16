const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

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

router.get("/mechanics", authorization, getMechanics);
router.get("/mechanics/view/:id",  authorization, getMechanicById);
router.post("/mechanics/add",  authorization, addMechanic);
router.put("/mechanics/edit/:id",  authorization, editMechanic);
router.delete("/mechanics/delete/:id",  authorization, deleteMechanic);
router.delete("/mechanics/delete-all",  authorization, deleteAllMechanics);

router.get("/service_mechanics",  authorization, getServiceMechanics);
router.get("/service_mechanics/view/:id",  authorization, getServiceMechanicById);
router.post("/service_mechanics/add",  authorization, addServiceMechanic);

module.exports = router;
