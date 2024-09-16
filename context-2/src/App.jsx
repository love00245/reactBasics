import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {

    const new_todo = {
      id: Date.now(),
      todo,
      completed: false
    }
    setTodos((prev) => [...prev, new_todo])
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(e => e.id == id ? e.todo = todo : todo));

  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev = prev.filter(e => e.id != id));

  }
  const toggleComplete = (id) => {
    console.log(id);

    setTodos((prev) => {
      prev.map((e) => e.id == id ? e.completed = true : "")
      console.log("fwf",prev);
      
    });
    console.log("todos",todos);
  }

  useEffect(() => {
    const todos = localStorage.getItem("todos") && JSON.parse(localStorage.getItem("todos"));
    if (todos?.length) {
      setTodos(todos);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
