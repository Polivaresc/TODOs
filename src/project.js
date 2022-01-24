let projects = [{title: 'default', description: '', todos: []}]

function addProject(project) {
    projects.push(project)
    console.log(projects)
}

class Project {
    constructor (title, description) {
        this.title = title
        this.description = description
        this.todos = []
    }

    addTodo(projectTitle, todo) {
        projects.find(p => p.title === projectTitle).todos.push(todo)
    }
}

export {addProject, Project}