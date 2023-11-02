import { useRef, useState } from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleUpdated = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }

      return e;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter);
  };

  const handleUpdateText = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text;
      }

      return e;
    });

    setTodos(updatedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTodos([
        ...todos,
        {
          text: e.target.value,
          completed: false,
          id: Date.now(),
        },
      ]);

      inputRef.current.value = "";
    }
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="wrapper">
        <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
        {/* <Items text="hello world" />
        <Items text="hello world" />
        <Items text="hello world" /> */}
        {todos.map((e) => (
          <Items
            key={e.id}
            {...e}
            updateCompleted={handleUpdated}
            deleteTodo={handleDelete}
            updateText={handleUpdateText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
