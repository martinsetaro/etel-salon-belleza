"use client";
import { useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const Page = () => {

  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [telefono,setTelefono] = useState('')
  const [turno,setTurno]= useState('')
  const [direccion,setDireccion] = useState('')
  const [dia,setDia] = useState('')



  const handlerSolicitar=(e)=> {
 e.preventDefault();


  if([nombre,apellido,telefono,turno,direccion,dia].includes('')){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Encontre algunos campos vacios!',
      
    })}
    else {
      window.location.href=`https://api.whatsapp.com/send?phone=+542617228662&text=Mi%20nombre%20es%20${nombre}%20y%20solicito%20un%20turno%20para%20el%20dia%20${dia}%20a%20las%20${turno}%20,%20mi%20telefono%20es%20${telefono}.%20Muchas%20gracias!`
    }
  }
   
// Generar opciones para los días del mes (01 al 31)
const days = Array.from({ length: 31 }, (_, index) => {
  const day = (index + 1).toString().padStart(2, '0'); // Agrega el cero inicial si es necesario
  return <option key={day} value={day}>{day}</option>;
});


  

  



  

  return (
    
    
    <div className="w-full h-auto p-4 pb-12">
       <h2 className="text-4xl text-center font-nunito text-gray-600"> Desde aquí solicita tu turno</h2>
       <div className="w-full h-auto pt-3 pb-4 flex justify-center">
        <form className="w-1/2 h-auto mt-12  flex flex-col gap-6 font-nunito max-[600px]:w-full">
          <label>Nombre</label>
          <input
          type="text"
          placeholder="Ingrese su nombre"
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          onChange={(e)=> setNombre(e.target.value)}
          />
          <label>Apellido</label>
          <input
          type="text"
          placeholder="Ingrese su apellido"
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          onChange={(e)=> setApellido(e.target.value)}
          />
          <label>Telefono</label>
          <input
          type="number"
          placeholder="Ingrese su telefono"
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          min='0'
          onChange={(e)=> setTelefono(e.target.value)}
          />
          <label>Dirección</label>
          <input
          type="text"
          placeholder="Ingrese su dirección"
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          onChange={(e)=> setDireccion(e.target.value)}
          />
          <label>Seleccione su horario:</label>
          <select 
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          onChange={(e)=> setTurno(e.target.value)}
          >
            <option value="" >Elegir turno</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
          <label>Seleccione el dia</label>
          <select 
          className="pl-2 border-[.1rem] rounded-sm -mt-[1rem]"
          onChange={(e)=> setDia(e.target.value)}
          id="day" name="day"
          >
            <option value="">Elegir dia</option>
            {days}
          </select>
          <button
          className="bg-gray-900 text-white font-nunito w-[10rem] h-[3rem] rounded-md"
          onClick={handlerSolicitar}
          >
          Solicitar Turno
          </button>

        </form>

       </div>
  
    </div>
   
  
  )
}

export default Page
