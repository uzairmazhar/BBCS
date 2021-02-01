import React,{useState} from 'react';
import { Link } from 'react-router-dom'

import './Form.css';
function store(data){
  //console.log(data);
  localStorage.setItem('Token', data.token);
  // localStorage.removeItem("Token");
  // console.log(localStorage.getItem('Token'));
  localStorage.setItem('Username',data.username);
  
  window.location.reload();

}
// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }
async function loginUser(credentials) {
  console.log(credentials)
  
   fetch("http://localhost:9000/users/login", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res=>{
      return res.json()
    }).then(data=>store(data))    
    .catch(error=>console.log('ERROR'));
    
}

 
function FormLogin(){
 

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({
      username,
      password
    });
    // var t =localStorage.getItem('Username');
   
  //   if(username===t){
  //     sleep(500);
  //     window.location.reload();
  // }

      // var tok =localStorage.getItem('Token');
    //  console.log(tok);

     //localStorage.removeItem("Token"); to remove token value
    //  if(tok!==null)
    //  window.location.reload();
  }

 
  return (
    <div> <div className='form-container'>
    <span className='close-btn'>×</span>
    <div className='form-content-left'>
      <img className='form-img' src='img/img-2.svg' alt='spaceship' />
    </div>
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            onChange={e => setUserName(e.target.value)}            
          />          
        </div>        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}         
          />          
        </div>        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Don't have an account? <Link to='./sign-up'>Signup</Link>
        </span>
      </form>
    </div>
  </div>
  </div>
   
  );
};

export default FormLogin;