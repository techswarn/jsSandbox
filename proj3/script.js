// const courses = [
//   {
//     name: "AngularJS",
//     price: "$10.1",
//   },
//   {
//     name: "ReactJS",
//     price: "$10.9",
//   },
//   {
//     name: "Python",
//     price: "$8.1",
//   },
//   {
//     name: "Ruby on rails",
//     price: "$14.1",
//   },
//   {
//     name: "NODE js course",
//     price: "$0.1",
//   },
// ];

// // Selecting elements in DOM
// console.log("courses");
// function generateList() {
//   const ul = document.querySelector(".list-group");
//   ul.innerHTML = " ";
//   courses.forEach((course) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");

//     const name = document.createTextNode(course.name);
//     li.appendChild(name);

//     const span = document.createElement("span");
//     span.classList.add("float-right");

//     const price = document.createTextNode(course.price);
//     span.appendChild(price);

//     li.appendChild(span);
//     ul.appendChild(li);
//   });
// }

// // window.addEventListener("load", generateList);

// const button = document.querySelector(".sort-btn");

// button.addEventListener("click", () => {
//   courses.sort((a, b) => a.price - b.price);
//   generateList();
// });

const tasks = ["walk", "run", "sleep", "drink", "dance"];

function generateList() {
  const list = document.createElement("li");
  console.log(list);

  tasks.forEach((task) => {
    const name = document.createTextNode(task);
    list.appendChild(name);

    const data = document.getElementById("data");
    data.appendChild(list);
  });
}

generateList();
