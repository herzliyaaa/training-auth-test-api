const router = require("express").Router();
const { upload } = require("../middleware/upload");

const {
  getCars,
  addCar,
  getCarById,
  editCar,
  deleteCar,
  deleteAllCars,
} = require("../controllers/Car.controller");

router.get("/cars", getCars);
router.get("/cars/view/:id", getCarById);
router.post("/cars/add", upload.single("image_file"), addCar);
router.put("/cars/edit/:id", upload.single("image_file"), editCar);
router.delete("/cars/delete/:id", deleteCar);
router.delete("/cars/delete-all", deleteAllCars);

module.exports = router;
