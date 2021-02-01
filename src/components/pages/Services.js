import React from 'react';
import '../../services.scss';

class Services extends React.Component {
  render() {
              
    return (
      <div>
      <div className="container">
      <div className="card">
         <div className="card__image-container">
           <img className="card__image" src="images/A.jpg" alt=""></img>
        </div>
          
          <svg className="card__svg" viewBox="0 0 800 500">
    
            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
          </svg>
        
         <div className="card__content">
           <h1 className="card__title">Service</h1>
         <p>The system BBCS will ask a user to upload their content, The content will be saved on our system in a way that another user can not replicate the original user's content. So, that the original owner of the content is appreciated rather then someone else.</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="card">
         <div className="card__image-container">
           <img className="card__image" src="images/B.png" alt=""></img>
        </div>
          
          <svg className="card__svg" viewBox="0 0 800 500">
    
            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
          </svg>
        
         <div className="card__content">
           <h1 className="card__title">Develop</h1>
         <p>The frontend of the system is made in reactJS, backend is made in nodeJS and blockchain using certificate NFT ERC721, is being used to store the data of the system.</p>
        </div>
      </div>
    </div>


    <div className="container">
      <div className="card">
         <div className="card__image-container">
           <img className="card__image" src="images/C.jpg" alt=""></img>
        </div>
          
          <svg className="card__svg" viewBox="0 0 800 500">
    
            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
          </svg>
        
         <div className="card__content">
           <h1 className="card__title">Security</h1>
         <p>Privacy of the user is being secured in the system BBCS, the password of the user is being stored using hashes and salt from which unauthorized user can not access a user's account.</p>
        </div>
      </div>
    </div>

    </div>
    
    
    
    );
  }
}
export default Services;
