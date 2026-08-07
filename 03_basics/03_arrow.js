const user = {
    username : "Tomojit",
    price: 999,                   // this refers to the current context

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" // simply changed the context and it will print sam now
// user.welcomeMessage()

// console.log(this); // in node enviroment printing this will result in current context
                   // {} empty => its refering empty object
                   // in browser console it is windows


// function coffee(){
    // let username = "tomojit"
    // console.log(this.username);
// }

// coffee()

// const coffee = () => {
//     let username = "tomojit"
//     console.log(this);  // same result undefined like the previous one
// }

// coffee()


// +++++++++++++++ pure arrow function ++++++++++++++++++++++

// basic syntax

// () => {}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// result = addTwo(3,4) // explicit return
// console.log(result)

// const addTwo = (num1, num2) => (num1 + num2) // implicit return

// console.log(addTwo(3, 4))

// object return


const addTwo = () => ({ username: "tomojit" });
 // we have to use {} brackets

