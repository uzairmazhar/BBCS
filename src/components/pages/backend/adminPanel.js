import React, { useState } from 'react';
import axios from 'axios';
import './style2.css';



function AdminPanel() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    var tok =localStorage.getItem('Token');
    //console.log(localStorage.getItem('Username'));
    var bea="bearer "
    var result = bea+tok;
    const config = {
      headers: {
          // 'content-type': 'multipart/form-data',
          "Authorization":result
      }
  };

    const response = await axios.get(
      "https://bbcs-backend.herokuapp.com/admin/content",config);
      console.log(response.data);
    setBooks(response.data);
    if(response.data.length===0)    
      alert("No Content Is Uploaded yet");
    
  };

  return (
    <div className="App">
      <h1>Current Data On Our System</h1>
      {/* <h2>Fetch a list from an API and display it</h2> */}

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Show Uploads
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
          

            return (
              <div className="bookA" key={index}>
                <h3>Content {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                <p><b>  USERNAME: </b>{book.user.username}</p>
                  <p><b>  FILE NAME: </b>{book.content}</p>
                  <p><b>UPLOADED ON: </b>{book.createdAt}</p>
                  <p><b>HASH: </b>{book.ipfs_Hash}</p>
                  
                </div>
              </div>
            );
          })}
      </div>

     
    </div>
  );
}
export default AdminPanel;
