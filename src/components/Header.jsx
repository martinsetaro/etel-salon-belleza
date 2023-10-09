"use client";
import '../app/globals.css'
import Navigation from './Navigation';

const Header = () => {




  return (
    <div className="w-100% h-[40rem] flex flex-col backimagen">
        <div className="w-full h-[10rem] flex justify-around">
           <div className='w-full h-[8rem] pl-10 flex items-center'>
             <h2 className='text-7xl uppercase text-white font-nunito max-[600px]:text-5xl'>Etel </h2>
          </div>
        <div className='w-full h-[8rem] p-2'>
           <Navigation/> 
        </div>

        </div>
        <div className='w-full h-[20rem] flex justify-end mt-16'>
            <div className='w-1/2 max-[600px]:w-full '>
                  <h2 className='text-5xl uppercase text-white text-center font-nunito mt-4'>Salón de belleza</h2>
                  <h2 className='text-5xl uppercase text-white text-center font-nunito font-bold'>etel</h2>
                  <h2 className='text-3xl uppercase text-gray-600 text-center'>Sé tu mejor versión</h2>
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Header
