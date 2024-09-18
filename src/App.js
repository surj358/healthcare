import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Doctor } from './pages/Doctor';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Myprofile } from './pages/MyProfile';
import { MyAppointment } from './pages/MyAppointments';
import { Appointment } from './pages/Appointment';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='mx-4 md:mx-10'>
      <Navbar />

      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/doctor' element={<Doctor />} />
         <Route path='/doctor/:speciality' element={<Doctor />} />
         <Route path='/login' element={<Login />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/my-profile' element={<Myprofile />} />
         <Route path='/my-appointments' element={<MyAppointment />} />
         <Route path='/appointment/:docId' element={<Appointment />} />
      
      
      </Routes>
    </div>
  );
}

export default App;
