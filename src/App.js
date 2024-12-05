
import './App.css';
import Appointment from './Components/appointment/Appointment';
import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/clients/Clients';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Hussle from './Components/pages/hussle';
import Portfolio from './Components/portfolio/Portfolio';
import Pricing from './Components/pricing/Pricing';
import Ourprofessionalteam from './Components/proffessionalteam/Ourprofessionalteam';
import Request from './Components/request-quote/Request';
import Services from './Components/Services/Services';
import Humbermenu from './Components/Navbar/Humbergarmenu';
// import Navbar from './Components/Navbar/Navbar';

function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <div className="App">
<Humbermenu/>
     <Header/>   
     <Home id="home"/>
     <Hussle id="hussle"/>
 <Services id="services"/>
 < Portfolio id="portfolio"/>
      <Request id="request"/>
      <Pricing id="pricing"/>
   <Appointment id="appointment"/>
   <Ourprofessionalteam id="proffessinalteam"/>
   < Clients id="client"/>
   < Blogs id="blogs"/>
    <Footer id="footer"/>


          </div>
        }/>

           
    </Routes>

    </div>
  );
}

export default App;
