// ## Exercise 3: Getting back our data
// 1. Write a program that fetches the first 5 accounts 
// in the addressbook database
// 2. For each account, `console.log` a line with the 
// account's ID and email, like this: **`#1:`**`email@domain.com`
// 3. Use the `colors` NPM module with the `.bold` option to achieve this effect


var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  user:'lsinh',
  host: '127.0.0.1',
  database: 'addressbook'
});

connection.query("select Account.id, Account.email from Account join AddressBook on Account.id=AddressBook.accountId where AddressBook.id between 1 and 6", 
function(err, results) {
	
	
	if (err) {
console.log('oops there ws an error');
}
else {
results.forEach(function(row) {
    console.log("ID#" + row.id  + "\nEmail: " + row.email .bgYellow.bold);
}
)}

connection.end();
});




