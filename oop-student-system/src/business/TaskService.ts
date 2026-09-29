import { Task } from "../models/Task";

export class TaskService {
  constructor(private tasks: Task[]) {}

  getTasksByCourse(courseId: string) {
    return this.tasks.filter(t => t.courseId === courseId);
  }

  getCompletedStudents(taskId: string) {
    const task = this.tasks.find(t => t.id === taskId);
    return task?.completedStudentIds ?? [];
  }
}