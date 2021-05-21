//IMPORTING PACKAGES
import React from 'react';

//IMPORTING THE GIF FILE
import SpinnerGif from './Loading_icon.gif';

//FUNCTIONAL COMPONENT
const Spinner = () => {
  return (
      <div className='spinner-container d-flex flex-row justify-content-center align-items-center'>
        <img src={SpinnerGif} className='spinner-img' alt='Loading' />
      </div>
  );
};

export default Spinner;
