"use client"
import Image from "next/image"
import salon from '../../public/img/salon.jpg'
import Link from "next/link"


const Bienvenidos = () => {


  return (
    <div className="w-full h-auto flex-col">
      
        <div className="w-full h-[25rem] pt-3 pb-3 flex max-[600px]:flex-col max-[600px]:h-auto">

        
        <div className="w-full h-auto p-2 mt-16">
           <h2 className="text-4xl p-3 text-center font-nunito">Bienvenidos al Salón de belleza Etel.</h2>
        </div>
        <div className="w-full h-auto p-10 mt-12">
            <p>En Etel, nos dedicamos a brindarte un servicio de excelencia para que te 
              sientas bella y radiante. Ofrecemos una amplia gama de servicios para el cuidado de tu cabello,
               rostro y cuerpo. ¡Visítanos y conoce todos nuestros servicios!</p>
             <button className="bg-gray-900 text-white font-nunito w-[10rem] h-[3rem] mt-10 rounded-md"> 
             <Link href="/Turnos">Solicitar turno</Link>  
             </button>
        </div>
      </div>
      <div className="w-full h-[25rem] flex justify-center">
        <Image src={salon} alt="salon" className="w-[60rem] h-[25rem]"/>
      </div>
        
      
    </div>
  )
}

export default Bienvenidos
