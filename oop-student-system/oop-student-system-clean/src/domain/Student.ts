import { Person } from "./Person.js";

export class Student extends Person {
  public courses: string[] = [];

  constructor(id: string, name: string, age: number) {
    super(id, name, age);
  }
}