//import React, { useEffect } from 'react'
import Paciente from './Paciente'


export default function ListadoPacientes({personas,setPersona,eliminarPersona}) {
  //console.log(personas);
  /*
   useEffect(()=>{
     if (personas.length) {
      console.log("Se agrego una nueva persona")
     }
    
   },[personas])
   */
   
  return (
    
    <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {personas && personas.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado Persona</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {' '}
        <span className="text-indigo-600 font-bold ">Personas y Citas</span>
      </p>
      {personas.map((persona)=>{
       // console.log(persona.nombre+"dsdsdsdsdsdsd")
        return(
          <Paciente
          //este es para el listar se trae los datos  
          key={persona.id}
          persona={persona}
          eliminarPersona={eliminarPersona}
          //este es para el editar
          setPersona={setPersona}
          ></Paciente>

        )

      })}

        </>
        
      ) :
      (<>
      <h2 className="font-black text-3xl text-center">No Hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
      Por favor {' '}
        <span className="text-indigo-600 font-bold "> Agregue sus pacientes</span>
      </p>
      


      </>)}
      
      
      
      
      
    </div>
  )
}
