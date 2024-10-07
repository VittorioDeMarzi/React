import { useState } from "react";

export default function ToDoFormular(props) {
  const [toDoItem, setToDoItem] = useState("");

  function submit(event) {
    event.preventDefault();
    const item = toDoItem;
    props.setToDos((old) => [...old, item]);
  }

  return (
    <>
      <h1>To-Do List</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          id="toDo"
          placeholder="type here"
          onChange={(e) => setToDoItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
