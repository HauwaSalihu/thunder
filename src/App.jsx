import './App.css'
import Home from './pages/Home';
import MainLayout from './layout/Mainlayout'
import {Route, Routes } from 'react-router';
import TContact from './components/ThundrFinance/TContact';
import Thunder from './pages/Thunder';
import Services from './components/ThundrFinance/Services';
import Contact from './components/Contact';
function App() {

  return (
   
     <Routes>
       <Route element={<MainLayout />}>
         <Route path="/" element={<Home />} />
<Route path='/contact' element={<Contact />}/>
       </Route>
         <Route path="/padipay" element={<Thunder />} />
         <Route path="/thunder-contact" element={<TContact />} />
          <Route path="/services" element={<Services />} />
     </Routes>
  
  )
}

export default App
