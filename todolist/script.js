const inputtdl = document.querySelector(".textarea");
const buttontdl = document.querySelector(".buttoninput");
const listtdl = document.querySelector(".todolist");

function clickButton(x) {
  x.preventDefault();
  addTodo();
}
function addTodo() {
  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === "") return;

  const checkbutton = document.createElement("button");
  checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkbutton.classList.add("check-button");
  itemall.appendChild(checkbutton);

  const bin = document.createElement("button");
  bin.innerHTML = '<i class="fa-solid fa-trash"></i>';
  bin.classList.add("bin-button");
  itemall.appendChild(bin);

  listtdl.appendChild(itemall);
  inputtdl.value = "";
}
function del(e) {
  const item = e.target;
  if (item.classList[0] === "check-button") {
    const todolist = item.parentElement;
    todolist.classList.toggle("checklist");
  }
  if (item.classList[0] === "bin-button") {
    const todolist = item.parentElement;
    todolist.remove();
  }
}
buttontdl.addEventListener("click", clickButton);
listtdl.addEventListener("click", del);
