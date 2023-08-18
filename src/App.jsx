import {useState} from 'react';
import Form from './Form';
import Libros from './Libros';
import './App.css';
import Card from './Card';


function App() {
  const [libros, setLibros] = useState([]);

  const agregarLibro=(libro) => {
    setLibros([...libros, libro]);
  }

  return (
    <div className="App">
      <h1>Agrega tus libros favoritos</h1>
      <Form onAddLibro={agregarLibro}/>
      <Libros libros={libros}/>
      <Card />
    </div>
  );
}

export default App;
