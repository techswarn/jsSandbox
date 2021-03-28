//Application role

// var user = "testprep";

// switch (user) {
//   case "admin":
//     console.log("Full access");
//     break;
//   case "subadmin":
//     console.log("Create/Delete courses");
//     break;
//   case "testprep":
//     console.log("Create test");
//     break;
//   default:
//     console.log("Only able to view content");
// }

var role = "sub admin";

switch (role) {
  case "admin":
    console.log(`full access`);
    break;
  case "sub admin":
    console.log(`partial access`);
    break;
  case "testprep":
    console.log(`test access`);
    break;
  default:
    console.log(`view access`);
}
