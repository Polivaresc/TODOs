import todoFactory from "./todo-item"
import { addTodo } from "./todo-project"

export default function getData() {

    const todoForm = document.querySelector('#todo-form')

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#todo-title').value
        const description = document.querySelector('#todo-description').value
        const dueDate = document.querySelector('#todo-dueDate').value
        const priority = document.querySelector('#todo-priority').value
        const project = document.querySelector('#todo-project').value

        const todo = todoFactory(title, description, dueDate, priority)
        addTodo(project, todo)
    })   
}
