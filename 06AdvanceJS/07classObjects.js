const User = require("./06class");

const swarn = new User("Swarn", "tech@swarn.dev");
console.log(swarn.getInfo());
swarn.enrolledCourses("React js");
swarn.enrolledCourses("Angular");
console.log(swarn.getCourseList());

let courses = swarn.getCourseList();
courses.forEach((course) => console.log(`Course is ${course}`));
