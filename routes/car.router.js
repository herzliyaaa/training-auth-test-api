const router = require("express").Router();

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
router.post("/cars/add", addCar);
router.put("/cars/edit/:id", editCar);
router.delete("/cars/delete/:id", deleteCar);
router.delete("/cars/delete-all", deleteAllCars);

module.exports = router;
