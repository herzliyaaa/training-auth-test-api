const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

const {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
  deleteAllCustomers,
  getCustomerById,
  getTotalCustomers
} = require("../controllers/customer.controller");

router.get("/customers", authorization, getCustomers);
router.get("/customers/view/:id",  authorization, getCustomerById);
router.post("/customers/add",  authorization, addCustomer);
router.patch("/customers/edit/:id",  authorization, editCustomer);
router.delete("/customers/delete/:id",  authorization, deleteCustomer);
router.delete("/customers/delete-all",  authorization, deleteAllCustomers);


// extras
router.get("/customers/get-total-customers", getTotalCustomers);

module.exports = router;