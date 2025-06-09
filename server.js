const express = require("express");

const app = express();

let todoListArray = [];

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { list: todoListArray });
});

app.post("/", (req, res) => {
  const enteredText = req.body["todo-entry"];
  if (enteredText?.length) {
    todoListArray.push(enteredText);
    res.redirect("/");
  }
});

app.post("/editTodo", (req, res) => {
  const todoid = req.body["todo_id"];
  const updatedText = req.body["edit_input"];
  todoListArray[todoid] = updatedText;
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const dataToDelete = req.body["todo_id"];
  todoListArray.splice(dataToDelete, 1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server started");
});
