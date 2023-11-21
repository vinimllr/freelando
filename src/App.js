import { RouterProvider } from "react-router-dom";
import router from "./router"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";

const App = () => {
  return(
    <ProvedorTema>
      <Estilos/>
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}

export default App;