export default function displayContent() {
    const newProject = document.querySelector('.new-project')
    const projectForm = document.querySelector('#project-form')

    newProject.addEventListener('click', () => {
        projectForm.style.display = 'grid'
    })

    const cancelProject = document.querySelector('#cancel-project')
    const submitProject = document.querySelector('#submit-project')

    cancelProject.addEventListener('click', () => {
        projectForm.style.display = 'none'
    })

    submitProject.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(projectForm.submit())
        // projectForm.style.display = 'none'
    })
}