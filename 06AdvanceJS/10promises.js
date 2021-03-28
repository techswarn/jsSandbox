const func1 = () => {
  return "Post one";
};

// const func2 = async () => {
//   setTimeout(() => {
//     return "Post two";
//   }, 300);
// };

const func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I got the result");
    }, 300);
  });
};

const func3 = () => {
  return "post three";
};

const run = async () => {
  let result1 = func1();
  console.log(result1);
  let result2 = await func2();
  console.log(result2);
  let result3 = func3();
  console.log(result3);
};

run();
