import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Task from "./Components/Task";

function App() {
  const [tasks, setTask] = useState(
    () => JSON.parse(localStorage.getItem("tarefas")) || []
  );
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.length == 0) {
      alert("O item não pode estar vazio");
    } else {
      let newTask = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        taskName: inputValue,
        complete: false,
      };

      
      setTask([...tasks, newTask])
      setInputValue("");
    }
  };

  const deleteTask = (name) => {
    const newList = tasks.filter((task) => name.id !== task.id);
    setTask(newList);
    
  };

  const completeTask = (id) => {
    let completed = tasks.map((task) => {
      if (task.id === id.id) {
        return { ...task, complete: !task.complete };
      } else {
        return task;
      }
    });

    setTask(completed);
    
  };

  const clearAll = () => {
    setTask([]);
    
  };

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks))
  }, [tasks])

 
  

  return (
    <div className="App">
      <Header />

      <div className="addInputArea">
        <Input onHandleChange={onHandleChange} inputValue={inputValue} />
        <Button addTask={addTask} value="Adicionar" />
      </div>

      <div className="list">
        { tasks.map((task) => (
          <Task
            key={task.id}
            name={task.taskName}
            id={task.id}
            complete={task.complete}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>

      <button
        style={{ width: "fit-content", margin: "auto", cursor: "pointer" }}
        onClick={clearAll}
      >
        Limpar Tudo
      </button>
    </div>
  );
}

export default App;
