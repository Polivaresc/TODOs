let projects = [{name: 'default', todos: []}]

function addTodo(projectName, todo) {
    console.log(projectName)
    projects.find(p => p.name === projectName).todos.push(todo)
    console.log(projects)
}

export {addTodo}