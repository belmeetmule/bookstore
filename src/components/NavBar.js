import React from 'react';
import { NavLink } from 'react-router-dom';

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

  const navStyle = {
    marginBottom: '3rem',
  };

  const headerStyle = {
    display: 'inline-block',
    marginRight: '2rem',
  };
  return (

    <nav style={navStyle}>
      <h1 style={headerStyle}>BookCMS</h1>
      <ul className="menu">
        {links.map((link) => (
          <li key={link.id} className="menuItem">
            <NavLink to={link.path} className="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
