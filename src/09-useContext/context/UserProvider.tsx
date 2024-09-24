import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "erivas",
  email: "erivas@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
