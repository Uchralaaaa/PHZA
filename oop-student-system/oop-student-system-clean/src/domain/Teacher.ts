import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(
    id: string,
    name: string,
    age: number,
    public subject: string
  ) {
    super(id, name, age);
  }
}