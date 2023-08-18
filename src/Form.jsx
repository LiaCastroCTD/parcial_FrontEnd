import { useState } from "react";


function Form({onAddLibro}) {
    const [libro, setLibro] = useState('');
    const [autor, setAutor] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (libro && autor){
            onAddLibro({libro, autor});
            setLibro('');
            setAutor('');
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese su libro favorito' value={libro} onChange={(e) => setLibro(e.target.value)} />
            <input type="text" placeholder='Ingrese el autor' value={autor} onChange={(e) => setAutor(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    )

}

export default Form;