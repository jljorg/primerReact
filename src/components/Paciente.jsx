import React from 'react'

export default function Paciente({persona,setPersona,eliminarPersona}) {
  const handleEliminar =()=>{
    const respuesta = confirm("Desea eliminar la ´persona");
    if(respuesta){
      eliminarPersona(persona.id);

    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre : {}
          <span className="font-normal normal-case">{persona.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Apellido : {' '}
          <span className="font-normal normal-case">{persona.apellido}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email : {' '}
          <span className="font-normal normal-case">{persona.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Nacimiento : {' '}
          <span className="font-normal normal-case">{persona.fechaNacimiento}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion : {' '}
          <span className="font-normal normal-case">{persona.descripcion}</span>
        </p>
        <div className='flex justify' >

         <button
         type='button'
         className=' py-2 px-10 bg-indigo-700
          hover:bg-indigo-800 text-white font-bold
          uppercase rounded-lg'
          onClick={ () =>setPersona(persona)}
          >Edit</button>

          <br />

          <button
         type='button'
         className=' py-2 px-10 bg-red-500
          hover:bg-red-800 text-white font-bold
          uppercase rounded-lg'
          onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
      
  )
}
