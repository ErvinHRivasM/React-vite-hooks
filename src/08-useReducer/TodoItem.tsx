export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: any) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center ${
          //todo.done && "text-decoration-line-through"
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger mt-1"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Clear
      </button>
    </li>
  );
};
