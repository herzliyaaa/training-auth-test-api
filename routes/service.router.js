const router = require("express").Router();

const {
  getServices,
  addService,
  getServiceById,
  editService,
  deleteService,
  deleteAllServices,
} = require("../controllers/service.controller");

router.get("/services", getServices);
router.get("/services/view/:id", getServiceById);
router.post("/services/add", addService);
router.put("/services/edit/:id", editService);
router.delete("/services/delete/:id", deleteService);
router.delete("/services/delete-all", deleteAllServices);

module.exports = router;
