"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Сайн байна уу! Намайг ${this.name} гэдэг. Би ${this.age} настай.`;
    }
    getRole() {
        return "Person";
    }
}
exports.Person = Person;
