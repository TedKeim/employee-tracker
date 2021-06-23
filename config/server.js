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

      .then(function(result) {
        console.log("You entered: " + result.option);
        switch (result.option) {
          case "Add Department":
            addDepartment();
            break;
          case "Add Role":
            addRole();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "View Department":
            viewDepartment();
            break;
          case "View Role":
            viewRole();
            break;
          case "View Employee":
            viewEmployee();
            break;
          case "Update Employee Role":
            updateRole();
            break;
          case "Exit":
            connection.end();
            break;
        }
      });
  }

      function addDepartment() {
        inquirer
          .prompt({
            type: "input",
            message: "What is the name of the department you want to add?",
            name: "department"
          })

          .then(function(res) {
            const department = res.department;
            const query = `INSERT INTO department (name) VALUES("${department}")`;
            connection.query(query, function(err, res) {
              if (err) throw err;
              console.table(res);
              start();
            });
          });
      }

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
