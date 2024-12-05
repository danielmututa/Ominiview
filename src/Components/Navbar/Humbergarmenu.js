import { useState } from 'react';
import {Link} from 'react-scroll'
const Humbermenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowMenu(false);
    // Add navigation logic here
    // For example: window.location.href = event.target.getAttribute('href');
  };

  return (
    <header className="header--humbagermenu">
      <nav className="navbar">
        <div className="humbagermenu-container">
          {/* <div className="brand">
            <h1>Brand</h1>
          </div>
          
          <div className="toggle" onClick={toggleMenu}>
            <span className={`toggle-btn ${showMenu ? 'open' : ''}`}></span>
          </div> */}

          <div className="humbagermenu--flex">

          <div className="brand">
            <p>Ominiview.</p>
          </div>
          
          <div className="toggle" onClick={toggleMenu}>
            <span className={`toggle-btn ${showMenu ? 'open' : ''}`}></span>
          </div>

          </div>

          <div className={`menu ${showMenu ? 'open' : ''}`}>
            <ul className={`menu-list ${showMenu ? 'open' : ''}`}>
              <li 
                className={`menu-item ${showMenu ? 'open' : ''}`}
                style={{ transitionDelay: '0.25s' }}
              >
                 <Link 
     activeClass='active'
     to='allhome'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     onClick={handleLinkClick}
     className="humbagermenu-link-color"
     >
     HOME
     </Link>
              </li>


              <li 
                className={`menu-item ${showMenu ? 'open' : ''}`}
                style={{ transitionDelay: '0.35s' }}
              >
                <Link 
     activeClass='active'
     to='allhussle'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     onClick={handleLinkClick}
     className="humbagermenu-link-color"
     >
   ABOUT
     </Link>
              </li>



              <li 
                className={`menu-item ${showMenu ? 'open' : ''}`}
                style={{ transitionDelay: '0.45s' }}
              >
                
     <Link 
     activeClass='active'
     to='allservices'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     onClick={handleLinkClick}
     className="humbagermenu-link-color"
     >
    SERVICES
     </Link>
              </li>




              <li 
                className={`menu-item ${showMenu ? 'open' : ''}`}
                style={{ transitionDelay: '0.55s' }}
              >
                 <Link 
     activeClass='active'
     to='allportfolio'
     spy={true}
     smooth={true}
     duration={800}
     offset={50}
     delay={0}
     onClick={handleLinkClick}
     className="humbagermenu-link-color"
     >
     PORTFOLIO
     </Link>
              </li>


              
              <li 
                className={`menu-item ${showMenu ? 'open' : ''}`}
                style={{ transitionDelay: '0.65s' }}
              >
                 <Link 
     activeClass='active'
     to='allappointment'
     spy={true}
     smooth={true}
     duration={1000}
     offset={50}
     delay={0}
     onClick={handleLinkClick}
     className="humbagermenu-link-color"
     >
   CONTACT
     </Link>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Humbermenu;