import React from 'react';
import Logo from "../assets/head marian chico2.png"

const Header = () => {

  const redirectToWhatsApp = () => {
    window.open("https://wa.me/542215711146", "_blank");
  };

  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt="" />
        </a>
        <button onClick={redirectToWhatsApp} className='btn btn-sm'>Work with me</button>
      </div>
    </div>
    </header>;
};

export default Header;
