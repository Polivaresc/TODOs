let projects = [{id: 0, title: 'default', description: '', todos: [{title: 'todo1'}]}]
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

function addTodo(projectTitle, todo) {
    projects.find(p => p.title === projectTitle).todos.push(todo)
}

export { addProject, Project, addTodo, getCurrentProject, setCurrentProject, getAllProjects }