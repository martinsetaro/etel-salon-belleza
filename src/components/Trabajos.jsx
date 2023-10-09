"use client"
import '../app/globals.css'
import Image from 'next/image'
import cut1 from '../../public/img/cut1.jpg'
import cut2 from '../../public/img/cut2.jpg'
import cut3 from '../../public/img/cut3.jpg'
import cut4 from '../../public/img/cut4.webp'


const Trabajos = () => {
  return (
    <div className="w-full h-auto pt-5 pb-12" id="nuestros">
        <h2 className="text-center text-gray-600 text-6xl font-nunito mt-10 " >Nuestros Trabajos</h2>
        <p className="text-center p-12">En nuestro salón de belleza, nos dedicamos a brindarte un 
        servicio de excelencia para que te sientas bella y radiante. Ofrecemos una amplia gama de 
        servicios para el cuidado de tu cabello, rostro y cuerpo.</p>
        <div className="w-full h-auto flex justify-around mt-14 max-[600px]:flex-col">
            <Image src={cut1} alt="imagencorte" width={250} height={400} className='rounded-xl shadow-lg max-[600px]:w-4/5 m-auto h-[20rem] mb-6 aniimg'/>
            <Image src={cut2} alt="imagencorte"  width={250} height={100} className='rounded-xl shadow-lg max-[600px]:w-4/5 m-auto h-[20rem] mb-6 aniimg'/>
            <Image src={cut3} alt="imagencorte"  width={250} height={100} className='rounded-xl shadow-lg max-[600px]:w-4/5 m-auto h-[20rem] mb-6 aniimg'/>
            <Image src={cut4} alt="imagencorte" width={250} height={100}  className='rounded-xl shadow-lg max-[600px]:w-4/5 m-auto h-[20rem] mb-6 aniimg'/>
        </div>

    </div>
  )
}

export default Trabajos
