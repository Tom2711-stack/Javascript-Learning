// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[4]);

const myHeros = ["Spiderman", "IchigoKurosaki"]
// console.log(myHeros);

// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop(3)
// console.log(myArr);

myArr.unshift(8)
// console.log(myArr); // adds at the start
myArr.shift()
// console.log(myArr);



// console.log(myArr.includes(4))
// console.log(myArr.indexOf(4))

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



