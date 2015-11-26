//load mysql dependency
var mysql = require('mysql');

//create a connection object to link mysql to javascript

var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'mysql'
});

connection.query('source  `data.sql`', function(err, results) {
    if (err) {
        console.log('error');
    }
    else {
        console.log(results);
    }
})