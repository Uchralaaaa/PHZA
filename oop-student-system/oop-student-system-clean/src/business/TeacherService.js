export class TeacherService {
    constructor(teachers) {
        this.teachers = teachers;
    }
    getTeacherById(id) {
        return this.teachers.find(t => t.id === id);
    }
}
