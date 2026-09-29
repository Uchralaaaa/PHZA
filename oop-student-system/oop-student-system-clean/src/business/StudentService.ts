import { Student } from "../domain/Student.js";

export class StudentService {
  constructor(private students: Student[]) {}

  findStudentById(id: string) {
    return this.students.find(s => s.id === id);
  }
}