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

type Animal = {
    species: string;
    age: number;
};

type Human =  Animal & {
    name: string;
};

const tama: Animal = {
    species: 'Felis silvestris catus',
    age: 3,
};

const uhyo: Human = {
    species: 'homo sapiens sapiens',
    age: 26,
    name: 'uhyo',
}