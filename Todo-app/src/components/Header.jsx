
export function Header(props) {
  const { todos } = props
  const todosLength = todos.length
  const isTasksPlural = todos.length != 1
  const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

  return (
      <header className="border-b-2">
          <h1 className="text-2xl font-semibold">
            You have {todosLength} open {taskOrTasks}.
          </h1>
      </header>
  )
}
