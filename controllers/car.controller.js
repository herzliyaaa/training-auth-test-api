const pool = require("../config/db.config");

const getCars = (req, res) => {
  pool.query("SELECT * FROM cars ORDER BY car_id DESC", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getCarById = (req, res) => {
  const car_id = req.params.id;
  pool.query(
    "SELECT * FROM cars WHERE car_id = $1",
    [car_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json({ message: `Car ${car_id}`, data: results.rows });
    }
  );
};

// original car controller
// const addCar = (req, res) => {
//   const { serial_number, make, model, color, year, car_for_sale } = req.body;
//   pool.query(
//     "INSERT INTO cars (serial_number, make, model, color, year, car_for_sale) VALUES ($1, $2, $3, $4 , $5 , $6) RETURNING *",
//     [serial_number, make, model, color, year, car_for_sale],
//     (error, results) => {
//       if (error) {
//         res.status(400).json(error.message);
//       }
//       res
//         .status(200)
//         .json({ message: "Car Created Successfully!", data: results.rows[0] });
//     }
//   );
// };

//with upload

const addCar = (req, res) => {
  const { serial_number, make, model, color, year, car_for_sale } = req.body;

  const url = req.protocol + "://" + req.get("host");
  const image_file = url + "/uploads/" + req.file.filename;

  pool.query(
    "INSERT INTO cars (serial_number, make, model, color, year, car_for_sale, image_file) VALUES ($1, $2, $3, $4 , $5 , $6, $7 ) RETURNING *",
    [serial_number, make, model, color, year, car_for_sale, image_file],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json({
        message: "Car Created Successfully!",
        data: results.rows,
      });
    }
  );
};

// const editCar = (req, res) => {
//   const car_id = req.params.id;
//   const { serial_number, make, model, color, year, car_for_sale } = req.body;
//   pool.query(
//     "UPDATE cars SET serial_number = $1, make = $2, model = $3, color = $4, year = $5 , car_for_sale = $6 WHERE car_id = $7",
//     [serial_number, make, model, color, year, car_for_sale, car_id],
//     (error, results) => {
//       if (error) {
//         res.status(400).json(error.message);
//       }
//       res
//         .status(200)
//         .json({ message: "Car Updated Successfully!", data: results.rows[0] });
//     }
//   );
// };

const editCar = (req, res) => {
  const car_id = req.params.id;
  const url = req.protocol + "://" + req.get("host");
  const image_file = url + "/uploads/" + req.file.filename;

  const { serial_number, make, model, color, year, car_for_sale } = req.body;
  pool.query(
    "UPDATE cars SET serial_number = $1, make = $2, model = $3, color = $4, year = $5 , car_for_sale = $6, image_file = $7 WHERE car_id = $8 RETURNING *",
    [serial_number, make, model, color, year, car_for_sale, image_file, car_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Car Updated Successfully!", data: results.rows[0] });
    }
  );
};

const deleteCar = (req, res) => {
  const car_id = req.params.id;
  pool.query(
    "DELETE FROM cars WHERE car_id = $1",
    [car_id],
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json(error.message || `Could not delete car with id ${car_id}`);
      }
      res.status(200).json({ message: "Car Deleted Successfully!" });
    }
  );
};

const deleteAllCars = (req, res) => {
  pool.query("TRUNCATE TABLE cars CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json({ message: "All Cars were deleted!!" });
  });
};

const getTotalCars = (req, res) => {
  pool.query("SELECT COUNT(car_id) FROM cars", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getCars,
  getCarById,
  getTotalCars,
  addCar,
  editCar,
  deleteCar,
  deleteAllCars,
};
