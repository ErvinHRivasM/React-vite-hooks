//import { useEffect, useReducer } from "react";
//import { todoReducer } from "../08-useReducer/todoReducer";
//import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

/* const initialState = [
{

    id: new Date().getTime(),
    description: "Get suole stone",
    done: false,
  },
  {
    id: new Date().getTime() * 7,
    description: "Get power stone",
    done: false,
  
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
*/
export const TodoApp = () => {
  //Refactor useTodo
  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    allTodos,
    pendingTodos,
  } = useTodos();
  /* const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init); //[states, dispatch]

  useEffect(() => {
    //console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    //console.log({ todo });
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    //send action
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    //console.log({ todo });
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    //console.log({ todo });
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  }; */

  return (
    <>
      <h1>
        TodoApp: {allTodos}, <small>pendientes: ({pendingTodos})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TODO List */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          {/*  <TodoAdd todo={todos} /> */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
