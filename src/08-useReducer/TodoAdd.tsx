import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    //id: new Date(),
    description: "",
    //done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.lenght <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    /*onNewTodo && */
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What does to do?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-1">
        Add
      </button>
    </form>
  );
};
