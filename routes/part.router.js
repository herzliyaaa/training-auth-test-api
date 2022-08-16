const router = require("express").Router();
const authorization = require("../middleware/auth.middleware")


const {
  getParts,
  addPart,
  getPartById,
  editPart,
  deletePart,
  deleteAllParts,
  getPartsUsed,
  getPartUsedById,
  addPartUsed
} = require("../controllers/part.controller");

router.get("/parts",  authorization, getParts);
router.get("/parts/view/:id",  authorization, getPartById);
router.post("/parts/add",  authorization, addPart);
router.put("/parts/edit/:id",  authorization, editPart);
router.delete("/parts/delete/:id",  authorization, deletePart);
router.delete("/parts/delete-all",  authorization, deleteAllParts);


//parts used
router.get("/parts_used",  authorization, getPartsUsed);
router.get("/parts_used/view/:id",  authorization, getPartUsedById);
router.post("/parts_used/add",  authorization, addPartUsed);

module.exports = router;
