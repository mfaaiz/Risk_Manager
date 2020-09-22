const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
  const connection = mysql.createPool({
  host: 'localhost', // Your connection adress (localhost).
  user: 'root',     // Your database's username.
  password: '',        // Your database's password.
  database: 'wazuuh db',  // Your database's name.
  multipleStatements: true
});

const router = express.Router();

const app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
  
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query('SELECT full_log FROM alert WHERE rule_id=23501 OR rule_id=23503 OR rule_id=23504 OR rule_id=23505 OR rule_id=23506 OR rule_id=23507 OR rule_id=23508 OR rule_id=23509 OR rule_id=23510', 
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
  
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        /* var result = results[0];
        result.full_log = JSON.parse(result.full_log); */
        res.send(results);
  
       // console.log(results);
      });
    });
  });

  //@route GET api/alertdb/time
//@desc  view alertdb on a specific time
app.get('/api/alertdb/time',(req, res) => {
  let sql = "SELECT full_log FROM alert WHERE rule_id=23501 OR rule_id=23503 OR rule_id=23504 OR rule_id=23505 OR rule_id=23506 OR rule_id=23507 OR rule_id=23508 OR rule_id=23509 OR rule_id=23510";
  let query = connection.query(sql, (err, results) => {
    if(err) throw err;
   // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
   res.send(results);
  });
});

  //APIS

  //app.use("/api/alertdb", require("../apis/alertdb"));

  app.listen(4000, () => {
    console.log('Go to http://localhost:4000 so you can see the data.');
  });
  