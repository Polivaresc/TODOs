import { projects } from "./project"

function showProjectForm() {
    const newProject = document.querySelector('.new-project')
    const projectForm = document.querySelector('#project-form')

    newProject.addEventListener('click', () => {
        projectForm.style.display = 'grid'
    })

    const cancelProject = document.querySelector('#cancel-project')

    cancelProject.addEventListener('click', () => {
        projectForm.style.display = 'none'
    })
}

function showTodoForm(newTodoButton) {
    const todoForm = document.querySelector('#todo-form')
    
    newTodoButton.addEventListener('click', () => {
        todoForm.style.display = 'grid'
    })

    const cancelTodo = document.querySelector('#cancel-todo')

    cancelTodo.addEventListener('click', () => {
        todoForm.style.display = 'none'
    })
}

function updateMenu() {
    const projectsList = document.querySelector('.projects-list')
    projectsList.innerHTML = ''
    
    projects.forEach(p => {
        const listProject = document.createElement('li')
        const id = projects.indexOf(p)
        listProject.setAttribute('id', id)
        listProject.classList.add('menu-project')
        listProject.textContent = p.title
        projectsList.append(listProject)
    })
}

function showProject() {
    const allProjects = document.querySelector('.projects-list').childNodes 

    // if (allProjects.length > 1) {
        allProjects.forEach(p => {
            p.addEventListener('click', () => {
                const project = projects[p.id]
                createProjectPage(project)
            })
        })
    // } else {
    //     console.log('hjs')
    //     const project = projects[0]
    //     createProjectPage(project)
    // }
}

function createProjectPage(project) {

    const projectPage = document.querySelector('#project-page')
    projectPage.innerHTML = ''

    const title = document.createElement('h1')
    title.textContent = project.title

    const newTodoButton = document.createElement('button')
    newTodoButton.textContent = '+'
    newTodoButton.classList.add('new-todo')

    const description = document.createElement('p')
    description.textContent = project.description

    const todoList = document.createElement('ul')
    todoList.setAttribute('id', 'todo-list')

    if (!project.todos) {
        project.todos.forEach(t => {
            const todo = document.createElement('li')
            todo.textContent = t
            todoList.appendChild(todo)
        })
    } else {
        const noTodos = document.createElement('li')
        noTodos.textContent = 'This project does not have todos yet'
        todoList.appendChild(noTodos)
    }

    projectPage.append(title, description, newTodoButton, todoList)
    showTodoForm(newTodoButton)
}

function updateProject(project) {
    const todoList = document.querySelector('#todo-list')
    todoList.innerHTML = ''

    project.todos.forEach(t => {
        const listEntry = document.createElement('li')
        listEntry.textContent = t.title
        todoList.appendChild(listEntry)
    })
}

export {showProjectForm, updateMenu, showProject, updateProject}