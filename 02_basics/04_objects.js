// const tinderUser = new Object()  Singleton object
const tinderUser = {} // Non Singleton object

tinderUser.id = "2705"
tinderUser.name = "Tomojit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "random@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Tomojit",
            lastname: "Bhattacharjee",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // target and source


const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [    
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js",
    price: "899",
    courseInstructuor: "Tomojit"
}
// Destructuring assignment is a JavaScript syntax introduced in ES6 that allows you to unpack values from arrays or properties from objects into distinct variables in a clean, concise way


const {courseInstructuor: instructor} = course // short method for extracting

// console.log(courseInstructuor);
// console.log(instructor)


// JSON

// {
//     "name": "Tomojit",      // ignoring syntax just for understanding
//     "coursename": "Js"
//     "price": "777"
// }

// [] sometimes we get api in array also not just objects

[
    {},
    {},
    {}
]

// we can also get object within arrays


