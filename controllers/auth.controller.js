const pool = require("../config/db.config");

const userLogin = (req, res) => {
  const { email, password } = req.body;
  pool.query(
    "SELECT * FROM users WHERE email = $1 and password = $2",
    [email, password],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }

      if (isUser.rows[0]) {
        res.status(200).json(isUser.rows[0]);
      }
    }
  );
};

const registerUser = (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const isUser = pool.query(
    'SELECT * FROM "users" WHERE "email"= $1 AND "password"=$2 AND "firstname"=$3 AND "lastname"=$4',
    [email, password, firstname, lastname]
  );

  if (isUser.rows[0]) {
    res.status(400).json("User exists");
  } else {
    pool.query(
      "INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4 ) RETURNING *",
      [email, password, firstname, lastname],

      (error, results) => {
        if (error) {
          res.status(400).json(error.message);
        } else {
          if (result.rows.length === 0) {
            res.send(JSON.stringify({ error: "User not registered." }));
          }
        }
        res
          .status(200)
          .json({ message: "User Registered Successfully!", data: req.body });
      }
    );
  }
};

// const login_user = async (req, res) => {
//   try {
//     const { email, password, role } = req.body;
//     const isUser = await postgres.query(
//       'SELECT * FROM "Users" WHERE "Email"=$1 AND "Password"=$2 AND "Role"=$3',
//       [email, password, role]
//     );
//     if (isUser.rows[0]) {
//       res.status(200).json(isUser.rows[0]);
//     } else {
//       res.status(400).json('No such user found');
//     }
//   } catch (err) {
//     res.status(400).json(err.message);
//     console.log(err.message);
//   }
// };

module.exports = {
  registerUser,
  userLogin
};
