

const Error=({mensaje})=> {
  //tambien se puede hacer con la variable children que es mas dimanico
  // no se pone asi {error && <Error mensaje="Llene los campos por favor"></Error>}
  // con el children se pone la variable asi {error && <Error>Llene los campos por favor</Error>}
  //y se le pasa por parametro en vez de mensaje es children
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase fond-bold md-3 rounded-md">
          <span>
           {mensaje}
          </span>
        
        </div>
  )
}

export default Error