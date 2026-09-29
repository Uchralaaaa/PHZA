"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
class CourseService {
    constructor(courses) {
        this.courses = courses;
    }
    enrollStudent(courseId, student) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course)
            throw new Error("Хичээл олдсонгүй");
        course.enrollStudent(student);
    }
    assignGrade(courseId, studentId, grade) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course)
            throw new Error("Хичээл олдсонгүй");
        course.assignGrade(studentId, grade);
    }
}
exports.CourseService = CourseService;
