import { Person } from "./Person.js";
export class Teacher extends Person {
    constructor(id, name, age, subject) {
        super(id, name, age);
        this.subject = subject;
    }
}
