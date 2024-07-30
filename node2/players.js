// const players = {
//     name: "kohli",
//     age: 40
// }
// console.log(`Today's star is Mr. ${players.name} and his age is ${players['age']}`)

class Players {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Players;