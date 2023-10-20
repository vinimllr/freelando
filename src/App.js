
import './App.css';
import EstilosGlobais from './components/EstilosGlobais/EstilosGlobais';
import Card from './components/Card/Card';
import { ProvedorTema } from './components/ProvedorTema';
import Cabecalho from './components/Cabecalho';
import Tipografia from './components/Tipografia';
import CampoTexto from './components/CampoTexto';


function App() {
  return (
    <ProvedorTema>
      <EstilosGlobais />
      <Cabecalho/>
      <Card>
        <Tipografia componente={'h1'} variante={'h1'}>Crie seu cadastro</Tipografia>
        <Tipografia componente={'body'} variante={'body'}>Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. </Tipografia>
        <CampoTexto titulo={"Nome Completo"}/>
      </Card>
    </ProvedorTema>
  );
}

export default App;
