import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const todos = [
    {input: "Hello! add your first todo" , complete: true},
    {input: "Get the grocires" , complete: false},
    {input: "Learn web design" , complete: false},
    {input: "Say Hi!" , complete: true},
  ]

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput/>
    </>
  )
}

export default App
