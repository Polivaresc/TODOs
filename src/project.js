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
}

function deleteProject() {
    const currentProject = getCurrentProject()
    const index = projects.indexOf(currentProject)
    projects.splice(index, 1)
    persistProjects()
}

export { addProject, deleteProject, Project, addTodo, getCurrentProject, setCurrentProject, getAllProjects }