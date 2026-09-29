"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
class TeacherService {
    constructor(teachers) {
        this.teachers = teachers;
    }
    getTeacherById(id) {
        return this.teachers.find(t => t.id === id);
    }
}
exports.TeacherService = TeacherService;
