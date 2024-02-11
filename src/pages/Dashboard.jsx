import React from 'react'
import Filial from '../img/filial_2.svg'
import Klient from '../img/klient_2.svg'
import Padpischik from '../img/podpischik.svg'
import Kuryer from '../img/kuryer.svg'
import Order from '../img/total_order.svg'
import Earning from '../img/earning.svg'
import Month from '../img/total-month.svg'
import Top from '../img/top.svg'
import Average from '../img/Average.svg'

import LineChart from '../AreaCharts/LineChart'
import Redline from '../AreaCharts/RedLine'
import YellowLine from '../AreaCharts/YellowLine'
import PurpleLine from '../AreaCharts/PurpleLine'








export default function Dashboard() {


  return (
    <div>
      <header className='bg-white w-full h-14 border'>
         <h1 className='text-2xl font-semibold px-8 py-2'>Dashboard</h1>
      </header> 
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

       <div className='flex'>

       <div className='  px-11'>
        
       <div className=' bg-white w-[280px] h-[270px] mt-6   rounded-2xl'>
           <div className=' pt-4'>
           <img className=' px-7 ' src={Month} alt="month" />
           </div>
         <YellowLine/>
         </div>

         <div className=' bg-white w-[280px] h-[270px] mt-6   rounded-2xl'>
           <div className=' pt-4'>
           <img className=' px-7 ' src={Month} alt="month" />
           </div>
          <PurpleLine/>
         </div>
        
       
       
         <div className=' bg-white w-[280px] h-[270px] mt-6   rounded-2xl'>
           <div className=' pt-4'>
           <img className=' px-7 ' src={Month} alt="month" />
           </div>
         <Redline/>
         </div>
      </div>

         <div>
         <div className='flex gap-5 py-8'>
       <img  src={Top} alt="top" />
       <img src={Average} alt="average" />
       </div>
          {/* <img src={Statistika} alt="" /> */}
          <div className='h-[485px] w-[840px] rounded-2xl bg-white px-16 py-20 mt-12'>
            <div className=' -mt-10 flex justify-between'>
              <h1 className=' font-semibold text-xl text-slate-500 '>Ежемесячная статистика</h1>
              <select className="  h-10  px-6 rounded-xl border hover:border-indigo-400 focus:outline-none">
          <option value="">Июнь</option>
          <option value="">Июль</option>
          <option value="">Август</option>
          <option value="">Сентябрь</option>
          <option value="">Октябрь</option>
          <option value="">Ноябрь</option>
          <option value="">Декабрь</option>
          <option value="">Январь</option>
          <option value="">Февраль</option>
          <option value="">Март</option>
          <option value="">Апрель</option>
          <option value="">Май</option>
        </select>
              
            </div>
            <hr className=' mt-3' />
           <div className=''>
           <LineChart/>
           </div>
          </div>
         </div>
         
       </div>
      
     
    
  
   
  
    </div>
  )
}
