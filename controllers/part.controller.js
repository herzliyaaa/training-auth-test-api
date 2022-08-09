const pool = require("../config/db.config");

const getParts = (req, res) => {
  pool.query("SELECT * FROM parts ORDER BY part_id DESC", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getPartById = (req, res) => {
  const part_id = req.params.id;
  pool.query(
    "SELECT * FROM parts WHERE part_id = $1",
    [part_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json({ message: `Part ${part_id}`, data: results.rows });
    }
  );
};

const addPart = (req, res) => {
  const { part_number, description, purchase_price, retail_price } = req.body;
  pool.query(
    "INSERT INTO parts (part_number, description, purchase_price, retail_price) VALUES ($1, $2, $3, $4 ) RETURNING *",
    [part_number, description, purchase_price, retail_price],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Part Created Successfully!", data: req.body });
    }
  );
};

const editPart = (req, res) => {
  const part_id = req.params.id;
  const { part_number, description, purchase_price, retail_price } = req.body;
  pool.query(
    "UPDATE parts SET part_number = $1, description = $2, purchase_price = $3, retail_price = $4 WHERE part_id = $5",
    [part_number, description, purchase_price, retail_price, part_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Part Updated Successfully!", data: results.rows[0] });
    }
  );
};

const deletePart = (req, res) => {
  const part_id = req.params.id;
  pool.query(
    "DELETE FROM parts WHERE part_id = $1",
    [part_id],
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json(error.message || `Could not delete part with id ${part_id}`);
      }
      res.status(200).json({ message: "Part Deleted Successfully!" });
    }
  );
};

const deleteAllParts = (req, res) => {
  pool.query("TRUNCATE TABLE parts CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json({ message: "All Parts were deleted!!" });
  });
};

const getTotalParts = (req, res) => {
  pool.query("SELECT COUNT(part_id) FROM parts", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getPartsUsed = (req, res) => {
  pool.query(
    "SELECT * FROM parts_used ORDER BY parts_used_id DESC",
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json(results.rows);
    }
  );
};

const getPartUsedById = (req, res) => {
  const part_used_id = req.params.id;
  pool.query(
    "SELECT * FROM parts_used WHERE parts_used_id = $1",
    [part_used_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: `Part ${part_used_id}`, data: results.rows });
    }
  );
};

const addPartUsed = (req, res) => {
  const { part_id, service_ticket, number_used, price } = req.body;
  pool.query(
    "INSERT INTO parts (part_id, service_ticket, number_used, price) VALUES ($1, $2, $3, $4 )",
    [part_id, service_ticket, number_used, price],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Part Used Added Successfully!", data: req.body });
    }
  );
};

module.exports = {
  getParts,
  getPartById,
  getTotalParts,
  addPart,
  editPart,
  deletePart,
  deleteAllParts,
  getPartsUsed,
  getPartUsedById,
  addPartUsed,
};
