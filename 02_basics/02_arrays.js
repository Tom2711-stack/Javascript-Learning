const anime_heros = ["Ichigo", "Naruto", "Kageyama"]
const marvel_heros = ["Ironman", "Spiderman", "CaptainAmerica"]

// anime_heros.push(marvel_heros) // it takes arrays as a data


// console.log(anime_heros)
// console.log(anime_heros[3][1]);

const allHero = anime_heros.concat(marvel_heros)
// console.log(allHero);

const all_new_heros = [...anime_heros, ...marvel_heros]
// console.log(all_new_heros); // more usefull cauz you can add many 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // combine all into one if there is depth means in one array there are more arrays

console.log(Array.isArray("Tomojit"))
console.log(Array.from("Tomojit"))
console.log(Array.from({name: "tomojit"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

