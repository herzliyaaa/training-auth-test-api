const router = require("express").Router();

const {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
  deleteAllCustomers,
  getCustomerById,
  getTotalCustomers
} = require("../controllers/customer.controller");

router.get("/customers", getCustomers);
router.get("/customers/view/:id", getCustomerById);
router.post("/customers/add", addCustomer);
router.put("/customers/edit/:id", editCustomer);
router.delete("/customers/delete/:id", deleteCustomer);
router.delete("/customers/delete-all", deleteAllCustomers);


// extras
router.get("/customers/get-total-customers", getTotalCustomers);

module.exports = router;