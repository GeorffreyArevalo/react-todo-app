import 'animate.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import { RoutesApp } from "./routes/RoutesApp";
import { store } from './store';


export const TodoApp = () => {
  

  return (

    <Provider store={ store }>
      <BrowserRouter>
        <Toaster richColors closeButton />
        <RoutesApp />
      </BrowserRouter>
    </Provider>

  )
}