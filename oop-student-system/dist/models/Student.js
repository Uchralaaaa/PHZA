"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course);
    }
    getCourses() {
        return this.courses;
    }
    getRole() {
        return "Student";
    }
}
exports.Student = Student;
