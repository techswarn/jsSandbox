/*
Define a function that can answer the role of a user
A user can be of following roles:
admin- with full access
subadmin- with access to create and delete courses
testprep- with access to create and delete test
user- consume all content
other- trial user
Input - getUserRole(name, role)
*/

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} has full access`;
      break;
    case "subadmin":
      return `${name} has access to create and delete course`;
      break;
    case "testprep":
      return `${name} has access to delete and create test`;
      break;
    case "user":
      return `${name} has access to consume content`;
      break;
    case "other":
      return `${name} is a trial user`;
      break;
    default:
      return `invalid role`;
  }
}

console.log(getUserRole("Swarn", "testprep"));
