let todoArr = []
const todoContainer = document.querySelector("#container")
const createInput = document.querySelector("#create-input")
const createBtn = document.querySelector("#create-btn")
const clearBtn = document.querySelector("#clear-btn")
let savedItem = JSON.parse(localStorage.getItem("todo"))
todoArr = savedItem || []
function render(){
    let todoList = todoArr.map(todo =>`
        <div class="todo">
            <input data-index="${todo.id}" type="checkbox" id="checkbox-${todo.id}" ${todo.isCompleted ? "checked": ""} 
            onclick="updateCheckbox()" class="checkbox">
            <label for="checkbox-${todo.id}">${todo.text}</label>
            <button data-index="${todo.id}" id="delete btn-${todo.id}" onclick ="deleteBtn()" 
            class="js-button">Delete</button>
            <button data-index="${todo.id}"id="edit btn-${todo.id}" onclick="editBtn(id)"
            class="js-button">Edit</button>
        </div>
    `)
    todoContainer.innerHTML = todoList.join(" ")
    localStorage.setItem("todo", JSON.stringify(todoArr))
} 
createBtn.addEventListener("click", function(){
    if (!createInput.value) return 
    newtodo = {text:createInput.value, isCompleted: false, id:todoArr.length}
    let todoItem = todoArr.push(newtodo)
    render()
    createInput.value = ""
})
function updateCheckbox(){
    console.log(event.target.dataset.index)
    id = event.target.dataset.index
    oldTodo = todoArr[id]
    updatedTodo = {text:oldTodo.text, isCompleted:!oldTodo.isCompleted, id:oldTodo.id}
    todoArr[id] = updatedTodo
    console.log(todoArr[id],todoArr)
    render()
}
function deleteBtn(){
    id = event.target.dataset.index
    console.log(id)
    let dlt = todoArr.filter(todo => todo.id != id)
    todoArr = dlt.map((todo, i) => ({...todo, id:i}))
    render()
}
function editBtn(){
    id = event.target.dataset.index
    console.log(id)
    createInput.value = todoArr[id].text
    deleteBtn()
}
clearBtn.addEventListener("click",function(){
    todoArr = []
    savedItem = todoArr
    render()

})
render()