// Immediately Invoked Function Expressions (LIFE)

(function coffee(){ // named life
    console.log(`DB CONNECTED`);
})(); // to end this semicolon is required to run the next one

// for global scope pollution we use life

( (name) => { // unnamed life
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Tomojit");