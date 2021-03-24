const mysql = require("mysql");


// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "popQuiz_DB"
  });

connection.connect((err)=>{
    if (err) throw err;
    // creates a query callback function to select from the table called stuff
    connection.query('SELECT * FROM stuff', (error, results)=>{
        if (error) throw error;
        console.log(' results: ' , results);

        //always close connection whenn done
        connection.end();
    })

})