const items = document.querySelector("#items");
const list = document.querySelector("#list");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");
const finishedBtn = document.querySelector("#finished");
const total = document.querySelector("#total");

let count = 0;

function addItem() {
    if (items.value !== "") {
      const newItem = document.createElement("li");
      const textNode = document.createTextNode(items.value);
      newItem.appendChild(textNode);
      newItem.addEventListener("click", markFinished); 
      list.appendChild(newItem);
      items.value = "";
      count++;
      total.innerText = `Total: ${count}`;
    }
  }

function clearAll() {
  list.innerHTML = "";
  count = 0;
  total.innerText = `Total: ${count}`;
}

function markFinished(event) {
    const items = list.querySelectorAll("li");
    items.forEach((item) => {
      item.classList.add("finished");
    });
    list.innerHTML = "";
    count = 0;
    total.innerText = `Total: ${count}`;
  }

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);
finishedBtn.addEventListener("click", markFinished);
