
function sayMyname(){
console.log("T");
console.log("O");
console.log("M");
console.log("O");
console.log("J");
console.log("I");
console.log("T");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(100, 100) // passing arguments
// addTwoNumbers(2, "7")

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(20, 7)
// console.log("Result: ", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tomojit"))
// console.log(loginUserMessage()) 

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Tomojit"))


function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Tomojit",
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//Direct passing

// handleObject({
//     username: "Tomojit",
//     price: 999
// })

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600, 800]))