// // type User = {
// //     name: string;
// //     age: number;
// // }

// // function createUser(name: string, age: number): User {
// //     if (name === '') {
// //         throw new Error('name is empty');
// //     }
// //     return { name, age };
// // }

// // function getMessage(user: User, message: string): string {
// //     return `${user.name}(${user.age}) [${message}]`;
// // }

// // const uhyo = createUser('uhyo', 26);
// // console.log(getMessage(uhyo, 'Hello!'));


// // class User {
// //     name: string;
// //     age: number;

// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     public getMessage(user: User, message: string): string {
// //         return `${user.name}(${user.age}) [${message}]`;
// //     }
// // }

// // const uhyo = new User('uhyo', 26);
// // console.log(uhyo.getMessage(uhyo, 'Hello!'));

// // 5.6.3


// function createUser(name: string, age: number) {
//     return (message: string) => {
//         return `${name}(${age}): ${message}`;
//     };
// }

// const getMessage = createUser('uhyo', 26);
// console.log(getMessage('Hello!'));