import React, { useState } from 'react'
import Desktop from '../img/desktop.svg'
import User from '../img/user.svg'
import Lock from '../img/lock.svg'
import Eye from '../img/eye.svg'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'


export default function Login() {

    const [name, setName] = useState("");
   
    const [password, setPassword] = useState("");
    const [inputError, setInputError] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

      
        const userObject = {
            name: name,
           
            loggedIn: true,
        };

        localStorage.setItem('user', JSON.stringify(userObject));

        dispatch(login(userObject));
    };

   
    const isInputsEmpty = !name.trim() || !password.trim();

    const handleInputChange = (e) => {
       
        if (!e.target.value.trim()) {
            setInputError(true);
        } else {
            setInputError(false);
        }

        
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            
            case "password":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };



  return (
    <div className='container mx-auto fixed'>
      <div className='flex gap-20'>
      <div className='bg-[#0067F4] w-[970px] h-screen'>
        <img className='pt-[180px] w-[550px] pl-14' src={Desktop} alt="" />
       </div>
        <div>
        <h1 className='text-3xl font-semibold mt-24'>Вход в платформу</h1>
       
       <form className='' onSubmit={(e) => handleSubmit(e)}>
         <h1 className='mt-12 text-xl font-semibold'>Имя пользователья*</h1>
          <div className='relative mt-7'>
          <img src={User} className='absolute left-2 top-[10px] w-8' alt="" />
          <input
           className='py-4 px-11 rounded-s-2xl rounded-e-2xl w-[580px] border bg-white border-slate-300 hover:border-indigo-400 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-200'
           type="text"  
           placeholder='Введите имя'
           value={name}
           name="name" 
           onChange={handleInputChange}
           style={{ border: inputError && !name.trim() ? "1px solid red" : "" }}
        />



       <div className='absolute left-4 top-[98px] w-8 flex gap-[500px]'>
       <img src={Lock} alt="" />
       <img src={Eye} alt="" />
      </div>
    
      <input
       className='py-4 px-11 mt-6 rounded-s-2xl rounded-e-2xl w-[580px] border bg-white border-slate-300 hover:border-indigo-400 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-200'
       type="password" 
       placeholder='Введите пароль'
       value={password}
       name="password"  
       onChange={handleInputChange}
       style={{ border: inputError && !password.trim() ? "1px solid red" : "" }}
      />

          </div>
          
          <button disabled={isInputsEmpty} className='py-4 px-11 mt-6  rounded-s-2xl rounded-e-2xl  w-[580px] border bg-blue-500  border-slate-300 hover:border-indigo-400 text-white'>
          Войти
          </button>


       </form>
       <h1 className='mt-48'>Copyright ©Girgitton. Все права защищены</h1>
        </div>
       
      </div>
      
    </div>
  )
}
