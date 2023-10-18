
import './App.css';
import EstilosGlobais from './components/EstilosGlobais/EstilosGlobais';
import Card from './components/Card/Card';
import { ProvedorTema } from './components/ProvedorTema';


function App() {
  return (
    <ProvedorTema>
      <EstilosGlobais />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
