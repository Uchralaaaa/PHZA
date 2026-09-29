export class Task {
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
