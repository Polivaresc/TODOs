import Todo from './todo';
import {
    addProject,
    deleteProject,
    Project,
    addTodo,
    setCurrentProject,
    getCurrentProject,
    getTodo,
    updateTodo,
    deleteTodo,
} from './project';
import { Datepicker } from 'vanillajs-datepicker';
import {
    displayMenu,
    displayPage,
    showProjectForm,
    showProjectPage,
    showTodoForm,
} from './views';

function projectListeners() {
    const newProjectButton = document.querySelector('.new-project');
    newProjectButton.addEventListener('click', showProjectForm);

    const cancelProject = document.querySelector('#cancel-project');
    cancelProject.addEventListener('click', showProjectPage);

    const projectForm = document.querySelector('#project-form');
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.querySelector('input[name=project-title]').value;
        const description = document.querySelector(
            'input[name=project-description]'
        ).value;

        const project = new Project(title, description);

        addProject(project);
        setCurrentProject(project);
        displayMenu();
        displayPage();
    });

    const modal = document.querySelector('.modal-overlay');
    const modalTitle = document.querySelector('#modal-title');
    const noDelete = document.querySelector('.no-button');
    noDelete.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const deleteButton = document.querySelector('#delete-project');
    deleteButton.addEventListener('click', () => {
        const currentProject = getCurrentProject();
        modalTitle.textContent = currentProject.title;
        modal.style.display = 'flex';

        const yesDelete = document.querySelector('.yes-button');
        yesDelete.addEventListener(
            'click',
            () => {
                deleteProject();
                modal.style.display = 'none';
                location.reload();
            },
            { once: true }
        );
    });
}

function todoListeners() {
    const newTodoButton = document.querySelector('.new-todo');
    newTodoButton.addEventListener('click', showTodoForm);

    const cancelTodo = document.querySelector('#cancel-todo');
    cancelTodo.addEventListener('click', showProjectPage);

    const date = document.querySelector('#todo-dueDate');
    const datepicker = new Datepicker(date, { format: 'dd/mm/yyyy' });
    date.addEventListener('changeDate', function () {
        datepicker.hide();
        date.value = Datepicker.formatDate(datepicker.getDate(), 'dd/mm/yyyy');
    });

    const todoForm = document.querySelector('#todo-form');
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentProject = getCurrentProject();
        const currentProjectId = currentProject.id;

        const title = document.querySelector('#todo-title').value;
        const description = document.querySelector('#todo-description').value;
        const dueDate = date.value;
        const priority = document.querySelector('#todo-priority').checked;

        const id =
            (currentProject.todos.length
                ? Math.max(...currentProject.todos.map((t) => t.id))
                : 0) + 1;

        const todo = new Todo(id, title, description, dueDate, priority);

        addTodo(currentProjectId, todo);
        displayPage();
    });
}

function changePriority() {
    const todoId = this.parentNode.getAttribute('todo-id');
    const todo = getTodo(todoId);
    todo.priority = !todo.priority;
    updateTodo();
}

function changeStatus() {
    const todoId = this.parentNode.getAttribute('todo-id');
    const todo = getTodo(todoId);
    todo.status = !todo.status;
    updateTodo();
}

function editTodo() {
    const li = this.parentNode;
    const todoId = li.getAttribute('todo-id');
    const todo = getTodo(todoId);
    const liNodes = Array.from(li.childNodes);

    const date = liNodes.find((date) => date.classList.contains('date'));
    const title = liNodes.find((title) => title.classList.contains('title'));
    const description = liNodes.find((description) =>
        description.classList.contains('description')
    );

    const deleteButton = document.createElement('span');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'fas fa-trash delete-button';

    const modal = document.querySelector('.modal-overlay');
    const modalTitle = document.querySelector('#modal-title');
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', () => {
        modalTitle.textContent = todo.title;
        modal.style.display = 'flex';

        const yesDelete = document.querySelector('.yes-button');
        yesDelete.addEventListener(
            'click',
            () => {
                deleteTodo(todoId);
                modal.style.display = 'none';
                location.reload();
            },
            { once: true }
        );
    });

    const dateInput = document.createElement('input');
    dateInput.setAttribute('class', 'date');
    dateInput.setAttribute('value', todo.dueDate);
    dateInput.addEventListener(
        'click',
        function () {
            const datepicker = new Datepicker(dateInput, {
                format: 'dd/mm/yyyy',
            });
            datepicker.show();
            this.addEventListener('changeDate', function () {
                datepicker.hide();
                dateInput.value = Datepicker.formatDate(
                    datepicker.getDate(),
                    'dd/mm/yyyy'
                );
            });
        },
        { once: true }
    );

    const titleInput = document.createElement('input');
    titleInput.setAttribute('value', title.textContent);
    titleInput.setAttribute('placeholder', 'Todo');

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('value', description.textContent);
    descriptionInput.setAttribute('placeholder', 'Description');

    const saveButton = document.createElement('span');
    const saveIcon = document.createElement('i');
    saveIcon.setAttribute('class', 'far fa-save edit-icon');
    saveButton.appendChild(saveIcon);
    saveButton.addEventListener('click', function () {
        todo.dueDate = dateInput.value;
        todo.title = titleInput.value;
        todo.description = descriptionInput.value;
        updateTodo();
        location.reload();
    });

    date.textContent = '';
    title.textContent = '';
    description.textContent = '';

    date.appendChild(dateInput);
    title.appendChild(titleInput);
    description.appendChild(descriptionInput);

    li.replaceChild(saveButton, this);
    li.appendChild(deleteButton);
}

export {
    projectListeners,
    todoListeners,
    changePriority,
    changeStatus,
    editTodo,
};
