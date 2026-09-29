"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, courseId) {
        this.id = id;
        this.title = title;
        this.courseId = courseId;
        this.completedStudentIds = [];
    }
    submit(studentId) {
        this.completedStudentIds.push(studentId);
    }
}
exports.Task = Task;
