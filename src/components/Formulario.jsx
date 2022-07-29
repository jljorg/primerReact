import { useEffect, useState } from "react";
import Error from "./Error";
const Formulario = ({setPersonas,personas,persona,setPersona}) => {
  //console.log(persona)
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [descripcion, setDescripcion] = useState("");
//validacion de errores
  const [error,setError]=useState(false);
  
  useEffect(()=>{
    if (Object.keys(persona).length > 0) {
     setNombre(persona.nombre);
     setApellido(persona.apellido);
     setEmail(persona.email);
     setFechaNacimiento(persona.fechaNacimiento);
     setDescripcion(persona.descripcion);
    }else{
      console.log("no tiene datos")
    }
   
  },[persona])

  const generarId =()=>{
    //crea un numero aleatoria lo conbier en una cadena string y elimina los dos primeros digitos
    const ramdom= Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return ramdom+fecha

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("enviando formulario");
    ///validacion de campos vacios
    //si estan vacios cambia a true 
    if([nombre,apellido,email,fechaNacimiento,descripcion].includes('')){
     // alert("Campos vacios");
      setError(true)
    }else{
      //alert("Se llenaron los datos");
      setError(false)

    }
    const objetoPersonas={
      nombre,
      apellido,
      email,
      fechaNacimiento,
      descripcion,
      
    }
    

   //este se hace antes de editar se crea el objetos
   /*

    const objetoPersonas={
      nombre,
      apellido,
      email,
      fechaNacimiento,
      descripcion,
      
    }

    setPersonas([...personas,objetoPersonas]);
  */


    if (persona.id) {
      //editar registro
       objetoPersonas.id=persona.id
       const personaActualizado = personas.map((personaState)=> personaState.id===
       persona.id ? objetoPersonas : personaState)
       setPersonas(personaActualizado)
       setPersona({})

      
    }else{
      //nuevo registro
      objetoPersonas.id=generarId();
      setPersonas([...personas,objetoPersonas]);
    }
    setNombre('');
    setApellido('');
    setEmail('');
    setFechaNacimiento('');
    setDescripcion('');


  }

 // const resultado =` ${nombre} ${apellido} ${email} ${fechaNacimiento}  ${descripcion}`
  
 

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Persona</h2>
      <p className="text-lg mt-5 text-center">
        Añade Persona y{"  "}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form
      
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Llene los campos por favor"></Error>}
       

       
       
        <div>
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2  rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="apellido"
          className="block text-gray-700 uppercase font-bold  "
          >
            Apellido
          </label>
          <input
            id="Apellido"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2  rounded-md"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2  rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="fechaNacimiento"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Nacimiento
          </label>
          <input
            id="fechaNacimiento"
            type="date"
            className="border-2 w-full p-2 mt-2  rounded-md"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Nota
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2  rounded-md"
            id="descripcion"
            cols="30"
            rows="10"
            placeholder="Ingrese Su Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <br />
        <input
          type="submit"
          className="bg-indigo-600  w-full p-3 text-white  uppercase font-bold hover:bg-indigo-800"
          value={persona.id ? 'Editar Persona':'Agregar Persona'}
        />
      </form>
    </div>
  );
};
export default Formulario;
