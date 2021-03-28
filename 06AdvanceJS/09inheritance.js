class User1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrolledCourses(name) {
    this.courseList.push(name);
  }
  static getCourseList() {
    return this.courseList;
  }
}

class User2 extends User1 {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return `I'm admin`;
  }
}

const suraj = new User2("suraj", "suraj@test.com");

console.log(suraj.getInfo());
