// Exercise 4: Joining up the data, part 1

// Write a program that fetches all the accounts and their addressbooks.
// Output one line for each account as in Exercise 4, followed by a listing of 
// all the address book names for that account, one per line
// Make the output look nice in any way you like
// Here is an example:
// #1: john@smith.com
//   business contacts
//   friends
// #2: jane@smith.com
//   ...

var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'addressbook'
});

connection.query('select Account.id, AddressBook.name, Account.email from Account join AddressBook on Account.id=AddressBook.accountId', function(err, results) {
    if (err) {
        console.log("error");
    }
    else {
        var pushAccounts = [];
        
        results.forEach(function(row) {
        var discover;
        var index;
        
        pushAccounts.forEach(function(row2, position) {
            if (row2.id === row.id) {
                discover = true;
                index = position;
            }
        })
            if (!discover) {
                var createAccount = {
                    id: row.id,
                    email: row.email,
                    books: [row.name]   
                }
                 pushAccounts.push(createAccount);
            } else {
                pushAccounts[index].books.push(row.name);
            }
    })
    
     pushAccounts.forEach(function(account){
        console.log(account.id+ '. '+ account.email);
        account.books.forEach(function(book) {
            console.log('    ' + book);
        })
    })
        
    }
    
    connection.end();
    
});

