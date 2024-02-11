import React from 'react'
import { FaFolder } from 'react-icons/fa6'
import {GrLinkPrevious, GrNext} from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function KlientZakaz() {
  return (
    <div>
         <header className='bg-white w-full h-14 border flex justify-between'>
       <div className='flex gap-[8px]'>
          <h2 className=' text-gray-400 flex py-4  px-6'>
          <Link to='/klient'>
          <GrLinkPrevious />
          </Link>
        
          </h2>
         <p className=' text-gray-400 py-4'> <FaFolder/></p>
         <h1 className=' text-xl text-gray-400 font-semibold py-2'>Клиенты</h1>
         <p className=' text-gray-400 py-4'><GrNext/></p>
         <p className=' py-4 text-blue-500'>
          <FaFolder/>
         </p>
         <h1 className=' py-3 font-semibold'>Dianne Rusell</h1>
       </div>

         <button className='border text-green-400 font-semibold text-xl px-12 py-3'>+ Добавить</button>
      </header>
      <div className='bg-gray-100 w-full h-10 border flex gap-4'>
         <Link to='/klient/singleClient' className= 'py-1.5  px-6 hover: text-[#4094f7]'>
           О клиенте
         </Link>
         <Link to='/klient/singleClient/order' className=' py-1.5 text-slate-400'>
         Заказы
         </Link>
      </div>
    </div>
  )
}
