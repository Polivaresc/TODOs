import { displayPage } from './views';
import {
	firestore, collection, deleteDoc, setDoc, getDocs, doc,
} from './firebase';

let projects = [];

class Project {
	constructor(title, description) {
		this.id = projects.length ? Math.max(...projects.map((project) => project.id)) + 1 : 0;
		this.title = title;
		this.description = description;
		this.todos = [];
	}
}

async function persist(project) {
	const projectObj = {...project}
	projectObj.todos = projectObj.todos.map((todo) => todo = {...todo})
	await setDoc(doc(firestore, 'projects', 'project-' + project.id), projectObj);
}

async function retrieveAll() {
	projects = []
	const projectsSnapshot = await getDocs(collection(firestore, 'projects'))
	projectsSnapshot.forEach((doc) => {
		projects.push(doc.data())
	});
}

async function remove(project) {
	await deleteDoc(doc(firestore, 'projects', 'project-' + project.id))
}

//
/* function remove(project) {
	localStorage.removeItem('project-' + project.id);
} */

/* function persist(project) {
	localStorage.setItem('project-' + project.id, JSON.stringify(project));
} */

/* function retrieveProjects() {
	projects = Object.entries(localStorage)
	.filter(function(val) { 
		return val[0].includes('project-')
	}, {})
	.map(function(val) {
		return JSON.parse(val[1])
	})
	.sort(function(a, b) {
		return a.id > b.id ? 1 : -1
	});

	if (!projects.length) {
		addProject(new Project('Default', 'test'))
	}
} */


function setCurrentProject(projectId) {
	localStorage.setItem('currentProjectId', projectId);
}

function getCurrentProject() {
	const currentProjectId = localStorage.getItem('currentProjectId') ?? 0;
	return projects.find((p) => p.id === parseInt(currentProjectId));
}

async function getAllProjects() {
	await retrieveAll()
	return projects;
}

function addProject(project) {
	projects.push(project);
	persist(project);
}

async function deleteProject() {
	const currentProject = getCurrentProject();
	const index = projects.indexOf(currentProject);
	projects.splice(index, 1);
	await remove(currentProject);
	setCurrentProject(0)
}

function getTodo(todoId) {
	const project = getCurrentProject();
	const todo = project.todos.find((t) => t.id === parseInt(todoId));
	return todo;
}

function addTodo(projectId, todo) {
	const project = projects.find((p) => p.id === projectId)
	project.todos.push(todo);
	persist(project);
}

function deleteTodo(todoId) {
	const currentProject = getCurrentProject();
	const todosArray = currentProject.todos;
	const todo = todosArray.find((t) => t.id === parseInt(todoId));
	const index = todosArray.indexOf(todo);
	todosArray.splice(index, 1);
	persist(currentProject);
}

function updateTodo() {
	const currentProject = getCurrentProject();
	persist(currentProject);
	displayPage();
}

export {
	addProject,
	deleteProject,
	Project,
	addTodo,
	getCurrentProject,
	setCurrentProject,
	getAllProjects,
	getTodo,
	deleteTodo,
	updateTodo,
};
