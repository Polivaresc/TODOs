import Todo from "./todo"
import { addProject, deleteProject, Project, addTodo, setCurrentProject, getCurrentProject } from "./project"
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

        const todo = new Todo(title, description, dueDate, priority)
        
        const currentProject = getCurrentProject()
        const currentProjectId = currentProject.id

        addTodo(currentProjectId, todo)
        displayPage()
    })


    // const priorityIcons = document.querySelectorAll('.priority-icon')
    
    // const statusIcons = document.querySelectorAll('.status-icon')
}


export { projectListeners, todoListeners }
