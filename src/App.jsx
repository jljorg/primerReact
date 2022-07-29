import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState,useEffect } from "react"



function App() {
  //para el listar
const [personas,setPersonas]=useState([]);
//para el editar
const [persona,setPersona]=useState({});

/*
//local storage
useEffect(()=>{
  const obtenerLS= ()=>{
    const personasLS = JSON.parse(localStorage.getItem('personas')) ?? [];
    setPersonas(personasLS);
  }
  obtenerLS();

},[]);

useEffect(()=>{
  localStorage.setItem('personas', JSON.stringify( personas ));
},[personas])

*/

const eliminarPersona =(id)=>{
  console.log("Eliminando Persona "+id)
  const personaAtualizado = personas.filter(persona=> persona.id !==id)
  setPersonas(personaAtualizado)
}

  return (

    <div className="container mx-auto font-black ">
      
      <Header></Header>
      <div className="mt-12 md:flex">
      <Formulario
       personas={personas}
       setPersonas={setPersonas}
       persona={persona}
       setPersona={setPersona}
       ></Formulario>
      <ListadoPacientes
       personas={personas}
       setPersona={setPersona}
       eliminarPersona={eliminarPersona}
       ></ListadoPacientes>
      </div>
   
    </div>
  )
}

export default App
