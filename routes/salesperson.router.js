const router = require("express").Router();

const {
  getSalespersons,
  addSalesperson,
  getSalespersonById,
  editSalesperson,
  deleteSalesperson,
  deleteAllSalespersons,
} = require("../controllers/salesperson.controller");

router.get("/salespersons", getSalespersons);
router.get("/salespersons/view/:id", getSalespersonById);
router.post("/salespersons/add", addSalesperson);
router.put("/salespersons/edit/:id", editSalesperson);
router.delete("/salespersons/delete/:id", deleteSalesperson);
router.delete("/salespersons/delete-all", deleteAllSalespersons);

module.exports = router;
