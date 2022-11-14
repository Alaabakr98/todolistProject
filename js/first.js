var todoItem = document.getElementById("todoItem");
var btnAdd = document.getElementById("add");
var todoContainer = document.getElementById("todo-container");
var todopPrag = document.getElementById("todo-prag");
var btnUpdate = document.getElementById("update");
var btn = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var currentindex = "";
if (JSON.parse(localStorage.getItem("items")) == null) {
    todoArray = [];
} else {

    todoArray = JSON.parse(localStorage.getItem("items"));
    displayitem();
}


btnAdd.onclick = function () {
    if (todoItem.value.trim() != 0) {
        additem();
        displayitem();
        clearList()
    }
}
btnUpdate.onclick = function () {
    if (todoItem.value.trim() != 0) {
        updatelist()
    }
}
function additem() {
    var item = {
        name: todoItem.value
    }
    todoArray.push(item)
    localStorage.setItem("items", JSON.stringify(todoArray))


    console.log("yes")
}

function displayitem() {
    cartonaa = "";
    for (var i = 0; i < todoArray.length; i++) {
        cartonaa += `<div class="item-todo " onclick="addupdatelist(${i})">
<p>${todoArray[i].name}</p>

<i class="fa-sharp fa-solid fa-trash icon  icon2" onclick="clearitem(${i})"></i>
</div>
`
    }

    todoContainer.innerHTML = cartonaa;
    todopPrag.innerHTML = `<p class="prag"> you have ${i} pending task</p>
    <button class="btn " onclick="clearAll()"> Clear All</button>
`


}
function addupdatelist(index) {
    currentindex = index;
    var item = todoArray[index];
    todoItem.value = item.name;

}
function updatelist() {

    var item = {
        name: todoItem.value
    }
    todoArray[currentindex].name = todoItem.value;
    localStorage.setItem("items", JSON.stringify(todoArray))
    displayitem()
    clearList()
}


function clearList() {
    todoItem.value = "";
}
function clearitem(index) {
    todoArray.splice(index, 1);
    displayitem();
    localStorage.setItem("items", JSON.stringify(todoArray))
}
function clearAll() {
    todoArray = [];
    displayitem();
    localStorage.setItem("items", JSON.stringify(todoArray))
}

