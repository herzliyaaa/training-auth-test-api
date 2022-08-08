const router = require("express").Router();

const {
  addSalesInvoice,
  getSalesInvoices,
  getInvoiceById
} = require("../controllers/invoice.controller");

router.post("/sales_invoice/add", addSalesInvoice);
router.get("/sales_invoice", getSalesInvoices);
router.get("/sales_invoice/view/:id", getInvoiceById);

module.exports = router;
