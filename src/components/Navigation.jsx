"use client"
import Link from "next/link"
import '../app/globals.css'

const Navigation = () => {

  return (
    <div className="w-full h-[8rem] text-white uppercase gap-12 font-nunito flex items-center justify-center">
        <Link href="#" className="link">Inicio</Link>
        <Link href="#" className="link">Turnos</Link>
        <Link href="#nuestros" className="link">Trabajos</Link>
           
    </div>
  )
}

export default Navigation
