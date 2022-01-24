export default function displayContent() {
    const newProject = document.querySelector('.new-project')

    newProject.addEventListener('click', () => {
        const projectForm = document.querySelector('#project-form')

        projectForm.style.display = 'flex'
    })
}