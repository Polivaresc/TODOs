import Todo from "./todo"
import { addProject, Project, addTodo, setCurrentProject } from "./project"
import { Datepicker } from 'vanillajs-datepicker';
import { sub } from "date-fns";
import { displayMenu, displayPage, showProjectForm, showProjectPage } from "./views";

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
}

export { projectListeners }


// function showTodoForm(newTodoButton) {
//     const todoForm = document.querySelector('#todo-form')
    
//     newTodoButton.addEventListener('click', () => {
//         todoForm.style.display = 'grid'
//     })

//     const cancelTodo = document.querySelector('#cancel-todo')

//     cancelTodo.addEventListener('click', () => {
//         todoForm.style.display = 'none'
//     })
// }

// export default function eventHandler() {
//     const date = document.querySelector('#todo-dueDate')
//     const datepicker = new Datepicker(date)


//     const todoForm = document.querySelector('#todo-form')
//     todoForm.addEventListener('submit', (e) => {
//         e.preventDefault()

//         const title = document.querySelector('#todo-title').value
//         const description = document.querySelector('#todo-description').value
//         const dueDate = datepicker.value
//         const priority = document.querySelector('#todo-priority').checked

//         const todo = new Todo(title, description, dueDate, priority)

//         const projectsList = document.querySelector('.projects-list').childNodes 
//         console.log(projectsList)  
//         projectsList.forEach(p => {
//             const id = p.getAttribute('id')
//             const project = projects[id]
//             addTodo(project.title, todo)
//             updateProject(project)
//         })
//     })   
// }
