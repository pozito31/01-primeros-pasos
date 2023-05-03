import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "148",
    grupo: "H+",
    estado: "regular",
    alergias: "Si"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!
        </p>
        {/*Cargar mi primer componente.*/}
        <div className='componentes'>
          <MiComponente />
          <hr/>
          <SegundoComponente />
          <hr />
          <TercerComponente
            nombre="Jessica"
            apellidos="Pozo"
            ficha={ficha_medica}
          />
          <hr />
          <EventosComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
