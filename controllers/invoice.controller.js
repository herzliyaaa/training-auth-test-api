
//invoice
//create an invoice (one invoice per car and salesperson)

const pool = require("../config/db.config");

const addSalesInvoice = (req, res) => {
  const { invoice_number, car_id, customer_id, salesperson_id } = req.body;
  pool.query(
    "INSERT INTO sales_invoice (invoice_number, car_id, customer_id, salesperson_id, transaction_date) VALUES ($1, $2, $3 , $4, localtimestamp ) RETURNING *",
    [invoice_number, car_id, customer_id, salesperson_id],
    (error, results) => {
      if (error) {
        res.status(500).json(error);
      };
      res.status(200).json({ message: "Items Created Successfully!", data: results.rows[0] });
    }
  );
}

const getSalesInvoices = (req, res) => {
  pool.query("SELECT * FROM sales_invoice ORDER BY invoice_id DESC", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getInvoiceById = (req, res) => {
  const invoice_id = req.params.id;
  pool.query(
    "SELECT * FROM sales_invoice WHERE invoice_id = $1",
    [invoice_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json({ message: `invoice_id  ${invoice_id}`, data: results.rows });
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
  addSalesInvoice,
  getSalesInvoices,
  getInvoiceById
  // getTotalDailySales,
  // getWeeklyRevenue
  // getWeeklyCustomers,
};
