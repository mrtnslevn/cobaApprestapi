var mysql = require('mysql');

const connectdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi',
});

connectdb.connect((err) => {
    if (err) throw err;
    console.log('mysql connected');
});

module.exports = connectdb;

