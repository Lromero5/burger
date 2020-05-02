var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ag3fqkaaqaeqofli",
  password: "wx7arv32mxncrlfk",
  database: "ssjw0e8ppwsqe9ax"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;