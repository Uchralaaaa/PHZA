import { Student } from "./models/Student";
import { Teacher } from "./models/Teacher";
import { Course } from "./models/Course";

const student1 = new Student("Бат", 20, "S123");
const student2 = new Student("Сараа", 21, "S124");

const teacher1 = new Teacher("Мөнх", 35, "Математик");

const mathCourse = new Course("Математик", teacher1.name);

mathCourse.enrollStudent(student1);
mathCourse.enrollStudent(student2);

mathCourse.assignGrade(student1, 95);
mathCourse.assignGrade(student2, 90);

console.log(`${mathCourse.name} хичээлийн үнэлгээ:`);

mathCourse.getStudentGrades().forEach((grade, student) => {
  console.log(`${student.name}: ${grade} оноо`);
});

console.log("Дундаж:", mathCourse.calculateAverage());
console.log(teacher1.teach());
console.log(student1.getRole(), teacher1.getRole());