import React from 'react';

const Spinner = () => {
  return (
    <div data-testid='spinner' className='spinner'>
      <div className='double-bounce1'></div>
      <div className='double-bounce2'></div>
    </div>
  );
};

export default Spinner;
