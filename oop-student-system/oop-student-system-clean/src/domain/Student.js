import { Person } from "./Person.js";
export class Student extends Person {
    constructor(id, name, age) {
        super(id, name, age);
        this.courses = [];
    }
}
