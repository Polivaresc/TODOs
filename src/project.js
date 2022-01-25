import { updateMenu } from './views'

let projects = [{title: 'default', description: '', todos: []}]

function addProject(project) {
    projects.push(project)
    updateMenu()
}

class Project {
    constructor (title, description) {
        this.title = title
        this.description = description
        this.todos = []
    }    
}

function addTodo(projectTitle, todo) {
    projects.find(p => p.title === projectTitle).todos.push(todo)
}

export {addProject, Project, addTodo, projects}