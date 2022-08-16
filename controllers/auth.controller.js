const pool = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtgenerator");
const authorization = require("../middleware/auth.middleware");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("Select * from users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      res.status(401).json("Password or Email is incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Password is incorrect");
    }

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token: token, user: user.rows });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const registerUser = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const isUser = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (isUser.rows.length > 0) {
    return res.json({ message: "User Already Exist!" });
  }

  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(password, salt);

  const register = await pool.query(
    "INSERT INTO users (email, password, firstname, lastname, created_at) VALUES ($1, $2, $3, $4 , current_timestamp ) RETURNING *",
    [email, bcryptPassword, firstname, lastname]
  );

  const token = jwtGenerator(register.rows[0].user_id);
  res.json({ token: token, data: register.rows });

  (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    } else {
      if (results.rows.length === 0) {
        res.send(JSON.stringify({ error: "User not registered." }));
      }
    }

    res.status(200).json({
      message: "User Registered Successfully!",
      data: results.rows[0],
    });
  };
};

const isVerified = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
  }
};

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY user_id DESC", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const user_id = req.params.id;
  pool.query(
    "SELECT * FROM users WHERE user_id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: `User Details of ${user_id}:`, data: results.rows });
    }
  );
};

module.exports = {
  registerUser,
  userLogin,
  isVerified,
  getUsers,
  getUserById,
};
