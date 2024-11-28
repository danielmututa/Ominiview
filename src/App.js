
import './App.css';
import Appointment from './Components/appointment/Appointment';
import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/clients/Clients';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
// import { Routes, Route } from 'react-router-dom';
import Hussle from './Components/pages/hussle';
import Portfolio from './Components/portfolio/Portfolio';
import Pricing from './Components/pricing/Pricing';
import Ourprofessionalteam from './Components/proffessionalteam/Ourprofessionalteam';
import Request from './Components/request-quote/Request';
import Services from './Components/Services/Services';
// import Navbar from './Components/Navbar/Navbar';

function App() {



  return (
    <div className="App">

     <Header/>   
     <Home/>
     <Hussle/>
 <Services/>
 < Portfolio/>
      <Request/>
      <Pricing/>
   <Appointment/>
   <Ourprofessionalteam/>
   < Clients/>
   < Blogs/>
    <Footer/>
    </div>
  );
}

export default App;
