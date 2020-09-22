const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// const connection = mysql.createPool({
//   host: 'localhost', // Your connection adress (localhost).
//   user: 'root',     // Your database's username.
//   password: '',        // Your database's password.
//   database: 'wazuuh db',  // Your database's name.
//   multipleStatements: true
// });


// //@route GET api/alertdb/time
// //@desc  view alertdb ona specific time
// router.get('/time',(req, res) => {
//     let sql = "SELECT * FROM `alert` WHERE timestamp = `1588967240`";
//     let query = connection.query(sql, (err, results) => {
//       if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
//   });

//   module.exports = router;