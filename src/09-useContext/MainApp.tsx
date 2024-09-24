import { Navigate, Route, Routes } from "react-router";
import { AboutPage } from "./Aboutpage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
//import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/*  <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
