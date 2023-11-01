import {
    createBrowserRouter
  } from "react-router-dom";
import PaginaInicial from "../paginas/PaginaInicial";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaInicial></PaginaInicial>,
    },
  ]);

  export default router;