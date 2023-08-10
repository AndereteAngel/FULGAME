/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a NuevoProyecto</h1>
        <p>Esta es una aplicación React renombrada.</p>
      </header>
    </div>
  );
}
export default App;

import React from 'react';

function MiComponente() {
    return (
        <div className="container">
            <input
                type="text"
                style={{ backgroundColor: 'blue', color: 'white', {margin:10px}, padding:10px }}
            />
        </div>
    );
}

export default MiComponente;
import React from 'react';
*/
import React from "react";
import Barrainicio2 from "./components/barrainicio";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TarjetaPorPartido() {
  return (
    <div>
      <Barrainicio2 />
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.https://media.istockphoto.com/id/1408800616/es/foto/bal%C3%B3n-de-f%C3%BAtbol-de-color-plateado-sentado-sobre-fondo-blanco.webp?b=1&s=170667a&w=0&k=20&c=4Pv_Br4l2WLg9W1AX07JEI8Dt6oTb5q5E6qlu8qF8Fg=google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F204%2F023%2Foriginal%2Fsoccer-png.png&tbnid=rfEaOPJkyUKN7M&vet=12ahUKEwiC3sGV68-AAxX1O7kGHcBPDikQMyhGegUIARCIAQ..i&imgrefurl=https%3A%2F%2Fes.vecteezy.com%2Fpng%2F1204023-futbol&docid=-Px2OtOjYY896M&w=1881&h=1847&q=pelota%20de%20futbol%20png&ved=2ahUKEwiC3sGV68-AAxX1O7kGHcBPDikQMyhGegUIARCIAQ" />
        <Card.Body>
          <Card.Title>Primer partido</Card.Title>
          <Card.Text>
            FulGame Play
          </Card.Text>
          <Button variant="primary">Tu Pronóstico</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TarjetaPorPartido
  
/*
const Juegos = () => {
  return (
    <div>
      <Barrainicio2 />

      <div
      style={{
        display:"flex"
      }}>
        <conteiner>
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        </conteiner>
      </div>
    </div>
  );
};

export default Juegos;
*/
