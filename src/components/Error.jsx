import React from 'react';

const Error = ({ error }) => {
  return (
    <div className='p-4 font-bold bg-red-500 text-white text-xl text-center w-full rounded'>
      <p>{error}</p>
    </div>
  );
};

export default Error;
