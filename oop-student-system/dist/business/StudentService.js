"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
class StudentService {
    constructor(students) {
        this.students = students;
    }
    findStudentById(id) {
        return this.students.find(s => s.id === id);
    }
}
exports.StudentService = StudentService;
