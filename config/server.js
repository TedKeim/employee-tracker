// first list dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// set up server and port # 

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "password",
    database: "tracker_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  // start inquirer prompt

  // add functions to add role, employee, and department