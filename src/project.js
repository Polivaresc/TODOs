import { displayPage } from "./views"

let projects = [{id: 0, title: 'default', description: '', todos: []}]
let currentProjectId = 0

class Project {
    constructor (title, description) {
        this.id = Math.max(...projects.map(project => project.id))+1
        this.title = title
        this.description = description
        this.todos = []
    }
}

function persistProjects() {
    localStorage.setItem('allProjects', JSON.stringify(projects))
}

function retrieveProjects() {
    projects = JSON.parse(localStorage.getItem('allProjects')) ?? projects
}

function addProject(project) {
    projects.push(project)
    persistProjects()
}

function getAllProjects() {
    retrieveProjects()
    return projects
}

function getCurrentProject() {
    return projects.find(p => p.id === currentProjectId)
}

function setCurrentProject(project) {
    currentProjectId = project.id
}

function addTodo(projectId, todo) {
    projects.find(p => p.id === projectId).todos.push(todo)
    persistProjects()
}

function deleteProject() {
    const currentProject = getCurrentProject()
    const index = projects.indexOf(currentProject)
    projects.splice(index, 1)
    persistProjects()
}

function getTodo(todoId) {
    const project = getCurrentProject()
    console.log(project.todos)
    const index = projects.indexOf(project)
    const todo = projects[index].todos.find(t => t.id === parseInt(todoId))
    console.log(parseInt(todoId))
    console.log(todo)
    return todo
}

function deleteTodo(todoId) {
    const currentProject = getCurrentProject()
    const todosArray = currentProject.todos
    const todo = todosArray.find(t => t.id === parseInt(todoId))
    const index = todosArray.indexOf(todo)
    todosArray.splice(index, 1)
    persistProjects()
}


function updateTodo() {
    persistProjects()
    displayPage()
}

export { addProject, deleteProject, Project, addTodo, getCurrentProject, setCurrentProject, getAllProjects, getTodo, deleteTodo, updateTodo }