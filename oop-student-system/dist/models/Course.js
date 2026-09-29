"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
        this.grades = new Map();
    }
    enrollStudent(student) {
        this.students.push(student);
    }
    assignGrade(student, grade) {
        this.grades.set(student, grade);
    }
    getStudentGrades() {
        return this.grades;
    }
    calculateAverage() {
        let total = 0;
        this.grades.forEach(g => (total += g));
        return this.grades.size ? total / this.grades.size : 0;
    }
}
exports.Course = Course;
