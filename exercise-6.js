// ## Exercise 6: Joining up the data, part 2
// 1. Write a program that fetches all accounts, their addressbooks, and entries.
// 2. Hint #1: you will have two `JOIN`s in your query.
// 3. Hint #2: you will need to use `AS` to give each column a unique name
// 4. Once you receive your results in JavaScript land, transform them into an 
// **array** of accounts with nested relations.
// 5. Here is an example of the end result we are looking for:
// ```javascript
// [
//   {
//     id: 1,
//     email: 'john@smith.com',
//     addressBooks: [
//       {
//         id: 1,
//         name: 'business contacts',
//         entries: [
//           {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Connor'
//           },
//           {
//             id: 10,
//             firstName: 'Sarah',
//             lastName: 'Connor'
//           }
//         ]
//       },
//       {
//         // another address book for account 1...
//       }
//     ]
//   },
//   {
//     // another account...
//   }
// ]
// ```


var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'addressbook'
});

connection.query('select Account.id as accId, Account.email as accEmail, AddressBook.id as adId, AddressBook.name as adName, Entry.id as entId, Entry.firstName as entFirstN, Entry.lastName as entLastN from Account join AddressBook on Account.id=AddressBook.accountId join Entry on AddressBook.id=Entry.addressbookId', function (err, results) {
    if (err) {
        console.log('error');
    } 
    else {
        var finalResults = [];
        var Accounts ={};
        
        results.forEach(function (row) {
            var acc = Accounts[row.accId]
        })
    }
    connection.end();
})