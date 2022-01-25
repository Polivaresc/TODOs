import Todo from "./todo"
import { addProject, Project, projects, addTodo } from "./project"
import { updateProject, showProject } from "./views";
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
        const priority = document.querySelector('#todo-priority').checked

        const todo = new Todo(title, description, dueDate, priority)

        const projectsList = document.querySelector('.projects-list').childNodes 
        console.log(projectsList)  
        projectsList.forEach(p => {
            const id = p.getAttribute('id')
            const project = projects[id]
            addTodo(project.title, todo)
            updateProject(project)
        })
    })   


    const projectForm = document.querySelector('#project-form')
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        projectForm.style.display = 'none'

        const title = document.querySelector('#project-title').value
        const description = document.querySelector('#project-description').value

        const project = new Project(title, description)

        addProject(project)
        showProject()
    })
}
