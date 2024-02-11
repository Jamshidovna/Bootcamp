import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { selectUser, login } from './features/userSlice';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Zakaz from './pages/Zakaz';
import Klient from './pages/Klient';
import Marketing from './pages/Marketing';
import Home from "./components/Home";
import SingleClient from "./pages/SingleClient";
import KlientZakaz from './pages/KlientZakaz'


function App() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      dispatch(login(JSON.parse(storedUser)));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        {user ? <Route   path="/" element={<Home />} /> : <Route  path="/login" element={<Login />} />}
      </Routes>

      {user && (
        <Sidebar>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/zakaz' element={<Zakaz />} />
            <Route path='/klient' element={<Klient />} />
            <Route path='/marketing' element={<Marketing />} />
            <Route path='/klient/singleClient' element={<SingleClient/>} />
            <Route path='/klient/singleClient/order' element={<KlientZakaz/>} />
          </Routes>
        </Sidebar>
      )}
    </>
  );
}

export default App;
