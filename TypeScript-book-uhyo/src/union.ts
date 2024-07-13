// type Animal = {
//     species: string;
//     age: string;
// };
// type Human = {
//     name: string;
//     age: number;
// };

// type User = Animal | Human;
// const tama: User = {
//     species: 'Felis silvestris catus',
//     age: '永遠の命',
// };
// const uhyo: User = {
//     name: 'uhyo',
//     age: 26,
// };

// function showAge(user: User) {
//     const age = user.age;
//     console.log(age);
// }
// showAge(tama);
// showAge(uhyo);

// type Animal = {
//     species: string;
//     age: number;
// };

// type Human =  Animal & {
//     name: string;
// };

// const tama: Animal = {
//     species: 'Felis silvestris catus',
//     age: 3,
// };

// const uhyo: Human = {
//     species: 'homo sapiens sapiens',
//     age: 26,
//     name: 'uhyo',
// }

// type Human = {
//     name: string;
// };
// type Animal = {
//     species: string;
// };
// function getName(human: Human) {
//     return human.name;
// }
// function getSpecies(animal: Animal) {
//     return animal.species;
// }

// const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

// const uhyo: Human & Animal = {
//     name: 'uhyo',
//     species: 'homo sapiens sapiens'
// }
// const value = mysteryFunc(uhyo);
// console.log(value);

// type Human = {
//     name: string;
//     age?: number;
// };

// const uhyo: Human = {
//     name: "uhyo",
//     age: 25
// };
// const John: Human = {
//     name: "John Smith"
// };

