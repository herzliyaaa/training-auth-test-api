
//invoice
//create an invoice (one invoice per car and salesperson)

const pool = require("../config/db.config");

const addSalesInvoice = (req, res) => {
  const { invoice_number, car_id, customer_id, salesperson_id } = req.body;
  pool.query(
    "INSERT INTO sales_invoice (invoice_number, transaction_date, car_id, customer_id, salesperson_id) VALUES ($1, localtimestamp, $3, $4 , $5)",
    [invoice_number, car_id, customer_id, salesperson_id],
    (error, results) => {
      if (error) {
        res.json("Error! huehue")
      };
      res.status(200).json("Sales Transaction Successful!");
    }
  );
}



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
  addSalesInvoice
  // getTotalDailySales,
  // getWeeklyRevenue
  // getWeeklyCustomers,
};
