const pool = require("../config/db.config");

const addServiceTicket = (req, res) => {
  const {service_ticket_number, date_received, comments, date_returned, car_id, customer_id } = req.body;
  pool.query(
    "INSERT INTO service_ticket (service_ticket_number, date_received, comments, date_returned, car_id, customer_id) VALUES ($1, $2, $3 , $4, $5, $6 ) RETURNING *",
    [service_ticket_number, date_received, comments, date_returned, car_id, customer_id],
    (error, results) => {
      if (error) {
        res.status(500).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Items Created Successfully!", data: results.rows[0] });
    }
  );
};

//add edit service ticket
const editServiceTicket = (req, res) => {
  const id = req.params.id;
  const { service_ticket_number, date_received, comments, date_returned, car_id, customer_id  } = req.body;
  pool.query(
    "UPDATE service_ticket SET service_ticket_number = $1, date_received= $2, comments = $3, date_returned = $4, car_id = $5, customer_id = $6 WHERE service_ticket_id = $7 RETURNING *",
    [service_ticket_number, date_received, comments, date_returned, car_id, customer_id , id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message:"Service Ticket Updated Successfully!", data: results.rows});
    }
  );
};





const getServiceTickets = (req, res) => {
  pool.query(
    "SELECT * FROM service_ticket ORDER BY service_ticket_id DESC",
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json(results.rows);
    }
  );
};

const getServiceTicketById = (req, res) => {
  const service_ticket_id = req.params.id;
  pool.query(
    "SELECT * FROM service_ticket WHERE service_ticket_id = $1",
    [service_ticket_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: `service_ticket_id  ${service_ticket_id}`, data: results.rows });
    }
  );
};

// const getTotalDailySales = (req, res) => {
//   pool.query(
//     'SELECT SUM(quantity * cost) AS SalesForTodaysVideo FROM "sales" WHERE "transaction_date"::DATE = CURRENT_DATE',
//     (error, results) => {
//       if (error) throw error;
//       res.status(200).json(results.rows);
//     }
//   );
// };

// const getWeeklyRevenue = (req, res) => {
//   pool.query(
//     '',
//     (error, results) => {
//       if (error) throw error;
//       res.status(200).json(results.rows);
//     }
//   );
// };

module.exports = {
  addServiceTicket,
  getServiceTickets,
  getServiceTicketById,
  editServiceTicket
  // getTotalDailySales,
  // getWeeklyRevenue
  // getWeeklyCustomers,
};
