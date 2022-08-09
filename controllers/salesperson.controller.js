const pool = require("../config/db.config");

const getSalespersons = (req, res) => {
  pool.query("SELECT * FROM salespersons ORDER BY salesperson_id DESC", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSalespersonById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM salespersons WHERE salesperson_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addSalesperson = (req, res) => {
  const { firstname, middlename, lastname} = req.body;
  pool.query(
    "INSERT INTO salespersons (firstname, middlename, lastname) VALUES ($1, $2, $3) RETURNING *",
    [firstname, middlename, lastname],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Salesperson Created Successfully!", data: results.rows[0]});
    }
  );
};

const editSalesperson = (req, res) => {
  const id = req.params.id;
  const { firstname, middlename, lastname } = req.body;
  pool.query(
    "UPDATE salespersons SET firstname = $1, middlename = $2, lastname = $3 WHERE salesperson_id = $4",
    [firstname, middlename, lastname, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message:"Salesperson Updated Successfully!"});
    }
  );
};

const deleteSalesperson = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM salespersons WHERE salesperson_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Salesperson Deleted Successfully!");
    }
  );
};

const deleteAllSalespersons = (req, res) => {
  pool.query("TRUNCATE TABLE salespersons CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res
        .status(200)
        .json({ message: "All Salespersons were deleted!!"});
  });
};


const getTotalSalespersons = (req, res) => {
  pool.query("SELECT COUNT(salesperson_id) FROM salespersons", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getSalespersons,
  getSalespersonById,
  addSalesperson,
  editSalesperson,
  deleteSalesperson,
  deleteAllSalespersons,
  getTotalSalespersons,
};
