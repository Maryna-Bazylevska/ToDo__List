const taskList = document.querySelector(".list");
const addButton = document.querySelector(".button");
const textInput = document.querySelector("#todo_input");
addButton.addEventListener("click", function () {
  const taskText = textInput.value.trim();
  const itemEl = document.createElement("li");
  if (taskText === "") {
    alert("Plese, enter a text!");
  } else {
    itemEl.innerHTML = `
        <div class="item-container">
        <li class="list-item">${taskText}</li>
        <button type="button" class="remove-button"></button>
        </div>
        `;
    taskList.appendChild(itemEl);
    textInput.value = "";
  }
  itemEl.querySelector(".remove-button").addEventListener("click", function () {
    taskList.removeChild(itemEl);
  });
});
