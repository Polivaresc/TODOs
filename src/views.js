import { getAllProjects, getCurrentProject, setCurrentProject } from "./project"
import { changePriority, changeStatus } from "./handler"

function showProjectForm() {
    clearForms()
    document.querySelector('#project-form').style.display = 'grid'
    document.querySelector('#todo-form').style.display = 'none'
    document.querySelector('#project-page').style.display = 'none'   
}

function showProjectPage() {
    document.querySelector('#project-form').style.display = 'none'
    document.querySelector('#todo-form').style.display = 'none'
    document.querySelector('#project-page').style.display = 'block'
}

function displayMenu() {
    const projectsList = document.querySelector('.projects-list')
    projectsList.innerHTML = ''

    const projects = getAllProjects()

    projects.forEach(p => {
        const newProject = document.createElement('li')
        newProject.setAttribute('project-id', p.id)
        newProject.setAttribute('class', 'menu-project')
        newProject.textContent = p.title
        newProject.addEventListener('click', function() {
            setCurrentProject(p)
            displayPage()
        })
        projectsList.appendChild(newProject)
        
    })
    
}

function displayPage() {
    const projectTitle = document.querySelector('#project-title')
    const projectDescription = document.querySelector('#project-description')
    const projectTodos = document.querySelector('#project-todos')

    const currentProject = getCurrentProject()

    projectTitle.textContent = currentProject.title
    projectDescription.textContent = currentProject.description
    projectTodos.innerHTML = ''

    currentProject.todos.forEach(todo => {
        displayTodos(todo, projectTodos)
    })
    showProjectPage()
    markCurrentProject(currentProject)
}

function showTodoForm() {
    clearForms()
    document.querySelector('#todo-form').style.display = 'grid'
}

function markCurrentProject(currentProject) {
    const projectsList = document.querySelector('.projects-list').childNodes
    projectsList.forEach(p => p.classList.remove('selected-project'))

    const currentPage = Array.from(projectsList).find(p => parseInt(p.getAttribute('project-id')) === currentProject.id)
    currentPage.classList.add('selected-project')
}

function clearForms() {
    document.querySelectorAll('input').forEach(i => i.value = '')
    document.getElementById('todo-priority').checked = false
}

function displayTodos(todo, projectTodos) {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-item')

    const title = document.createElement('span')
    title.textContent = todo.title
    title.addEventListener('click', showTodo)

    const date = document.createElement('span')
    date.textContent = todo.dueDate
    date.setAttribute('class', 'date')

    const priorityIcon = document.createElement('i')
    if (todo.priority) {
        priorityIcon.setAttribute('class', 'fas fa-star priority')
    } else {
        priorityIcon.setAttribute('class', 'far fa-star priority')
    }
    priorityIcon.setAttribute('todo-id', todo.id)
    priorityIcon.addEventListener('click', changePriority)

    const statusIcon = document.createElement('i')
    if (todo.status) {
        statusIcon.setAttribute('class', 'fas fa-check-square check')
        title.style['text-decoration'] = 'line-through'
    } else {
        statusIcon.setAttribute('class', 'far fa-square check')
        title.style['text-decoration'] = 'none'
    }
    statusIcon.setAttribute('todo-id', todo.id)
    statusIcon.addEventListener('click', changeStatus)


    li.append(priorityIcon, statusIcon, title, date)
    projectTodos.appendChild(li)
}

function showEditTodo(title, description, date, priority) {
    document.querySelector('#todo-form').style.display = 'grid'
    document.querySelectorAll('input').disabled = true
}

function showTodo(todo) {
    
    const title = document.querySelector('#todo-title').value = todo.title

    const description = document.querySelector('#todo-description').value = todo.description

    const date = document.querySelector('#todo-dueDate').value = todo.dueDate
   
    const priority = document.querySelector('#todo-priority').checked = todo.priority

    showEditTodo(title, description, date, priority)
    
}




export { showProjectForm, showProjectPage, displayMenu, displayPage, showTodoForm }