// type HasAge = {
//     age: number;
// };

// class User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// function getPrice(customer: HasAge): number {
//     if (customer instanceof User) {
//         if(customer.name === "uhyo") {
//             return 0;
//         }
//     }
//     return customer.age < 18 ? 1000: 1800;
// }

// const customer1: HasAge = {age: 15};
// const customer2: HasAge = {age: 40};
// const uhyo = new User("uhyo", 26);

// console.log(getPrice(customer1));
// console.log(getPrice(customer2));
// console.log(getPrice(uhyo));

// class User {
//     name: string = "";
//     age: number = 0;
// }

// type MyUserConstructor = new () => User;
// const MyUser: MyUserConstructor = User;
// const u = new MyUser();
// console.log(u);

// const uhyo: User = new User();

// const John: User = {
//     name: "John Smith",
//     age: 15,
//     isAdult: () => true
// };

// class User<T> {
//     name: string;
//     #age: number;
//     readonly data: T;

//     constructor(name: string, age: number, data: T) {
//         this.name = name;
//         this.#age = age;
//         this.data = data;
//     }
//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }
// const uhyo = new User<string>("uhyo", 26, "追加データ");
// const data = uhyo.data;

// const John = new User("John Smith", 15, {num: 123});
// const data2 = John.data;


// class User {
//     name: string;
//     #age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.#age = age;
//     }

//     public isAdult(): boolean {  
//         return this.#age >= 20;
//     }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());


// // class User {
// //     static adminName: string = "uhyo";
// //     static getAdminUser() {
// //         return new User(User.adminName, 26);
// //     }
// //     name: string;
// //     age: number;

// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     isAdult(): boolean {
// //         return this.age >= 20;
// //     }
// // }

// // console.log(User.adminName);
// // const admin = User.getAdminUser();
// // console.log(admin.age);
// // console.log(admin.isAdult());

// // const uhyo = new User("uhyo", 26);
// // console.log(uhyo.adminName);

// // class User {
// //     name: string = "";
// //     age: number = 0;

// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
        
// //     }

// //     isAdult(): boolean {
// //         return this.age >= 20;
// //     }
// // }

// // const uhyo = new User("uhyo", 26);
// // console.log(uhyo.name);
// // console.log(uhyo.isAdult());
