export default function todoFactory(title, description, dueDate, priority) {
    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority
    const getStatus = () => {
        const checked = false
        return checked
    }

    return {getTitle, getDescription, getDueDate, getPriority, getStatus}
}