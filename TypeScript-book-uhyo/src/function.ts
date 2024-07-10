
// type User = { name: string; age: number; };
// const users: User[] = [
//     { name: 'uhyo', age: 26 },
//     { name: 'John Smith', age: 15 },
// ];

// const names = users.map((u: User): string => u.name);
// console.log(names);


// Q1.
// function getFizzBuzzMessage(num: number): string {
//     if (num % 15 === 0) {
//         return 'FizzBuzz';
//     } else if (num % 3 === 0) {
//         return 'Fizz';
//     } else if (num % 5 === 0) {
//         return 'Buzz';
//     } else {
//         return String(num);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     const message = getFizzBuzzMessage(i);
//     console.log(message);
// }

// Q2.
// function sequence(start: number, end: number): number[] {
//     const array = [];
//     for (let i = start; i <= end; i++) {
//         array.push(i);
//     }
//     return array;
// }

// for (const i of sequence(1, 100)) {
//     const message = getFizzBuzzMessage(i);
//     console.log(message);
// }

// Q3.
// function map<T, U>(array:T[], callback:(value:T ) => U): U[] {
//     const mapped: U[] = [];
//     for (const element of array) {
//         mapped.push(callback(element));
//     }
//     return mapped;
// }

// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
// console.log(result);

// const data2 = [1, -3, -2, 8, 0, -1];
// const result2 = map(data2, (x) => x >= 2);
// console.log(result2);