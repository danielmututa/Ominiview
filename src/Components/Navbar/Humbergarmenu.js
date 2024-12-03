// // Navbar.js
// import { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const menuItems = ['Home', 'About', 'Works', 'Contact'];

//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="container">
//           <div className="brand">
//             <h1>Brand</h1>
//           </div>
          
//           <div className="toggle" onClick={toggleMenu}>
//             <span className={`toggle-btn ${showMenu ? 'open' : ''}`}></span>
//           </div>

//           <div className={`menu ${showMenu ? 'open' : ''}`}>
//             <ul className={`menu-list ${showMenu ? 'open' : ''}`}>
//               {menuItems.map((item, index) => (
//                 <li 
//                   key={index} 
//                   className={`menu-item ${showMenu ? 'open' : ''}`}
//                   style={{ transitionDelay: `${(index * 0.1) + 0.15}s` }}
//                 >
//                   <a href="#" className="menu-link">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;








// /* Navbar.css */
// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//     text-decoration: none;
//     list-style: none;
//   }
  
//   body {
//     font-family: "Poppins", sans-serif;
//     font-size: 1rem;
//     font-weight: normal;
//     line-height: 1.5;
//     color: #212121;
//     background: #ffffff;
//   }
  
//   .container {
//     max-width: 75rem;
//     width: 100%;
//     padding: 0 1rem;
//     margin: 0 auto;
//   }
  
//   .header {
//     position: fixed;
//     z-index: 2;
//     width: 100%;
//     padding: 1rem;
//   }
  
//   .navbar .toggle {
//     position: absolute;
//     width: 2rem;
//     height: 1.4rem;
//     top: 2rem;
//     right: 4rem;
//     z-index: 2;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out;
//   }
  
//   .toggle-btn {
//     position: absolute;
//     top: 0.5rem;
//     right: 0;
//     width: 1.6rem;
//     height: 2px;
//     background: #212121;
//     transition: all 0.3s ease-in-out;
//   }
  
//   .toggle-btn::before {
//     content: "";
//     position: absolute;
//     top: -0.5rem;
//     width: 2rem;
//     height: 2px;
//     background: #212121;
//     transition: all 0.3s ease-in-out;
//   }
  
//   .toggle-btn::after {
//     content: "";
//     position: absolute;
//     top: 0.5rem;
//     width: 1.2rem;
//     height: 2px;
//     background: #212121;
//     transition: all 0.3s ease-in-out;
//   }
  
//   .toggle-btn.open {
//     transform: rotate(720deg);
//     background: transparent;
//   }
  
//   .toggle-btn.open::before {
//     transform: rotate(45deg) translate(5px, 8px);
//   }
  
//   .toggle-btn.open::after {
//     width: 2rem;
//     transform: rotate(-45deg) translate(3px, -6px);
//   }
  
//   .navbar .menu {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     opacity: 1;
//     visibility: hidden;
//   }
  
//   .navbar .menu.open {
//     visibility: visible;
//   }
  
//   .menu-list {
//     display: flex;
//     flex-flow: column wrap;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     overflow: hidden;
//     list-style: none;
//     padding-right: 1rem;
//     background: #ffffff;
//     transform: translateY(-100%);
//     transition: all 0.3s ease-in-out;
//   }
  
//   .menu-list.open {
//     transform: translateY(0);
//   }
  
//   .menu-item {
//     transform: translateX(100vw);
//     transition: all 0.3s ease-in-out;
//   }
  
//   .menu-item.open {
//     transform: translateX(0);
//   }
  
//   .menu-link {
//     display: inline-block;
//     padding: 1rem 0;
//     font-size: 1.5rem;
//     font-weight: 400;
//     line-height: inherit;
//     color: #212121;
//     text-transform: uppercase;
//     transition: all 0.3s ease-in-out;
//   }
  
//   .menu-link:hover {
//     color: #ff652f;
//   }
  
//   .navbar .brand {
//     font-family: inherit;
//     font-size: 1.5rem;
//     font-weight: 500;
//     line-height: inherit;
//     color: #212121;
//     text-transform: uppercase;
//   }