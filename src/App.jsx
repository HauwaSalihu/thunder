import './App.css'
import Home from './pages/Home';
import MainLayout from './layout/Mainlayout'
import {Route, Routes } from 'react-router';
import Contact from "./components/ThundrFinance/Contact"
import Thunder from './pages/Thunder';
function App() {

  return (
   
     <Routes>
       <Route element={<MainLayout />}>
         <Route path="/" element={<Home />} />
       </Route>
         <Route path="/thunder" element={<Thunder />} />
         <Route path="/thunder-contact" element={<Contact />} />
     </Routes>
  
  )
}

export default App
