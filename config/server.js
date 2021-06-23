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
  
  function start() {
    inquirer
      .prompt({
        type: "list",
        name: "option",
        message: "Pick an option!",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Department",
          "View Role",
          "View Employee",
          "Update Employee Role",
          "Exit"
        ]
      })

      function addDepartment() {
        inquirer
          .prompt({
            type: "input",
            message: "What is the name of the department you want to add?",
            name: "department"
          })

          function addRole() {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the job title you want to add?",
                  name: "title"
                },
                {
                  type: "input",
                  message: "What is the salary for this position?",
                  name: "salary"
                },
                {
                  type: "input",
                  message: "What is the department ID for this position?",
                  name: "departmentID"
                }
              ])

              function addEmployee() {
                inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "What is the employee's first name?",
                      name: "firstName"
                    },
                    {
                      type: "input",
                      message: "What is the employee's last name?",
                      name: "lastName"
                    },
                    {
                      type: "input",
                      message: "What is the employee's role ID?",
                      name: "roleID"
                    },
                    {
                      type: "input",
                      message: "What is the employee's manager ID?",
                      name: "managerID"
                    }
                  ])
