const task = document.querySelector("#task");
const submit = document.querySelector("#button");
const table = document.querySelector(".list");

submit.addEventListener("click", addTask);

function addTask(e) {
  if (task.value === "") {
    alert("Please add item");
  } else {
    let output = task.value;
    console.log(task.value);
    const list = document.createElement("li");
    list.textContent = output;
    console.log(list);
    table.appendChild(list);
  }

  e.preventDefault();
}
