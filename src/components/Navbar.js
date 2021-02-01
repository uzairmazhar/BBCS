import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
var temp='LOGIN';
var temp2='SIGNUP';
function chck(){
  var tmp =localStorage.getItem('Token')
  var tmp2 =localStorage.getItem('Username')
  if(tmp===null){
    temp='LOGIN';
    temp2='SIGN-UP'
  }
  else {temp='LOGOUT';
      temp2=tmp2.toUpperCase();}

  
}



 function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
 
  chck();
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
   
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BBCS
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/uploadImages2'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Upload
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
              
            </li>
            <li >
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>          
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>{temp2}</Button>}
          
          {button && <Button buttonStyle='btn--outline'>{temp}</Button>}
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
