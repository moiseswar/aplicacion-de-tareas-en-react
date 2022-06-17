import './App.css';
import LogoFreeCodeCamp from './components/free-code-camp-logo';
import ListaTareas from './components/lista-tareas';

function App() {
  return (
    <div className="App">
      <LogoFreeCodeCamp/>
      <div className='contedor-tareas'>
        <h1>Mis tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
