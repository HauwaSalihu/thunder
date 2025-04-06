import './App.css'
import Home from './pages/Home';
import MainLayout from './layout/Mainlayout'
import {Route, Routes } from 'react-router';
import Contact from './pages/Contact';
function App() {

  return (
   
     <Routes>
       <Route element={<MainLayout />}>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
       </Route>
     </Routes>
  
  )
}

export default App
