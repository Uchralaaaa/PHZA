import { Student } from "./domain/Student.js";
import { Teacher } from "./domain/Teacher.js";
import { Course } from "./domain/Course.js";
import { Task } from "./domain/Task.js";

import { CourseService } from "./business/CourseService.js";
import { StudentService } from "./business/StudentService.js";
import { TeacherService } from "./business/TeacherService.js";
import { TaskService } from "./business/TaskService.js";

const s1 = new Student("S1", "Бат", 20);
const s2 = new Student("S2", "Сараа", 21);

const teacher = new Teacher("T1", "Мөнх", 35, "Software");

const course = new Course("C1", "Software Architecture", teacher.id);


const task1 = new Task("TASK1", "Design Pattern Homework", course.id);

const courseService = new CourseService([course]);
const studentService = new StudentService([s1, s2]);
const teacherService = new TeacherService([teacher]);
const taskService = new TaskService([task1]);

// ✅ Энэ дарааллаар хичээлд бүртгэх, үнэлгээ оноох
courseService.enrollStudent("C1", s1);
courseService.enrollStudent("C1", s2);

courseService.assignGrade("C1", s1.id, 85);
courseService.assignGrade("C1", s2.id, 90);

task1.submit("S1");
task1.submit("S2");

// Хичээлд бүртгэгдсэн оюутнуудын үнэлгээ
console.log(`${course.name} хичээлийн үнэлгээ:`);
course.getStudentGrades().forEach((grade, studentId) => {
  const student = studentService.findStudentById(studentId);
  console.log(`${student?.name}: ${grade} оноо`);
});

// Багшийн мэдээлэл
const t = teacherService.getTeacherById(teacher.id);
console.log(`${t?.name} багш ${t?.subject} хичээл зааж байна.`);

// Даалгавар мэдээлэл
console.log("Даалгавар өгсөн хичээл:");
taskService.getTasksByCourse(course.id).forEach(task => {
  console.log(`- ${task.title}`);
});

console.log("Даалгаврыг гүйцэтгэсэн оюутнууд:");
taskService.getCompletedStudents(task1.id).forEach(studentId => {
  const student = studentService.findStudentById(studentId);
  console.log(`- ${student?.name}`);
});

//hesegchlen testleh
