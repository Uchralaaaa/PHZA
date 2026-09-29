"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Person_1 = require("./Person");
class Teacher extends Person_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        return `${this.name} багш ${this.subject} хичээл зааж байна.`;
    }
    getRole() {
        return "Teacher";
    }
}
exports.Teacher = Teacher;
