const pool = require("../config/db.config");

const getServices = (req, res) => {
  pool.query("SELECT * FROM services ORDER BY service_id DESC", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getServiceById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM services WHERE service_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addService = (req, res) => {
  const { service_name, hourly_rate} = req.body;
  pool.query(
    "INSERT INTO services (service_name, hourly_rate) VALUES ($1, $2) RETURNING *",
    [service_name, hourly_rate],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Service Created Successfully!", data: results.rows});
    }
  );
};

const editService = (req, res) => {
  const id = req.params.id;
  const { service_name, hourly_rate } = req.body;
  pool.query(
    "UPDATE services SET service_name = $1, hourly_rate= $2 WHERE service_id = $3 RETURNING *",
    [service_name, hourly_rate, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({ message:"Service Updated Successfully!", data: results.rows});
    }
  );
};

const deleteService = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM services WHERE service_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Service Deleted Successfully!");
    }
  );
};

const deleteAllServices = (req, res) => {
  pool.query("TRUNCATE TABLE services CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res
        .status(200)
        .json({ message: "All Services were deleted!!"});
  });
};


const getTotalServices = (req, res) => {
  pool.query("SELECT COUNT(service_id) FROM services", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getServices,
  getServiceById,
  addService,
  editService,
  deleteService,
  deleteAllServices,
  getTotalServices,
};
