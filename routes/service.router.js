const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

const {
  getServices,
  addService,
  getServiceById,
  editService,
  deleteService,
  deleteAllServices,
} = require("../controllers/service.controller");

router.get("/services",  authorization, getServices);
router.get("/services/view/:id",  authorization, getServiceById);
router.post("/services/add",  authorization, addService);
router.put("/services/edit/:id",  authorization, editService);
router.delete("/services/delete/:id",  authorization, deleteService);
router.delete("/services/delete-all",  authorization, deleteAllServices);

module.exports = router;
