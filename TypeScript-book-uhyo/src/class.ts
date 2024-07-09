class User {
    name: string = "";
    age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        
    }

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.name);
console.log(uhyo.isAdult());
