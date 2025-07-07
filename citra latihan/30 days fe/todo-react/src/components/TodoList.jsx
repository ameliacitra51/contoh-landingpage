import TodoItem from "./TodoItem";

function TodoList({ todo, deleteTodo, toggleCompleted }) {
  return (
    <ul>
      {todo.map((item, index) => (
        <TodoItem 
          key={index}
          index={index}
          todo={item}
          // completed={item.completed}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
