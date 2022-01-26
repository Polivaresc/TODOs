import Todo from "./todo"
import { Project, projects, addTodo, addProject } from "./project"
import { Datepicker } from 'vanillajs-datepicker';
import { sub } from "date-fns";

function showProjectForm() {
    const projectForm = document.querySelector('#project-form')
    const newProjectButton = document.querySelector('.new-project')
    newProjectButton.addEventListener('click', () => {
        projectForm.style.display = 'grid'
    })
}


function createProject() {
    const projectForm = document.querySelector('#project-form')

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#project-title').value
        const description = document.querySelector('#project-description').value

        const project = new Project(title, description)

        addProject(project)
        updateMenu()
        createProjectPage()
    })  
}

function updateMenu() {
    const projectsList = document.querySelector('.projects-list')
    projectsList.innerHTML = ''

    projects.forEach(p => {
        const newProject = document.createElement('li')
        newProject.setAttribute('id', p.title)
        newProject.setAttribute('class', 'menu-project')
        newProject.textContent = p.title

        projectsList.appendChild(newProject)
    })
}

function createProjectPage() {
    const pageSection = document.querySelector('#page-section')
    pageSection.innerHTML = ''

    projects.forEach(p => {
        const projectPage = document.createElement('div')
        projectPage.setAttribute('id', p.title + '-page')
        projectPage.setAttribute('class', 'project-page')

        const title = document.createElement('h1')
        title.textContent = p.title

        const newTodoButton = document.createElement('button')
        newTodoButton.textContent = '+'
        newTodoButton.classList.add('new-todo')

        const description = document.createElement('p')
        description.textContent = p.description

        const todoList = document.createElement('ul')
        todoList.setAttribute('id', 'todo-list')

        pageSection.appendChild(projectPage)
    }) 
}

function showProjectPage() {
    const projectsList = document.querySelectorAll('.menu-project')
    const pageSection = document.querySelectorAll('.project-page')

    projectsList.forEach(pl => {
        
        pl.addEventListener('click', () => {
            
            const pageId = pl.getAttribute('id') + '-page'
            const currentPage = pageSection.find(page => page.getAttribute('id') === pageId)

            currentPage.style.display = 'flex'
        })
    })
}

export { showProjectForm, createProject, updateMenu, showProjectPage}


// function showProjectForm() {
//     const newProject = document.querySelector('.new-project')
//     const projectForm = document.querySelector('#project-form')

//     newProject.addEventListener('click', () => {
//         projectForm.style.display = 'grid'
//     })

//     const cancelProject = document.querySelector('#cancel-project')

//     cancelProject.addEventListener('click', () => {
//         projectForm.style.display = 'none'
//     })
// }

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

// function updateMenu() {
//     const projectsList = document.querySelector('.projects-list')
//     projectsList.innerHTML = ''
    
//     projects.forEach(p => {
//         const listProject = document.createElement('li')
//         const id = projects.indexOf(p)
//         listProject.setAttribute('id', id)
//         listProject.classList.add('menu-project')
//         listProject.textContent = p.title
//         projectsList.append(listProject)
//     })
// }

// function showProject() {
//     const allProjects = document.querySelector('.projects-list').childNodes 

//     // if (allProjects.length > 1) {
//         allProjects.forEach(p => {
//             p.addEventListener('click', () => {
//                 const project = projects[p.id]
//                 createProjectPage(project)
//             })
//         })
//     // } else {
//     //     console.log('hjs')
//     //     const project = projects[0]
//     //     createProjectPage(project)
//     // }
// }

// function createProjectPage(project) {

//     const projectPage = document.querySelector('#project-page')
//     projectPage.innerHTML = ''

//     const title = document.createElement('h1')
//     title.textContent = project.title

//     const newTodoButton = document.createElement('button')
//     newTodoButton.textContent = '+'
//     newTodoButton.classList.add('new-todo')

//     const description = document.createElement('p')
//     description.textContent = project.description

//     const todoList = document.createElement('ul')
//     todoList.setAttribute('id', 'todo-list')

//     if (!project.todos) {
//         project.todos.forEach(t => {
//             const todo = document.createElement('li')
//             todo.textContent = t
//             todoList.appendChild(todo)
//         })
//     } else {
//         const noTodos = document.createElement('li')
//         noTodos.textContent = 'This project does not have todos yet'
//         todoList.appendChild(noTodos)
//     }

//     projectPage.append(title, description, newTodoButton, todoList)
//     showTodoForm(newTodoButton)
// }

// function updateProject(project) {
//     const todoList = document.querySelector('#todo-list')
//     todoList.innerHTML = ''

//     project.todos.forEach(t => {
//         const listEntry = document.createElement('li')
//         listEntry.textContent = t.title
//         todoList.appendChild(listEntry)
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


//     const projectForm = document.querySelector('#project-form')
//     projectForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//         projectForm.style.display = 'none'

//         const title = document.querySelector('#project-title').value
//         const description = document.querySelector('#project-description').value

//         const project = new Project(title, description)

//         addProject(project)
//         showProject()
//     })
// }
