export class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Сайн байна уу! Намайг ${this.name} гэдэг.`;
    }
}
