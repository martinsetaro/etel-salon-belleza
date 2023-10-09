"use client"
import React, { useState } from 'react'
import Link from "next/link"
import '../app/globals.css'

const Navigation = () => {


  const [load,setLoad]= useState(true)

const handlerLoad = () => {
  if(load){
    setLoad(false)
  }else {
    setLoad(true)
  }
  
}

  return (
    <>
    <div className="w-full h-[8rem] text-white uppercase gap-12 font-nunito flex items-center justify-center max-[600px]:hidden">
        <Link href="/" className="link">Inicio</Link>
        <Link href="/Turnos" className="link">Turnos</Link>
        <Link href="/#nuestros" className="link">Trabajos</Link>
    </div>
    <div className="min-[601px]:hidden max-[600px]:w-full h-[6rem] max-[600px]:flex uppercase max-[600px]:justify-center max-[600px]:items-center ">
      <h2 className="text-3xl text-white cursor-pointer -mb-0"
      onClick={handlerLoad}
      >Menu</h2>
   </div>
   { !load && <div className="max-[600px]:w-full h-auto bg-gray-500 flex flex-col justify-center gap-3 text-white text-center pt-2 pb-2">
        <Link href="/" className="link">Inicio</Link>
        <Link href="/Turnos" className="link">Turnos</Link>
        <Link href="/#nuestros" className="link">Trabajos</Link>
   </div>}
    
    
    </>
  )
}

export default Navigation
