import { Student } from "../models/Student";

export class StudentService {
  constructor(private students: Student[]) {}

  findStudentById(id: string) {
    return this.students.find(s => s.id === id);
  }
}