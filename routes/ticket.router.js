const router = require("express").Router();
const authorization = require("../middleware/auth.middleware");

const {
  addServiceTicket,
  getServiceTickets,
  getServiceTicketById,
  editServiceTicket,
} = require("../controllers/ticket.controller");

router.post("/service_tickets/add", authorization, addServiceTicket);
router.get("/service_tickets", authorization, getServiceTickets);
router.get("/service_tickets/view/:id", authorization, getServiceTicketById);
router.put("/service_tickets/edit/:id", authorization, editServiceTicket);

module.exports = router;
