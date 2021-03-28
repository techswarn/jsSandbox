//synchronous code

// var posts = [
//   { title: "Post one", body: "This is post number 1" },
//   { title: "Post two", body: "This is post number 2" },
// ];

// function createPosts(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `${post.title}`;
//     });
//     console.log(output);
//   }, 1000);
// }

// createPosts({ title: "Post one", body: "This is post number 1" });
// getPosts();

//Asynchronous code

// var posts = [
//   { title: "Post one", body: "This is post number 1" },
//   { title: "Post two", body: "This is post number 2" },
// ];

// function createPosts(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `${post.title}`;
//     });
//     console.log(output);
//   }, 1000);
// }

// createPosts({ title: "Post three", body: "This is post number 1" }, getPosts);

//Promises

var posts = [
  { title: "Post one", body: "This is post number 1" },
  { title: "Post two", body: "This is post number 2" },
];

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `${post.title}`;
    });
    console.log(output);
  }, 1000);
}

createPosts({ title: "Post three", body: "This is post number 1" }).then(
  getPosts
);
