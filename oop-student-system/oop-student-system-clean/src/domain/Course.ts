import { Student } from "./Student.js";

export class Course {
  public students: Student[] = [];
  private grades: Map<string, number> = new Map();

  constructor(
    public id: string,
    public name: string,
    public teacherId: string
  ) {}

  enrollStudent(student: Student) {
    this.students.push(student);
  }

  assignGrade(studentId: string, grade: number) {
    this.grades.set(studentId, grade);
  }

  getStudentGrades() {
    return this.grades;
  }
}