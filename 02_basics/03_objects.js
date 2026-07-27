//singleton 
// if its made by constructor then singleton can be made

//object literals
//Another way Object.create


const JsUser = {
    name: "Tomojit",
    "full name": "Tomojit Bhattacharjee",
    age: 20,
    location: "Kolkata",
    email: "tomojit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // for some cases we have to access it through sqaure brackets

JsUser.email = "tomojit@chatgpt.com"
// Object.freeze(JsUser) // locking it so it cant be changed
JsUser.email = "tomojit@nvidia.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting2());
console.log(JsUser.greeting());
