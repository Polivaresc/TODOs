import Todo from "./todo"
import { addProject, deleteProject, Project, addTodo, setCurrentProject, getCurrentProject, getTodo } from "./project"
import { Datepicker } from 'vanillajs-datepicker';
import { sub } from "date-fns";
import { displayMenu, displayPage, showProjectForm, showProjectPage, showTodoForm } from "./views";

function projectListeners() {
    const newProjectButton = document.querySelector('.new-project')
    newProjectButton.addEventListener('click', showProjectForm)

    const cancelProject = document.querySelector('#cancel-project')
    cancelProject.addEventListener('click', showProjectPage)

    const projectForm = document.querySelector('#project-form')
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('input[name=project-title]').value
        const description = document.querySelector('input[name=project-description]').value

        const project = new Project(title, description)

        addProject(project)
        setCurrentProject(project)
        displayMenu()
        displayPage()
    })

    const modal = document.querySelector('.modal-overlay')
    const modalTitle = document.querySelector('#modal-title')

    const deleteButton = document.querySelector('.delete-project')
    deleteButton.addEventListener('click', () => {
        const currentProject = getCurrentProject()
        modalTitle.textContent = currentProject.title + '?'
        modal.style.display = 'flex'
    })

    const noDelete = document.querySelector('.no-button')
    noDelete.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    const yesDelete = document.querySelector('.yes-button')
    yesDelete.addEventListener('click', () => {
        deleteProject()
        modal.style.display = 'none'
        location.reload()
    })
}

function todoListeners() {
    const newTodoButton = document.querySelector('.new-todo')
    newTodoButton.addEventListener('click', showTodoForm)

    const cancelTodo = document.querySelector('#cancel-todo')
    cancelTodo.addEventListener('click', showProjectPage)

    const date = document.querySelector('#todo-dueDate')
    new Datepicker(date)

    const todoForm = document.querySelector('#todo-form')
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#todo-title').value
        const description = document.querySelector('#todo-description').value
        const dueDate = date.value
        const priority = document.querySelector('#todo-priority').checked
        const id = setTodoId()

        console.log(id)

        const todo = new Todo(id, title, description, dueDate, priority)

        console.log(todo)
        
        const currentProject = getCurrentProject()
        const currentProjectId = currentProject.id

        addTodo(currentProjectId, todo)
        displayPage()
    })
}

function changePriority(e) {
    const icon = e.target
    const todoId = icon.getAttribute('todo-id')
    const todo = getTodo(todoId)
    todo.priority = !todo.priority
}

function changeStatus(e) {
    const icon = e.target
    const todoId = icon.getAttribute('todo-id')
    const todo = getTodo(todoId)
    todo.status = !todo.status
}

function setTodoId() {
    const idInput = document.querySelector('#todo-id')

    const currentProject = getCurrentProject()
    const todosArray = currentProject.todos

    todosArray.forEach(t => {
        if(isNaN(t.id)) {
            t.id = 0
        }
    })

    idInput.value = Math.max(...todosArray.map(t => t.id))+1
    
    return idInput.value
}


export { projectListeners, todoListeners, changePriority, changeStatus }
