import React from 'react'
import Search from '../img/search.svg'
import { DataGrid } from '@mui/x-data-grid';
import Date from '../DatePicker/Date';

export default function Zakaz() {
  
const columns = [
  { field: "id", headerName: "№", width: 10 },
  { field: "firstName", headerName: "Клиент", width: 150 },
  { field: "number", headerName: "Ид.заказа", width: 100 },
  {
    field: "time",
    headerName: "Таймер",
    width: 90,
  },
  {
    field: "no",
    headerName: "Курьер",
    width: 80,
  },
  {
    field: "name",
    headerName: "Филиал",
    width: 100,
  },
  {
    field: "delivery",
    headerName: "Тип доставки",
    width: 130,
  },
  {
    field: "price",
    headerName: "Цена заказа",
    width: 100,
  },
  {
    field: "address",
    headerName: "Адресс клиента",
    width: 260,
  },

];

const rows = [
 
  {
    id: 1,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 2,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Yunusobod",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 3,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilanzar",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 4,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 5,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 6,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 7,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 8,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 9,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 10,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 11,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 12,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 13,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 14,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 15,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 16,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 17,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 18,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 19,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 20,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 21,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 22,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address:"Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 23,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 24,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 25,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 26,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 27,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 28,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 29,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 30,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 31,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 32,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 33,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 34,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 35,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 36,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 37,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 38,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 39,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 40,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 41,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 42,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 43,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 44,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 45,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 46,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 47,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 48,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 49,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 50,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 51,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 52,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 53,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 54,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 55,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 56,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 57,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 58,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 59,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 60,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 61,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 62,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address:"Ташкент г. Алмазар р.",
  },
  {
    id: 63,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 64,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г. Алмазар р.",
  },
  {
    id: 65,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 66,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г. Алмазар р.",
  },
  {
    id: 67,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 68,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г. Алмазар р.",
  },
  {
    id: 69,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 70,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 71,
    firstName: "Павел Титов",
    number: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 72,
    firstName: "Амелия Белова",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 73,
    firstName: "Ева Васильева",
    number: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 74,
    firstName: "Марьяна Соловьёва",
    number: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 75,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 76,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 77,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 78,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 79,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 80,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 81,
    firstName: "Арсений Морозов",
    number: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 82,
    firstName: "Дамир Баранов",
    number: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  {
    id: 83,
    firstName: "Вероника Новикова",
    number: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 84,
    firstName: "Денис Андреев",
    number: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г. Алмазар р",
  },
  {
    id: 85,
    firstName: "Дмитрий Лебедев",
    number: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 86,
    firstName: "Елизавета Фёдорова",
    number: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "Ташкент г.Янги Алмазар у.51",
  },
  
  

];





  return (
    <div>
      <header className='bg-white w-full h-14 border flex justify-between'>
         <h1 className='text-2xl font-semibold px-8 py-2'>Заказы</h1>
         <button className='border text-green-400 font-semibold text-xl px-12 py-3'>+ Добавить</button>
      </header> 
      <div className='bg-gray-100 w-full h-16 border flex gap-96'>
          <div>
          <form className=' relative '>
            <img src={Search} className='absolute left-10 top-[25px]' alt="search" />
            <input className='py-2 px-11 mt-3 ml-6 rounded-s-xl rounded-e-xl w-[480px] border bg-white border-slate-300 hover:border-indigo-400 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-200'
             type="text" 
              placeholder='Поиск'  />
          </form>
          </div>
          <div className='  -mt-1'>
            <Date/>
          </div>
          
      </div>
       <div className=" w-[1180px] bg-gray-50 mt-12 ml-10 ">
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
    </div>
    </div>
  )
}