export class Task {
  public completedStudentIds: string[] = [];

  constructor(
    public id: string,
    public title: string,
    public courseId: string
  ) {}

  submit(studentId: string) {
    this.completedStudentIds.push(studentId);
  }
}