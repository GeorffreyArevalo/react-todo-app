import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes/RoutesApp";

export const TodoApp = () => {
  

  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}