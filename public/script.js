function toggleStrikeThrough(checkbox) {
  const textSpan = checkbox.nextElementSibling.querySelector("#todo-text");
  if (checkbox.checked) {
    textSpan.classList.add("checked");
  } else {
    textSpan.classList.remove("checked");
  }
}

const handleEditToogle = (event, i) => {
  event.preventDefault();
  const listOfTodo = document.querySelectorAll("li #todo-text");
  const targetedTodoList = listOfTodo[i];
  console.log(targetedTodoList)
  if (targetedTodoList) {
    targetedTodoList.classList.add("hide");
  }
};
