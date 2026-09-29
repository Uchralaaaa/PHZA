export class StudentService {
    constructor(students) {
        this.students = students;
    }
    findStudentById(id) {
        return this.students.find(s => s.id === id);
    }
}
