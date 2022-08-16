const router = require("express").Router();
const authorization = require("../middleware/auth.middleware")

const {
  getSalespersons,
  addSalesperson,
  getSalespersonById,
  editSalesperson,
  deleteSalesperson,
  deleteAllSalespersons,
} = require("../controllers/salesperson.controller");

router.get("/salespersons",  authorization, getSalespersons);
router.get("/salespersons/view/:id",  authorization, getSalespersonById);
router.post("/salespersons/add",  authorization, addSalesperson);
router.put("/salespersons/edit/:id",  authorization, editSalesperson);
router.delete("/salespersons/delete/:id",  authorization, deleteSalesperson);
router.delete("/salespersons/delete-all",  authorization, deleteAllSalespersons);

module.exports = router;
