"use client";
import { useState } from "react";
import Header from "@/components/Header";



const page = () => {

  return (
    
    
    <div className="w-full h-auto p-4 pb-12">
       <h2 className="text-4xl text-center font-nunito text-gray-600"> Desde aquí solicita tu turno</h2>
       <div className="w-full h-auto pt-3 pb-4 flex justify-center">
        <form className="w-1/2 h-auto mt-12  flex flex-col gap-6 font-nunito">
          <label>Nombre</label>
          <input
          type="text"
          placeholder="Ingrese su nombre"
          className="pl-2 border-[.1rem] rounded-sm pt-2 pb-2"
          />
          <label>Apellido</label>
          <input
          type="text"
          placeholder="Ingrese su apellido"
          className="pl-2 border-[.1rem] rounded-sm pt-2 pb-2"
          />
          <label>Telefono</label>
          <input
          type="number"
          placeholder="Ingrese su telefono"
          className="pl-2 border-[.1rem] rounded-sm pt-2 pb-2"
          min='0'
          />
          <button
          className="bg-gray-900 text-white font-nunito w-[10rem] h-[3rem] rounded-md"
          >
          Solicitar Turno
          </button>

        </form>

       </div>
  
    </div>
   
  
  )
}

export default page
