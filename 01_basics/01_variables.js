const accountId = 144553
let accountEmail = "tomojit@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "tb@tb.com"
accountPassword = "12323343"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
