const pool = require("../config/db.config");

const getMechanics = (req, res) => {
  pool.query(
    "SELECT * FROM mechanics ORDER BY mechanic_id DESC",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getMechanicById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM mechanics WHERE mechanic_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addMechanic = (req, res) => {
  const { firstname, middlename, lastname } = req.body;
  pool.query(
    "INSERT INTO mechanics (firstname, middlename, lastname) VALUES ($1, $2, $3)",
    [firstname, middlename, lastname],
    (error, results) => {
      if (error) throw error;
      res
        .status(200)
        .json({ message: "Mechanic Created Successfully!", data: req.body });
    }
  );
};

const editMechanic = (req, res) => {
  const id = req.params.id;
  const { firstname, middlename, lastname } = req.body;
  pool.query(
    "UPDATE mechanics SET firstname = $1, middlename = $2, lastname = $3 WHERE mechanic_id = $4",
    [firstname, middlename, lastname, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Mechanic Updated Successfully!" });
    }
  );
};

const deleteMechanic = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM mechanics WHERE mechanic_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Mechanic Deleted Successfully!");
    }
  );
};

const deleteAllMechanics = (req, res) => {
  pool.query("TRUNCATE TABLE mechanics CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json({ message: "All Mechanics were deleted!!" });
  });
};

//service mechanics

const getServiceMechanics = (req, res) => {
  pool.query(
    "SELECT * FROM service_mechanics ORDER BY service_mechanic_id DESC",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getServiceMechanicById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM service_mechanics WHERE service_mechanic_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addServiceMechanic = (req, res) => {
  const { mechanic_id, service_id, service_ticket_id, hours, comment, rate } =
    req.body;
  pool.query(
    "INSERT INTO service_mechanics (mechanic_id, service_id, service_ticket_id, hours, comment, rate) VALUES ($1, $2, $3, $4, $5, $6)",
    [mechanic_id, service_id, service_ticket_id, hours, comment, rate],
    (error, results) => {
      if (error) throw error;
      res
        .status(200)
        .json({ message: "Mechanic Created Successfully!", data: req.body });
    }
  );
};

// extras ....
const getTotalMechanics = (req, res) => {
  pool.query("SELECT COUNT(mechanic_id) FROM mechanics", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getMechanics,
  getMechanicById,
  addMechanic,
  editMechanic,
  deleteMechanic,
  deleteAllMechanics,
  addServiceMechanic,
  getServiceMechanicById,
  getServiceMechanics,
  getTotalMechanics,
};
