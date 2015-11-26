//load mysql dependency
var colors = require('colors');
var mysql = require('mysql');
var Table = require('cli-table');


var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'mysql'
});


connection.query('show databases', function(err, results){
    if (err) {
        console.log('nothing');
    }
    else {
        var table = new Table({
          chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                 , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                 , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                 , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        });
    	
    	table.push(
                ["Databases:" .black.bold]
            );
            
    }
    console.log(table.toString());
     connection.end();
})