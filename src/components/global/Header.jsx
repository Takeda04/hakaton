import React from 'react';
import logo from '../../assets/logo.svg';
const Header = () => {
  return (
    <header className='pt-[73px] bg-transparent'>
      <div className='container-custom'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
};

export default Header;
