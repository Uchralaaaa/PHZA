export class Course {
    constructor(id, name, teacherId) {
        this.id = id;
        this.name = name;
        this.teacherId = teacherId;
        this.students = [];
        this.grades = new Map();
    }
    enrollStudent(student) {
        this.students.push(student);
    }
    assignGrade(studentId, grade) {
        this.grades.set(studentId, grade);
    }
    getStudentGrades() {
        return this.grades;
    }
}
