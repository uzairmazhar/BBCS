import React from 'react'
import { Link } from 'react-router-dom';
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }

function chck(){
    console.log(localStorage.getItem('Token'));
    var v =(localStorage.getItem('Token'));
    localStorage.removeItem("Username");
    if(v!==null)
    window.location.reload();
    localStorage.removeItem("Token");
    
   
    console.log(localStorage.getItem('Token'));
    
  
}


class Logout extends React.Component {
    render() {
        chck()        
      return (
        <div>
          <h1>You are successfully logout!</h1>
          <h1><Link to="/">Return Home</Link></h1>
          
        </div>
      );
    }
  }
export default Logout;