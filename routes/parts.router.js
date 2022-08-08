const router = require("express").Router();

const {
  getParts,
  addPart,
  getPartById,
  editPart,
  deletePart,
  deleteAllParts,
  getPartsUsed,
  getPartsUsedById,
  addPartUsed
} = require("../controllers/part.controller");

router.get("/parts", getParts);
router.get("/parts/view/:id", getPartById);
router.post("/parts/add", addPart);
router.put("/parts/edit/:id", editPart);
router.delete("/parts/delete/:id", deletePart);
router.delete("/parts/delete-all", deleteAllParts);


//parts used
router.get("/parts-used", getPartsUsed);
router.get("/parts-used/view/:id", getPartUsedById);
router.post("/parts-used/add", addPartUsed);

module.exports = router;
