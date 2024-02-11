import React from 'react'
import { FaFolder } from 'react-icons/fa6'
import {GrLinkPrevious, GrNext} from 'react-icons/gr'
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Filial from '../img/filial_2.svg'
import Klient from '../img/klient_2.svg'
import Padpischik from '../img/podpischik.svg'
import Kuryer from '../img/kuryer.svg'

function SingleClient() {
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

      <div  className='flex mt-6 px-11 gap-7 '>
      <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
          <img src={Filial} alt="img" />
        </div>
        <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
          <img src={Klient} alt="img" />
        </div>
        <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
        <img src={Padpischik} alt="img" />
        </div>
        <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
        <img src={Kuryer} alt="img" />
        </div>
      </div>
       <div className=' w-[1170px] h-[300px] bg-white rounded mt-28 ml-11'>
           <h1 className=' px-4 py-2 font-semibold text-[16px]'>Клиент</h1>
           <hr />
           <div className='flex'>
            <div>
            <img className=" relative rounded-full w-44 h-44 mt-6 ml-4 bg-slate-300"  />
           <span className=' absolute -mt-24 ml-24 text-2xl'><FaCamera /></span>
           <h1 className=' text-blue-400 font-semibold px-12 py-2'> Изменить фото</h1>
            </div>
            <div className=' flex gap-2'>
            <div className=' mt-2'>
               <h1 className='font-semibold text-[#48535B] px-16 py-4 '>Имя</h1>
               <h1 className='font-semibold text-[#48535B] px-16 py-4'>Фамилия</h1>
               <h1 className='font-semibold text-[#48535B] px-16 py-4'>Телефон</h1>
               <h1 className='font-semibold text-[#48535B] px-16 py-4'>Тип клиента</h1>
         
            </div>
              <div>
              <p className='h-[37px] w-[700px] rounded-md border border-gray-300 px-6  py-1 mt-5 font-semibold text-black'>Dianne</p>
              <p className='h-[37px] w-[700px] rounded-md border border-gray-300 px-6  py-1 mt-5 font-semibold text-black'>Rusell</p>
              <p className='h-[37px] w-[700px] rounded-md border border-gray-300 px-6  py-1 mt-5 font-semibold text-black'>  (319) 555-0155</p>
              <select className="h-[37px] w-[700px] rounded-md border border-gray-300 px-6  py-1 mt-5 font-semibold text-black focus:outline-none">
                    <option>VIP</option>
                    <option>Standart</option>
                    <option>Full</option>
                  </select>
              </div>
            </div>
           </div>
       </div>
    </div>
  )
}

export default SingleClient