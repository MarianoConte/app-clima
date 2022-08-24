import React from 'react';

const Header = () => {
  return (
    <header className='bg-sky-500 p-2'>
      <div className='flex items-center md:px-40'>
        <img
          src='/assets/icons/03d-cropped.svg'
          className='h-12 w-12 mx-3'
          alt='Imagen del tiempo'
        />
        <h1 className='text-white text-2xl'> Clima app</h1>
      </div>
    </header>
  );
};

export default Header;
