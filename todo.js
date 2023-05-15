let todoArr = []
const todoContainer = document.querySelector("#container")
const createInput = document.querySelector("#create-input")
const createBtn = document.querySelector("#create-btn")
const clearBtn = document.querySelector("#clear-btn")
let savedItem = JSON.parse(localStorage.getItem("todo"))
todoArr = savedItem
function render(){
    let todoList = todoArr.map(todo =>`
        <div class="todo">
            <input type="checkbox" id=${todo.id} ${todo.isCompleted ? "checked": ""} 
            onclick="updateCheckbox(id)">
            <label for=${todo.id}>${todo.text}</label>
            <button  id=${todo.id} onclick ="deleteBtn(id)" >delete</button>
            <button id=${todo.id} onclick="editBtn(id)">edit</button>
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
function updateCheckbox(id){
    oldTodo = todoArr[id]
    updatedTodo = {text:oldTodo.text, isCompleted:!oldTodo.isCompleted, id:oldTodo.id}
    todoArr[id] = updatedTodo
    console.log(todoArr[id],todoArr)
    render()
}
function deleteBtn(id){
    let dlt = todoArr.filter(todo => todo.id != id)
    todoArr = dlt.map((todo, i) => ({...todo, id:i}))
    render()
}
function editBtn(id){
    createInput.value = todoArr[id].text
    deleteBtn(id)
}
clearBtn.addEventListener("click",function(){
    todoArr = []
    savedItem = todoArr
    render()

})