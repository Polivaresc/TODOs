import { getAllProjects, getCurrentProject, setCurrentProject } from "./project"
import { changeStatus, changePriority, editTodo} from "./handler"

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
        displayTodo(todo, projectTodos)
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

function displayTodo(todo, projectTodos) {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-item')
    li.setAttribute('todo-id', todo.id)

    const title = document.createElement('span')
    title.textContent = todo.title
    title.setAttribute('class', 'title')

    const description = document.createElement('span')
    description.textContent = todo.description
    description.setAttribute('class', 'description')

    const date = document.createElement('span')
    date.textContent = todo.dueDate
    date.setAttribute('class', 'date')

    const priorityIcon = document.createElement('i')
    const priority = document.createElement('span')
    priority.appendChild(priorityIcon)
    priority.addEventListener('click', changePriority)
    if (todo.priority) {
        priorityIcon.classList = 'fas fa-star priority'
    } else {
        priorityIcon.classList = 'far fa-star priority'
    }
    
    const statusIcon = document.createElement('i')
    const status = document.createElement('span')
    status.appendChild(statusIcon)
    status.addEventListener('click', changeStatus)
    if (todo.status) {
        statusIcon.setAttribute('class', 'fas fa-check-square check')
        title.style['text-decoration'] = 'line-through'
    } else {
        statusIcon.setAttribute('class', 'far fa-square check')
        title.style['text-decoration'] = 'none'
    }

    const editIcon = document.createElement('i')
    editIcon.setAttribute('class', 'far fa-edit edit-icon')
    const edit = document.createElement('span')
    edit.appendChild(editIcon)
    edit.addEventListener('click', editTodo)
   
    li.append(priority, status, edit, date, title, description)
    projectTodos.appendChild(li)
}



export { showProjectForm, showProjectPage, displayMenu, displayPage, showTodoForm }