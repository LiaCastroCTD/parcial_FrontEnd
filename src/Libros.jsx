function Libros ({libros}) {
    return (
        <div>
            <h1>Libros guardados</h1>
            {libros.map((libro, index) => (
                <div key={index} className="card">
                    <h3>{libro.libro} {libro.autor}</h3>
                </div>
            ))}
        </div>
    )
}

export default Libros;