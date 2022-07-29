import { useEffect, useState } from "react";
const Formulario = () => {

  
  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Persona</h2>
      <p className="text-lg mt-5 text-center">
        Añade Persona y{"  "}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5" action="">
        <div >
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2  rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="apellido"
            className="block text-gray-700 uppercase font-bold"
          >
            Apellido
          </label>
          <input
            id="Apellido"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2  rounded-md"
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
          />
        </div>

        <div>
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Nota
          </label>
          <textarea className="border-2 w-full p-2 mt-2  rounded-md" id="descripcion" cols="30" rows="10"  placeholder="Ingrese Su Descripcion">
          </textarea>
        </div>
         <br/>
        <input type="submit"  className="bg-indigo-600  w-full p-3 text-white  uppercase font-bold hover:bg-indigo-800" value="Agregar Paciente"
        />
      </form>
    </div>
  );
};
export default Formulario;
