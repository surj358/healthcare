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
import { Footer } from './components/footer';
import { Demo } from './pages/demo';
import { AdminDashboard } from './pages/Admin-Dashboard';
import { DoctorDashboard } from './pages/Doctor-dashboard';
import { UserDashboard } from './pages/UserDasboard';
import { Suraj } from './pages/swiper';
import { TodoDashBoard } from './User/todo-dashboard';
import { ToDoAddTask } from './User/todo-addtask';
import { ToDoRemoveTask } from './User/todo-remove';
import { AdminLogin } from './Admin/admin';
import { AddDoctors } from './Admin/addDoctors';
import { DoctorLogin } from './Doctor/doctor-Login';


function App() {
  return (
    <div className='lg:mx-10 sm:mx-10'>
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
         <Route path='/demo' element={<Demo />} />
         <Route  path='/admin-dashboard' element={<AdminDashboard />}/>
         <Route  path='/doctor-dashboard' element={<DoctorDashboard/>}/>
        <Route path='/user-dashboard' element={<UserDashboard />}/>
        <Route path='/dashboard' element={<TodoDashBoard />} />
        <Route path='/add-task' element={<ToDoAddTask />} />
        <Route path='/delete-task/:id' element={<ToDoRemoveTask />}/>
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/add-doctors' element={<AddDoctors />}/>
        <Route path='/doctor-login' element={<DoctorLogin />} />
            
      </Routes>

    </div>
  );
}

export default App;
