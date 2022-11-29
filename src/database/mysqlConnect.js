const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Lalit@33cool",
    database: 'test'
});

connection.connect((err) => {
    if (err) throw err;
    else console.log("connected to mysql database")
})