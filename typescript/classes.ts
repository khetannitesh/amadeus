class Person {
    name: string;
    age: number;
    city: string;

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    introduce() {
        console.log('Hey I am ' + this.name + ' and ' + this.age + ' years old');
    }
}

let person1 = new Person('Sam', 23, 'Banglore');
person1.introduce();
