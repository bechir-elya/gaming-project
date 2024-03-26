import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Shop from './Pages/Shop';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';



function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About us' element={<AboutUs/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Contact' element={<Contact/>} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
