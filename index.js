const express = require("express");
const mysql = require("mysql2");

const mysqlConfig = {
  host: "mysql_server",
  user: "awan",
  password: "pass",
  database: "test_db",
};
let con = null;

const app = express();
app.use(express.json());

// To test the server
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.get("/test", (req, res) => {
  res.status(200).send("Hello test");
});

// To test the db connection
app.get("/connect", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;
    res.status(200).send("Connected!");
  });
});

// To create the table
app.get("/init", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;
    const sql = `CREATE TABLE IF NOT EXISTS user ( id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255));`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send("User table created");
    });
  });
});

// To insert data to the table
// Send body as
// {
//   "name": "Name"
// }
app.post("/insert", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  let nameToInsert = req.body.name;

  con.connect((err) => {
    if (err) throw err;
    const sql = `INSERT INTO user (name) VALUES ("${nameToInsert}");`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(`"${nameToInsert}" inserted into table`);
    });
  });
});
app.get("/autoinsert", (req, res) => {
  con = mysql.createConnection(mysqlConfig);

  con.connect((err) => {
    if (err) throw err;
    const sql = `INSERT INTO user (name) VALUES ("Test Auto Insert");`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(`Auto inserted into table`);
    });
  });
});

// To show the data
app.get("/fetch", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;
    const sql = `SELECT * FROM user`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(JSON.stringify(result));
    });
  });
});

app.use( (req, res, next) => {
  res.status(404).send(`Sorry can't find that! ${req.path}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening...`);
});
