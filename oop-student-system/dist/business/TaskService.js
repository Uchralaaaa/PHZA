"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getTasksByCourse(courseId) {
        return this.tasks.filter(t => t.courseId === courseId);
    }
    getCompletedStudents(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        return task?.completedStudentIds ?? [];
    }
}
exports.TaskService = TaskService;
