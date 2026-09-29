import { Teacher } from "../domain/Teacher.js";

export class TeacherService {
  constructor(private teachers: Teacher[]) {}

  getTeacherById(id: string) {
    return this.teachers.find(t => t.id === id);
  }
}