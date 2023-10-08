"use client";
import Navigation from "./Navigation";

const Footer = () => {



  return (
    <div className="w-full h-80 bg-gray-900 text-white">
      <div className="w-full h-[10rem] flex ">
           <div className='w-1/2 h-auto pl-10 flex flex-col items-center font-nunito'>
             <h2 className='text-7xl uppercase text-white font-nunito mt-12'>Etel </h2>
             <h3>Telefono : 261 344567</h3>
             <h3>Realizamos trabajo a domicilio!</h3>
             <h3>Abierto de Lunes a Viernes de 14:00 a 21:00 hrs</h3>
          </div>

        
        <div className='w-full h-auto flex justify-center align-middle mt-8 '>
            <div className='w-1/2 h-[12rem] border-l-2 pl-12'>
                  <h2 className='text-5xl uppercase text-white text-center font-nunito mt-4'>Salón de belleza</h2>
                  <h2 className='text-5xl uppercase text-white text-center font-nunito font-bold'>etel</h2>
                  <h2 className='text-3xl uppercase text-gray-600 text-center'>Sé tu mejor versión</h2>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Footer
