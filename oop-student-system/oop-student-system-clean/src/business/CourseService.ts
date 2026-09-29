import { Course } from "../domain/Course.js";
import { Student } from "../domain/Student.js";

export class CourseService {
  constructor(private courses: Course[]) {}

  enrollStudent(courseId: string, student: Student) {
    const course = this.courses.find(c => c.id === courseId);
    if (!course) throw new Error("Хичээл олдсонгүй");

    course.enrollStudent(student);
  }

  assignGrade(courseId: string, studentId: string, grade: number) {
    const course = this.courses.find(c => c.id === courseId);
    if (!course) throw new Error("Хичээл олдсонгүй");

    course.assignGrade(studentId, grade);
  }
}