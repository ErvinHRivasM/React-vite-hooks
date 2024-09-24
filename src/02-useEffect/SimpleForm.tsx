import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "erivas",
    email: "erivas@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    //console.log(target.value);
  };

  useEffect(() => {
    //console.log("Use efect called!..");
  }, []);

  useEffect(() => {
    //console.log("username called!..");
  }, [username]);

  useEffect(() => {
    //console.log("Email called!..");
  }, [email]);

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

      {username === "emilyR" && <Message />}
    </>
  );
};
