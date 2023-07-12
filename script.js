let todoIdArr = [];
function addTodo() {
    let textBox = document.getElementById("todoStr");
    if (textBox.value == "") return;
    let element = document.createElement("div");
    let id = "todoItemNo" + todoIdArr.length;
    element.setAttribute("id", id);
    todoIdArr.push(id);
    // element.innerText = textBox.value;
    element.innerHTML =
        textBox.value +
        "<button onclick= \'document.getElementById(\"" + id + "\").remove();todoIdArr.splice(todoIdArr.indexOf(\"" + id + "\"),1);\'>Remove this Item</button>";
    document.body.appendChild(element);
    textBox.value = "";
}
function resetToDoList() {
    for (let i = todoIdArr.length - 1; i >= 0; i--)
        document.getElementById(todoIdArr[i]).remove();
    todoIdArr = [];
}
function getTodoArr() {
    let todoArr = [];
    todoIdArr.forEach((e) => {
        let todoItem = document.getElementById(e).innerText;
        todoArr.push(todoItem.substring(0, todoItem.length - 16));
    });
    return todoArr;
}
document
    .getElementById("addTodoBtn")
    .setAttribute("onclick", "addTodo()");
document
    .getElementById("todoStr")
    .setAttribute("onkeypress", "if(event.key == 'Enter') addTodo()");
document
    .getElementById("resetTodoBtn")
    .setAttribute("onclick", "resetToDoList()");
