// ## Exercise 5: More about joins...
// 1. Notice that for the previous exercise, Account #5 did not appear in the
// listing. (really, stop reading and go and notice :))
// 2. The reason for this is because Account #5 does not have any
// AddressBook, so doing the JOIN left it out.
// 3. [Read and **understand** this article on SQL JOINs]
// (http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/), 
// more specifically about the `LEFT JOIN`.
// 4. Based on your new understanding, create a similar program 
// to Exercise #4.
// 5. The only difference, if an account does not have any address book, print it like this:
// ```
// #3: xxx@yyy.com
//   --no address books--
// ```

var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'lsinh',
    host: '127.0.0.1',
    database: 'addressbook'
});

connection.query('select Account.id, Account.email, AddressBook.name from Account left outer join AddressBook on Account.id=AddressBook.accountId', function(err, results) {
    if (err) {
        console.log("error");
    }
    else {
        var newAccounts = [];
        
        //loop through the array of results for query
        results.forEach(function(row) {
            var found;
            var index;
        //within this loop, loop through the empty array, beginning will return nothing with
        //index position (called count) as 2nd parameter
            newAccounts.forEach(function(row2, count) {
                if (row.id === row2.id) {
                    found = true;
                    index = count;
                }
            })
        //if there were no duplicate entries then you create a new object with id, email and name corresponding
        //what you find in the first array
        
            if (!found) {
                var createAccount = {
                    id: row.id,
                    email: row.email,
                    names: [row.name]
                    
                }
                newAccounts.push(createAccount);
                
            }
                else { 
                    newAccounts[index].names.push(row.name);
    
            
    
            }
            
                
            
        })
         newAccounts.forEach(function(account){
        console.log(account.id+ '. '+ account.email);
        account.names.forEach(function(book) {
            if (book === null) {
            console.log('   no address book');                
            }
            else {
            console.log('    ' + book);
            }
            
        })
    })
       
        
    }
    connection.end();
    
})

