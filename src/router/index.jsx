import {
  Navigate,
    createBrowserRouter
  } from "react-router-dom";
import PaginaInicial from "../paginas/PaginaInicial";
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/Cadastro/Interesses";
import DadosPessoais from "../paginas/Cadastro/DadosPessoais";
import Concluido from "../paginas/Cadastro/Concluido";

  
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
    children: [
      // Adicione uma rota de redirecionamento aqui
      {
        path: '/',
        element: <Navigate to="/cadastro" />,
      },
      {
        path: 'cadastro',
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: '',
            element: <SelecaoCliente />,
          },
          {
            path: 'interesses',
            element: <Interesses />,
          },
          {
            path: 'dados-pessoais',
            element: <DadosPessoais />,
          },
          {
            path: 'concluido',
            element: <Concluido />,
          },
        ],
      },
    ],
  },
]);

  export default router;