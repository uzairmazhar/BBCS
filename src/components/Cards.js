import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn More About Us!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/services.jpg'
              text='Check out all the provided services'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/development.jpg'
              text='Click to get information on our development resources'
              label='Development'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/security.jpg'
              text='Check all the security related features our system provides'
              label='Security'
              path='/services'
            />
            <CardItem
              src='images/login.jpg'
              text='Login to start uploading with us'
              label='Login'
              path='/login'
            />
            <CardItem
              src='images/signup.jpg'
              text='Sign up today'
              label='Signup'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
