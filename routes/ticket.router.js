const router = require("express").Router();

const {
  addServiceTicket,
  getServiceTickets,
  getServiceTicketById,
} = require("../controllers/ticket.controller");

router.post("/service_tickets/add", addServiceTicket);
router.get("/service_tickets", getServiceTickets);
router.get("/service_tickets/view/:id", getServiceTicketById);

module.exports = router;
