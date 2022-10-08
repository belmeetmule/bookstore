import React from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../assets/user-img.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Catgories',
    },
  ];

  return (

    <header className="flexd">
      <div className="h-links flexd">
        <h1>BookCMS</h1>
        {links.map((link) => (
          <NavLink key="link.id" to={link.path} className="link">
            {link.text}
          </NavLink>
        ))}
      </div>
      <div id="user-pic">
        <img src={userImg} alt="profile-pic" />
      </div>
    </header>
  );
};

export default Navbar;
