const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

const {
  addSalesInvoice,
  getSalesInvoices,
  getInvoiceById
} = require("../controllers/invoice.controller");

router.post("/sales_invoice/add", authorization, addSalesInvoice);
router.get("/sales_invoice",  authorization, getSalesInvoices);
router.get("/sales_invoice/view/:id",  authorization, getInvoiceById);

module.exports = router;
