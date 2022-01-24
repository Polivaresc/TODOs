import Todo from "./todo"
import { addProject, Project } from "./project"
import { Datepicker } from 'vanillajs-datepicker';

export default function eventHandler() {
    const date = document.querySelector('#todo-dueDate')
    const datepicker = new Datepicker(date)

    const todoForm = document.querySelector('#todo-form')

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#todo-title').value
        const description = document.querySelector('#todo-description').value
        const dueDate = datepicker.value
        const priority = document.querySelector('#todo-priority').value
        const project = document.querySelector('#todo-project').value

        const todo = new Todo(title, description, dueDate, priority)
        // addTodo(project, todo)
    })   

    const projectForm = document.querySelector('#project-form')

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#project-title').value
        const description = document.querySelector('#project-description').value

        const project = new Project(title, description)
        console.log(project)
        addProject(project)
    })
}
