//como estamos con vite los archivos js toca crearlos con jsx

function Header (){

    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento {" "}
            <span className="text-indigo-600">Consultas</span>
        </h1>
        
    )

}

export default Header;