
export default function Header(props) {

  const {todos} = props
  const todosLength = todos.length;

  const isTaskPlural = todos.length != 1
  const taskOrTasks = isTaskPlural ? "tasks" : "task"

  return (
    <header>
        <h1 className="text-3xl font-semibold">
          You have {todosLength} open {taskOrTasks}.
        </h1>
    </header>
  )
}
