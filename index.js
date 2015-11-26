//load mysql dependency
var colors = require('colors');
var mysql = require('mysql');
var Table = require('cli-table');

//create a connection object to link mysql to javascript

var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'mysql'
});

connection.query('show databases', function(err, results) {
    if (err) {
        console.log('there was an error');
    }

    else {
        var table = new Table({
          chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                 , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                 , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                 , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        });
        
        table.push(
                ["Databases" .black.bold]
            );
        
        results.forEach(function(result) {
       table.push(
                [result.Database .rainbow]
            );
            
        });
        
        console.log(table.toString());
        
        

        connection.end();
    }

});
