import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import { CounterApp } from "./CounterApp.tsx";
//import { CounterWithCustomeHooks } from "./CounterWithCustomeHooks.tsx";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEfects/Layout";
//import { Memorize } from "./06-memos/Memorize";
//import { MemorizeHook } from "./06-memos/MemorizeHook";
//import { CallBackHook } from "./06-memos/CallBackHook";
//import { Padre } from "./07-tarea-memo/Padre";
//import "./08-useReducer/intro-reducer";
//import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    {/*<CounterApp />*/}
    {/*<CounterWithCustomeHooks />*/}
    {/*<SimpleForm />*/}
    {/*<FormWithCustomHook />*/}
    {/*<MultipleCustomHooks />*/}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemorizeHook /> */}
    {/* <CallBackHook /> */}
    {/*  <Padre /> */}
    {/* <TodoApp /> */}
    <MainApp />
    {/*   </StrictMode> */}
  </BrowserRouter>
);
