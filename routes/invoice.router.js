const router = require("express").Router();

const { addSalesInvoice } = require("../controllers/invoice.controller");

router.post("/sales_invoice/add", addSalesInvoice);

module.exports = router;
