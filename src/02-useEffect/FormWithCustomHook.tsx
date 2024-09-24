import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //const { username, email, password } = formState;
  /*const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    //console.log(target.value);
  };*/

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Ervin Rivas"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        onChange={onInputChange}
      />

      <button
        onClick={onResetForm}
        className="btn tbtn-primary mt-2"
        value="Borrar"
      ></button>
    </>
  );
};
