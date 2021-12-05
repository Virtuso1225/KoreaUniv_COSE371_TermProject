const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "picfast_db",
  password: "choi0934!",
  port: 5432,
});

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM Users", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  getUsers,
};
