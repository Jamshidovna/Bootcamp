import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import Filial from '../img/filial_2.svg'
import Customer from '../img/klient_2.svg'
import Padpischik from '../img/podpischik.svg'
import Kuryer from '../img/kuryer.svg'
import Search from '../img/search.svg'
import { Link } from 'react-router-dom'




export default function Klient() {

  const columns = [
    { field: "firstName", headerName: "Название", width: 700 },
    { field: "number", headerName: "Номер телефона", width: 150 },
    {
      field: "status",
      headerName: "Статус",
      type: "number",
      width: 200,
    },
  ];
  

  const rows = [
    {
      id: 1,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 2,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 3,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 4,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 5,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 6,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 7,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 8,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 9,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 10,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 11,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 12,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 13,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 14,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 15,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 16,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 17,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 18,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 19,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 20,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 21,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 22,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 23,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 24,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 25,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 26,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 27,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 28,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 29,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 30,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 30,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 32,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 33,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 34,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 35,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 36,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 37,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 38,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 39,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 40,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 41,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 42,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 43,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 44,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 45,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 46,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 47,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 48,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 49,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 50,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 51,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 52,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 53,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 54,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 55,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 56,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 57,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 58,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 59,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 60,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 61,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 62,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 63,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 64,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 65,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 66,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 67,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 68,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 69,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 70,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 71,
      firstName: "Robert Fox",
      number: "(209) 555-0104",
      status: "Не активный",
    },
    {
      id: 72,
      firstName: "Kristin Watson",
      number: "(205) 555-0100",
      status: "Не активный",
    },
    {
      id: 73,
      firstName: "Eleanor Pena",
      number: "(270) 555-0117",
      status: "Активный",
    },
    {
      id: 74,
      firstName: "Jane Cooper",
      number: "(603) 555-0123",
      status: "Активный",
    },
    {
      id: 75,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
    {
      id: 76,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 77,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 78,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 79,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 80,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 81,
      firstName: "Cody Fisher",
      number: "(907) 555-0101",
      status: "Активный",
    },
    {
      id: 82,
      firstName: "Ronald Richards",
      number: "(319) 555-0115",
      status: "Не активный",
    },
    {
      id: 83,
      firstName: "Devon Lane",
      number: "(684) 555-0102",
      status: "Активный",
    },
    {
      id: 84,
      firstName: "Kathryn Murphy",
      number: "(252) 555-0126",
      status: "Не активный",
    },
    {
      id: 85,
      firstName: "Darrell Steward",
      number: "(302) 555-0107",
      status: "Не активный",
    },
    {
      id: 86,
      firstName: "Dianne Russell",
      number: "(219) 555-0114",
      status: "Активный",
    },
  ];


  return (
    <div>
           <header className='bg-white w-full h-14 border flex justify-between'>
         <h1 className='text-2xl font-semibold px-8 py-2'>Клиенты</h1>
         <button className='border text-green-400 font-semibold text-xl px-12 py-3'>+ Добавить</button>
      </header> 
      <div className='bg-gray-100 w-full h-14 border'>
          <form className=' relative '>
            <img src={Search} className='absolute left-10 top-[18px]' alt="search" />
            <input className='py-2 px-11 mt-1.5 ml-6 rounded-s-xl rounded-e-xl w-[480px] border bg-white border-slate-300 hover:border-indigo-400 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-200'
             type="text" 
              placeholder='Поиск'  />
          </form>
      </div>

      <div  className='flex mt-6 px-11 gap-7 '>
      <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
          <img src={Filial} alt="img" />
        </div>
       <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
          <img src={Customer} alt="img" />
        </div>
        <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
            <img src={Padpischik} alt="img" />
        </div>
        <div className="transform   shadow-xl transition duration-300 hover:translate-x-4">
             <img src={Kuryer} alt="img" />
        </div>
      </div>

      <div className=" w-[1180px] bg-gray-50 mt-12 ml-10 ">
          <Link to='/klient/singleClient'>

          <DataGrid className=' '
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
            checkboxSelection
          />

          </Link>
          </div>

    </div>
  )
}

